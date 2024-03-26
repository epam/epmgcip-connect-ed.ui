import { FormEvent, useMemo } from "react";
import { Button } from "@/components/button/button.tsx";
import { InputField } from "@/components/input-field/input-field.tsx";
import { SectionBase } from "@/components/section-base/section-base.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import "./sign-up.scss";

export const SignUp = () => {
  const { nameField, emailField } = useMemo(() => {
    return {
      nameField: {
        label: "Name",
        inputProps: {
          name: "name",
          placeholder: "Ivan",
          required: true,
        },
      },
      emailField: {
        label: "Email",
        inputProps: {
          name: "email",
          placeholder: "example@connect-ed.com",
          required: true,
        },
      },
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /*const form = event.target as HTMLFormElement;

    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);

    console.log(!formProps["name"].toString().trim());*/
  };

  return (
    <SectionBase className="sign-up">
      <div className="sign-up-content">
        <Title as="h3" className="sign-up-title">
          Sign up for our newsletter
        </Title>
        <div className="sign-up-layout">
          <Typography className="sign-up-info">
            Stay up to date with our campaigns, and the impact we have on young
            peoples lives by signing up for emails from Connect-Ed
          </Typography>
          <form className="sign-up-form" onSubmit={handleSubmit} noValidate>
            <InputField {...nameField} />
            <InputField {...emailField} />
            <Button type="submit" className="sign-up-action">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </SectionBase>
  );
};
