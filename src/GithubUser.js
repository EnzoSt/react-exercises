import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();
        console.log(result);

        setUser(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [username]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} style={{ width: "8rem" }} alt="Avatar" />
      <p>User Id: {user.id}</p>
      <p>Number of Repositories: {user.public_repos}</p>
      <a href={user.html_url}>View on Github</a>
    </div>
  );
}
