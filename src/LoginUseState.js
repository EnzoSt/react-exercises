import { useState } from "react";

export function LoginUseState() {
  const [date, setDate] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setDate((date) => {
      return {
        ...date,
        [name]: type === "checked" ? checked : value,
      };
    });
  }

  function onLogin(event) {
    event.preventDefault();
    console.log(date);
  }

  return (
    <form onSubmit={onLogin}>
      <input
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
        value={date.username}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={date.password}
      />
      <input
        name="remember"
        type="checkbox"
        onChange={handleInputChange}
        checked={date.remember}
      />
      <button type="submit" disabled={!date.username || !date.password}>
        Login
      </button>
    </form>
  );
}
