"use client";

import { useEffect, useState } from "react";

type UserNameType = {
  params: { username: string };
};

type DbUserType = {
  name: string;
  rollNumber: number;
  subject: string;
};

const dbUsers: DbUserType[] = [
  {
    name: "haider",
    rollNumber: 1243,
    subject: "JavaScript",
  },
  {
    name: "hannan",
    rollNumber: 1244,
    subject: "JavaScript",
  },
  {
    name: "huzaifa",
    rollNumber: 1245,
    subject: "Amazon",
  },
];

const UserName = ({ params: { username } }: UserNameType) => {
  const [user, setUser] = useState<null | DbUserType>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = () => {
    let [userData] = dbUsers.filter(({ name }) => name === username);
    setUser(userData);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      {user && (
        <>
          <h1>Name: {user.name}</h1>
          <h1>Roll Number: {user.rollNumber}</h1>
          <h1>Subject: {user.subject}</h1>
        </>
      )}
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        !isLoading && !user && <h1>User Not Found</h1>
      }
    </>
  );
};

export default UserName;
