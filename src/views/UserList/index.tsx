import { useState, useEffect } from "react";
import List from "./List";

const UsersList = () => {
  //todo types
  const [users, setUsers] = useState<any>([]);
  const [isError, setError] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal }
        );
        const data = await response.json();

        setUsers(data);
      } catch (e) {}
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>Users list</h1>
      <List items={users} />
    </>
  );
};

export default UsersList;
