import { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <form>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
      </form>

      <div>
        <h3>{username}</h3>
        <h3>{showPassword ? password : "*".repeat(password.length)}</h3>
      </div>

      <button onClick={handleClick}>{showPassword ? "Hide Password" : "Show Password"}</button>
    </div>
  );
};

export default App;
