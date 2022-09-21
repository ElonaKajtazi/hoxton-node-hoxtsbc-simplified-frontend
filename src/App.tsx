import { useState } from "react";
import "./App.css";
import { SignedInPage } from "./pages/SignedInPage";
import { SignedOutPage } from "./pages/SignedOutPage";

export type User = {
  id: number;
  email: string;
  password: string;
};
function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  function signIn (user: User) {
    setCurrentUser(user)
  }
  function signOut() {
    setCurrentUser(null)
  }
  return (
    <div className="App">
      {currentUser ? (
        <SignedInPage currentUser={currentUser} />
      ) : (
        <SignedOutPage signIn={signIn}/>
      )}
    </div>
  );
}

export default App;
