import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
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
      <form>
        <h2>Sign in</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button>SIGN IN</button>
      </form>
    </div>
  );
}

export default App;
