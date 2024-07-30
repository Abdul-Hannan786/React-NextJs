"use client";

import { useState } from "react";
import { UserType } from "./usertype";

const users = [
  {
    email: "hannan@gmail.com",
    password: "123456",
    username: "Abdul Hannan",
    hobbies: ["Swimming", "cricket", "Traveling"],
    post: [
      {
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 100,
      },
      {
        content:
          "ipsum Lorem sit special main amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 1000,
      },
    ],
  },

  {
    email: "abdullah@gmail.com",
    password: "123456",
    username: "Abdullah",
    hobbies: ["Swimming", "cricket", "Traveling"],
    post: [
      {
        content:
          " Container Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 1500,
      },
      {
        content:
          "Meeting Lorem sit special main amet consectetur adipisicing elit. Omnis voluptates nulla commodi, magni repudiandae debitis, minus quis nihil vero assumenda similique ullam nisi ducimus ut voluptas laborum atque dignissimos est voluptatum odio repellendus impedit nostrum. Vero veniam facilis nemo quae, omnis, aliquam sapiente et aperiam tenetur ut cupiditate, nihil rem?",
        likes: 2010,
      },
    ],
  },
];

type LoginType = {
  changeAuthStatus: (status: boolean) => void;
  setUser: (user: UserType) => void;
};

const Login = ({ changeAuthStatus, setUser }: LoginType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  type LoginType = {
    changeAuthStatus: (status: boolean) => void;
  };

  const loginHandler = () => {
    let [userFound] = users.filter(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      changeAuthStatus(true);
      setUser(userFound);
    }
  };

  return (
    <>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </label>

      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </label>

      <br />

      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
