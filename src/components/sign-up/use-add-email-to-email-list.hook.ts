import { useReducer, useRef } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "@/components/sign-up/contstants.ts";
import {
  AddEmailToEmailListPayload,
  SendPulseTokenData,
  SignUpActionType,
  SignUpTokenState,
} from "@/components/sign-up/sign-up.types.ts";
import {
  addEmailToEmailList,
  loadAccessToken,
  shouldRequestToken,
  signUpReducer,
} from "@/components/sign-up/utils.ts";

export const useAddEmailToEmailList = (id: string) => {
  const [state, dispatch] = useReducer(signUpReducer, {
    isLoading: false,
    payload: undefined,
    success: false,
    error: false,
  });

  const tokenDataRef = useRef<SignUpTokenState | undefined>();

  const getTokenData = (): Promise<SendPulseTokenData> => {
    if (
      tokenDataRef.current &&
      shouldRequestToken(tokenDataRef.current.expirationTime)
    ) {
      return Promise.resolve(tokenDataRef.current.data);
    } else {
      return loadAccessToken(CLIENT_ID, CLIENT_SECRET).then(data => {
        const expiresInMilliseconds = data.expires_in * 1000;
        tokenDataRef.current = {
          expirationTime: Date.now() + expiresInMilliseconds,
          data,
        };

        return data;
      });
    }
  };

  const sendAddEmailRequest = (payload: AddEmailToEmailListPayload) => {
    dispatch({ type: SignUpActionType.LoadingStart });

    getTokenData()
      .then(data =>
        addEmailToEmailList(id, data.access_token, payload).then(resultData => {
          dispatch({
            type: SignUpActionType.LoadingSuccess,
            payload: resultData.result,
          });
        }),
      )
      .catch(() => {
        dispatch({ type: SignUpActionType.LoadingError, payload });
      });
  };

  return {
    state,
    sendAddEmailRequest,
  };
};
