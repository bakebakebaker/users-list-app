import { useState, useEffect, SyntheticEvent } from "react";
import { Spinner, Wrapper, MainHeader } from "../../common-components";
import { User } from "../../types";
import List from "./List";
import SearchBar from "./SearchBar";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (e) {}
    };

    fetchData();
  }, []);

  const filteredUsers = users?.filter((user: User) => {
    return user.name.toLowerCase().includes(searchInput.toLowerCase());
  });

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
