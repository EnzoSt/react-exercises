import { useControlledForm } from "./useControlledForm";

export function ControlledForm() {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit
  } = useControlledForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </label >
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}