import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/button/button.tsx";
import { InputField } from "@/components/input-field/input-field.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { CLIENT_ID, CLIENT_SECRET } from "@/components/sign-up/contstants.ts";
import {
  AddEmailToEmailListPayload,
  SendPulseTokenData,
  SubscriptionFormField,
} from "@/components/sign-up/sign-up.types.ts";
import {
  addEmailToEmailList,
  loadAccessToken,
  shouldRequestToken,
} from "@/components/sign-up/utils.ts";
import { ComponentSharedColor } from "@/__generated__/graphql.ts";
import "./sign-up.scss";

export interface SignUpProps {
  title: string;
  description: string;
  id: string;
  theme?: ComponentSharedColor;
  nameField: {
    label: string;
    placeholder: string;
  };
  emailField: {
    label: string;
    placeholder: string;
  };
  action: string;
  successMessage: string;
  errorMessage: string;
}

export const SignUp = ({ title, description, id }: SignUpProps) => {
  const [state, setState] = useState({
    isLoading: false,
    success: false,
    error: false,
  });

  const tokenDataRef = useRef<
    | {
        expirationTime: number;
        data: SendPulseTokenData;
      }
    | undefined
  >();

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    const name = formProps[SubscriptionFormField.Name].toString().trim();
    const email = formProps[SubscriptionFormField.Email].toString().trim();

    const payload: AddEmailToEmailListPayload = {
      emails: [
        {
          email,
          variables: {
            name,
          },
        },
      ],
    };

    setState({
      isLoading: true,
      error: false,
      success: false,
    });

    getTokenData()
      .then(data =>
        addEmailToEmailList(id, data.access_token, payload).then(resultData => {
          setState({
            isLoading: false,
            success: resultData.result,
            error: !resultData.result,
          });
        }),
      )
      .catch(() => {
        setState({
          isLoading: false,
          success: false,
          error: true,
        });
      });
  };

  return (
    <SectionBase className="sign-up">
      <div className="sign-up-content">
        {state.success ? (
          <div>You signed up successfully</div>
        ) : (
          <>
            <Title as="h3" className="sign-up-title">
              {title}
            </Title>
            <div className="sign-up-layout">
              <Typography className="sign-up-info">{description}</Typography>
              <form className="sign-up-form" onSubmit={handleSubmit}>
                <InputField
                  label="Name"
                  name={SubscriptionFormField.Name}
                  placeholder="Ivan"
                  required
                />
                <InputField
                  label="Email"
                  name={SubscriptionFormField.Email}
                  type="email"
                  placeholder="example@connect-ed.com"
                  required
                />
                <Button
                  type="submit"
                  className="sign-up-action"
                  disabled={state.isLoading}
                >
                  {state.isLoading ? "Processing..." : "Sign up"}
                </Button>
                {state.error && (
                  <Typography className="sign-up-error">Error</Typography>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </SectionBase>
  );
};
