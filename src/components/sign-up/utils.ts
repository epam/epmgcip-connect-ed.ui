import {
  AddEmailToEmailListPayload,
  AddEmailToEmailsListResponse,
  SendPulseTokenData,
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
