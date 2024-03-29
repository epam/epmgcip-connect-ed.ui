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

export interface SignUpState {
  isLoading: boolean;
  payload?: AddEmailToEmailListPayload;
  success: boolean;
  error: boolean;
}

export interface SignUpTokenState {
  expirationTime: number;
  data: SendPulseTokenData;
}

export enum SignUpActionType {
  LoadingStart,
  LoadingSuccess,
  LoadingError,
}

export type SignUpAction =
  | {
      type: SignUpActionType.LoadingStart;
    }
  | {
      type: SignUpActionType.LoadingSuccess;
      payload: boolean;
    }
  | {
      type: SignUpActionType.LoadingError;
      payload: AddEmailToEmailListPayload;
    };
