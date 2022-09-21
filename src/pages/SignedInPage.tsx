import { User } from "../App";

type Props = {
  currentUser: User | null,
  signOut: () => void
};
export function SignedInPage({ currentUser, signOut }: Props) {
  if (currentUser === null) return <h1>Loading</h1>
    return (
      <div>
        <h1>Welcome back {currentUser.email}!</h1>
        <button onClick={() => {
            signOut()
        }}>SIGN OUT</button>
      </div>
    );
}
