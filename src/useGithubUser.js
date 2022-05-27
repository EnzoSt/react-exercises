import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const result = await response.json();
        console.log(result);

        setUser(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [username]);

  return {user};
}