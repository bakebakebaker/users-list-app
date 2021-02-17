import { useState, useEffect, useMemo, SyntheticEvent } from "react";
import { Spinner, Wrapper, MainHeader } from "../../common-components";
import { User } from "../../types";
import List from "./List";
import SearchBar from "./SearchBar";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal,
        });
        const data = await res.json();
        setUsers(data);
        console.log("data has been set");
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  const filteredUsers = useMemo(() => {
    return users?.filter((user: User) => {
      return user.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [users, searchInput]);

  const getList = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return <List items={filteredUsers} />;
    }
  };

  return (
    <Wrapper>
      <MainHeader title="main-header" text="Users list" />
      <SearchBar
        value={searchInput}
        handleChange={(event: SyntheticEvent<HTMLInputElement>) => {
          setSearchInput(event.currentTarget.value);
        }}
      />
      {getList()}
    </Wrapper>
  );
};

export default UsersList;
