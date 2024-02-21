import { FormEvent } from "react";
import { Input } from "@/components/input/input.tsx";
import "./sign-up.scss";

export const SignUp = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up">
      <h3 className="sign-up-title">Sign up for our newsletter</h3>
      <div className="sign-up-content">
        <p className="sign-up-info">
          Stay up to date with our campaigns, and the impact we have on young
          peoples lives by signing up for emails from Connect-Ed
        </p>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          {/*//TODO replace button with one from opened pull request*/}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};
