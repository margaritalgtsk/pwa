import { useEffect, useState } from "react";

interface User {
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [setUser]);

  return <div>{user?.email}</div>;
};

export default UserProfile;
