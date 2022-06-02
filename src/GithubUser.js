import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const { username } = useParams()
  const { user } = useGithubUser(username);

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
