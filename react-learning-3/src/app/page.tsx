"use client"

import { useState } from "react";

import UserTimeLine from "./UserTimeLine";
import Login from "./Login";
import { UserType } from "./usertype";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | UserType>(null)
  return (
    <>

    {
      isAuthenticated?
      <UserTimeLine 
      userData={user}
      />:
      <Login 
      changeAuthStatus={setIsAuthenticated}
      setUser={setUser}
      />
    }

    </>
  )
     
     

}

export default Home;
