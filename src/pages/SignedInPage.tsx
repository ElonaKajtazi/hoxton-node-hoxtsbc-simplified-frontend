import { User } from "../App";

type Props = {
  currentUser: User | null;
};
export function SignedInPage({ currentUser }: Props) {
  if (!currentUser) return <h1>Loading...</h1>
    return (
      <div>
        <h1>Welcome back! {currentUser.email}!</h1>
      </div>
    );
}
