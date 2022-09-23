import { useEffect, useState } from "react";
import "./App.css";
import { SignedInPage } from "./pages/SignedInPage";
import { SignedOutPage } from "./pages/SignedOutPage";

export type User = {
  id: number;
  email: string;
  password: string;
  balance: number;
  recieved?: {
    id: number;
    amount: number;
    message: string;
    senderId: number;
    recieverId: number;
  }[];
  sent?: {
    id: number;
    amount: number;
    message: string;
    senderId: number;
    recieverId: number;
  }[];
};
function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  function signIn(data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }
  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4444/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((rsp) => rsp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);
  return (
    <div className="App">
      {currentUser ? (
        <SignedInPage currentUser={currentUser} signOut={signOut} />
      ) : (
        <SignedOutPage signIn={signIn} />
      )}
    </div>
  );
}

export default App;
