import { SectionBase } from "@/components/section-base/section-base.tsx";
import { SendgridForm } from "@/components/sendgrid-form/sendgrid-form.tsx";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";
import { SubscriptionFormFragmentFragment } from "@/__generated__/graphql.ts";
import "./sign-up.scss";

export interface SignUpProps {
  data: SubscriptionFormFragmentFragment;
}

export const SignUp = ({ data }: SignUpProps) => {
  return (
    <SectionBase className="sign-up">
      <div className="sign-up-content">
        <Title
          level={data?.Title?.HeadingLevel}
          className="sign-up-title"
        >
          {data?.Title?.Title}
        </Title>
        <div className="sign-up-layout">
          <Typography className="sign-up-info">{data?.Text}</Typography>
          <SendgridForm id={data?.id} />
        </div>
      </div>
    </SectionBase>
  );
};
