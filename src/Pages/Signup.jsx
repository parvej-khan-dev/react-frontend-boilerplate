import React from "react";
import { requestHandler } from "../utils";
import { registerUser } from "../api";

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const signUpHandler = async (data) => {
    await requestHandler(
      async () => registerUser(data),
      setLoading,
      (res) => {
        const { data } = res;
        console.log(data);
      },
      setError
    );
  };
  return <div>Signup</div>;
};

export default SignUp;
