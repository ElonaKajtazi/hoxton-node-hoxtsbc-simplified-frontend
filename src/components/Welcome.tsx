import { User } from "../App";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export function Welcome({ setPage }: Props) {
  return (
    <>
      <h1>Welcome to Hoxt-SBC</h1>
      <h2>Sign in or create a new account</h2>
      <div>
        <span
          onClick={() => {
            setPage(1);
          }}
        >
          SIGN IN
        </span>{" "}
        <span
          onClick={() => {
            setPage(2);
          }}
        >
          SIGN UP
        </span>
      </div>
    </>
  );
}
