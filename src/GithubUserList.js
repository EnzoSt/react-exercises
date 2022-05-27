import { useEffect, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    setUsers([...users, input]);
    setInput("");
  };

  useEffect(() => {
    setUsers([]);
  }, []);

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={user + index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
