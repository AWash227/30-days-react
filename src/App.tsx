import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Clock from "./components/Clock";
import { data } from "./data";
const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "Ari", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2,
      name: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "Nate", text: "I am so jealous" }]
  }
];

export const App = () => (
  <div className="notificationsFrame">
    <div className="panel">
      <Header title="Title Works!" />
      <Content />
      <Clock />
    </div>
  </div>
);
