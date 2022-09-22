import { useState } from "react";
import { User } from "../App";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SingUp";
import { Welcome } from "../components/Welcome";

type Props = {
  signIn: (user: User) => void;
};
export function SignedOutPage({ signIn }: Props) {
  const [page, setPage] = useState(0);
  return (
    <div>
      {page === 0 ? <Welcome setPage={setPage} /> : null}
      {page === 1 ? <SignIn signIn={signIn} /> : null}
      {page === 2 ? <SignUp signIn={signIn} /> : null}
    </div>
  );
}
