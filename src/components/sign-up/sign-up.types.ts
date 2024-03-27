export enum SubscriptionFormField {
  Name = "name",
  Email = "email",
}

export interface SendPulseTokenData {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface AddEmailToEmailListItem {
  email: string;
  variables: {
    name: string;
  };
}

export interface AddEmailToEmailListPayload {
  emails: AddEmailToEmailListItem[];
}

export interface AddEmailToEmailsListResponse {
  result: boolean;
}
