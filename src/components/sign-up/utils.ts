import {
  AddEmailToEmailListPayload,
  AddEmailToEmailsListResponse,
  SendPulseTokenData,
  SignUpAction,
  SignUpActionType,
  SignUpState,
  SubscriptionFormField,
} from "@/components/sign-up/sign-up.types.ts";

const sendPulseHost = import.meta.env.VITE_SEND_PULSE_HOST;

const REQUEST_HEADERS = {
  "Content-type": "application/json",
};

export const shouldRequestToken = (expirationTime: number) =>
  Date.now() + 5000 < expirationTime;

export const loadAccessToken = (
  clientId: string,
  clientSecret: string,
): Promise<SendPulseTokenData> => {
  const payload = {
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  };

  return fetch(`${sendPulseHost}/oauth/access_token`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: REQUEST_HEADERS,
  }).then(response => response.json() as Promise<SendPulseTokenData>);
};

export const addEmailToEmailList = (
  emailListId: string,
  token: string,
  payload: AddEmailToEmailListPayload,
): Promise<AddEmailToEmailsListResponse> =>
  fetch(`${sendPulseHost}/addressbooks/${emailListId}/emails`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      ...REQUEST_HEADERS,
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json() as Promise<AddEmailToEmailsListResponse>);

export const signUpReducer = (state: SignUpState, action: SignUpAction) => {
  switch (action.type) {
    case SignUpActionType.LoadingStart: {
      return {
        ...state,
        isLoading: true,
        error: false,
        success: false,
      };
    }
    case SignUpActionType.LoadingSuccess: {
      return {
        isLoading: false,
        success: action.payload,
        error: !action.payload,
        payload: undefined,
      };
    }
    case SignUpActionType.LoadingError: {
      return {
        isLoading: false,
        success: false,
        error: true,
        payload: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const getAddEmailToEmailListPayload = (
  data: FormData,
): AddEmailToEmailListPayload => {
  const formProps = Object.fromEntries(data);
  const name = formProps[SubscriptionFormField.Name].toString().trim();
  const email = formProps[SubscriptionFormField.Email].toString().trim();

  return {
    emails: [
      {
        email,
        variables: {
          name,
        },
      },
    ],
  };
};
