import { User } from "../App";

type Props = {
  currentUser: User | null;
  signOut: () => void;
};
let array = ["elona", "eli", "hello"];
export function SignedInPage({ currentUser, signOut }: Props) {
  if (currentUser === null) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Welcome back {currentUser.email}!</h1>
      <h2>Your transactions:</h2>
      <ul>
        {currentUser.recieved.map((transaction) => (
          <>
            Recieved:
            <li>From:{transaction.senderId}</li>
            <li>Amount: {transaction.amount}</li>
            <li>Message: {transaction.message}</li>
          </>
        ))}
        {
          currentUser.sent.map((transaction) =>(
            <>
            <li>To:{transaction.senderId}</li>
            <li>Amount: {transaction.amount}</li>
            <li>Message: {transaction.message}</li>
            </>
          ))
        }
      </ul>
      <button
        onClick={() => {
          signOut();
        }}
      >
        SIGN OUT
      </button>
    </div>
  );
}
