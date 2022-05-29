import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const result = await response.json();
        console.log(result);

        setUser(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  return {user, loading, error};
}