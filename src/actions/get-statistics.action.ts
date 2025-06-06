import { Auth, google, sheets_v4 } from "googleapis";

const getSpreadsheetRange = (tabName?: string, range?: string) => {
  let targetRange: string[] = [];

  if (tabName) {
    targetRange.push(tabName);
  }

  if (range) {
    targetRange.push(range);
  }

  return targetRange.join("!");
};

const getAgeOfChild = (data: unknown[]) => {
  const AGE_CELL_INDEX = 21;
  const BIRTHDATE_INDEX = 6;

  const age = data[AGE_CELL_INDEX];

  if (age) {
    const parsedAge = parseInt(age as string, 10);
    return Number.isNaN(parsedAge) ? -1 : parsedAge;
  }
  const year = (data[BIRTHDATE_INDEX] as string) ?? "";

  if (!year) {
    return -1;
  }

  const yearFromTable = parseInt(year, 10);
  const currentYear = new Date().getFullYear();

  if (Number.isNaN(yearFromTable) || yearFromTable >= currentYear) {
    return -1;
  }

  return currentYear - yearFromTable;
};

const calculateStatistics = (data: unknown[][]) => {
  const {
    numberOfChildren,
    numberOfEquipment,
    totalAgeOfChildren,
    totalNumberOfChildrenForAge,
  } = data.reduce(
    (accumulator, row, index) => {
      if (index === 0) {
        // skip header of the table
        return accumulator;
      }

      accumulator.numberOfChildren += 1;
      accumulator.numberOfEquipment += 1;

      const age = getAgeOfChild(row);

      if (age !== -1) {
        accumulator.totalAgeOfChildren += age;
        accumulator.totalNumberOfChildrenForAge += 1;
      }

      return accumulator;
    },
    {
      numberOfChildren: 0,
      numberOfEquipment: 0,
      totalAgeOfChildren: 0,
      totalNumberOfChildrenForAge: 0,
    },
  );

  const averageYearOfChild =
    totalAgeOfChildren && totalNumberOfChildrenForAge
      ? totalAgeOfChildren / totalNumberOfChildrenForAge
      : 0;

  return {
    numberOfChildren,
    numberOfEquipment,
    averageYearOfChild,
  };
};

async function getGoogleSheetClient(
  credentials: Auth.ExternalAccountClientOptions,
  scopes: string | string[] | undefined,
) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes,
    });

    const authClient = await auth.getClient();

    return google.sheets({
      version: "v4",
      auth: authClient as Auth.OAuth2Client,
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.error("Error initializing Google Sheets API:", error);
    throw error;
  }
}

async function readGoogleSheet(
  googleSheetClient: sheets_v4.Sheets,
  sheetId: string,
  range: string,
) {
  try {
    const res = await googleSheetClient.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });

    return res.data.values ?? [];
  } catch (error) {
    //eslint-disable-next-line no-console
    console.error("Error while reading google spreadsheet", error);
    return [];
  }
}

const getSpreadsheetConfig = () => {
  const base64CredentialsJSON =
    process.env.GOOGLE_SPREADSHEET_BASE_64_CREDENTIALS_JSON;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const tabName = process.env.GOOGLE_SPREADSHEET_TAB_NAME;
  const scopes = process.env.GOOGLE_SPREADSHEET_SCOPES;

  let errorProperties: string[] = [];

  if (!base64CredentialsJSON) {
    errorProperties.push("GOOGLE_SPREADSHEET_BASE_64_CREDENTIALS_JSON");
  }

  if (!spreadsheetId) {
    errorProperties.push("GOOGLE_SPREADSHEET_ID");
  }

  if (!tabName) {
    errorProperties.push("GOOGLE_SPREADSHEET_TAB_NAME");
  }

  if (!scopes) {
    errorProperties.push("GOOGLE_SPREADSHEET_SCOPES");
  }

  if (errorProperties.length > 0) {
    throw new Error(
      `${errorProperties.join(", ")} environment variable is not set.`,
    );
  }

  const credentials = JSON.parse(
    Buffer.from(base64CredentialsJSON ?? "", "base64").toString("utf-8"),
  );

  return {
    scopes: scopes ?? "",
    tabName: tabName ?? "",
    credentials: credentials ?? {},
    spreadsheetId: spreadsheetId ?? "",
  };
};

export async function getStatisticsAction() {
  try {
    const { credentials, spreadsheetId, tabName, scopes } =
      getSpreadsheetConfig();

    const range = getSpreadsheetRange(tabName, "");

    // Generating google sheet client
    const googleSheetClient = await getGoogleSheetClient(credentials, scopes);

    // Reading Google Sheet from a specific range
    const data = await readGoogleSheet(googleSheetClient, spreadsheetId, range);

    return calculateStatistics(data);
  } catch (error) {
    //eslint-disable-next-line no-console
    console.error("Error getting statistics", error);

    return {
      numberOfChildren: 0,
      numberOfEquipment: 0,
      averageYearOfChild: 0,
    };
  }
}
