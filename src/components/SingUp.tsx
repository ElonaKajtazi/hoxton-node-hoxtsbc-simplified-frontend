import { User } from "../App";

type Props = {
  signIn: (user: User) => void;
};
export function SignUp({ signIn }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetch("http://localhost:4444/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value,
          }),
        })
          .then((rsp) => rsp.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              signIn(data);
            }
          });
      }}
    >
      <h2>Sign up</h2>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button>SIGN UP</button>
    </form>
  );
}
