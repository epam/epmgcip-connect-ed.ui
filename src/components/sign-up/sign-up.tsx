import { FormEvent } from "react";
import { InputField } from "@/components/input-field/input-field.tsx";
import { LoadingButton } from "@/components/loading-button/loading-button.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { SubscriptionFormField } from "@/components/sign-up/sign-up.types.ts";
import { useAddEmailToEmailList } from "@/components/sign-up/use-add-email-to-email-list.hook.ts";
import { getAddEmailToEmailListPayload } from "@/components/sign-up/utils.ts";
import Attention from "@/assets/icons/attention.svg?react";
import Heart from "@/assets/icons/heart.svg?react";
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
  const {
    state: { payload, error, success, isLoading },
    sendAddEmailRequest,
  } = useAddEmailToEmailList(id);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const requestPayload = getAddEmailToEmailListPayload(formData);

    sendAddEmailRequest(requestPayload);
  };

  const handleTryAgainClick = payload
    ? () => {
        sendAddEmailRequest(payload);
      }
    : undefined;

  const renderContent = () => {
    if (success) {
      return (
        <div className="sign-up-success">
          <Heart className="sign-up-state-icon" />
          <Typography>
            Thank you for your subscription! You’ll hear from us soon!
          </Typography>
        </div>
      );
    }

    if (error) {
      return (
        <div className="sign-up-error">
          <Attention className="sign-up-state-icon" />
          <Typography>It seems something went wrong</Typography>
          <LoadingButton
            className="sign-up-action"
            isLoading={isLoading}
            onClick={handleTryAgainClick}
          >
            Try again
          </LoadingButton>
        </div>
      );
    }

    return (
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
        <LoadingButton
          type="submit"
          className="sign-up-action"
          isLoading={isLoading}
        >
          Sign up
        </LoadingButton>
      </form>
    );
  };

  return (
    <SectionBase className="sign-up">
      <div className="sign-up-content">
        <Title as="h3" className="sign-up-title">
          {title}
        </Title>
        <div className="sign-up-layout">
          <Typography className="sign-up-info">{description}</Typography>
          {renderContent()}
        </div>
      </div>
    </SectionBase>
  );
};
