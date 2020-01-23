import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
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

const fetchEvents = () => data;

interface IApp {
  refreshing: boolean;
}
class App extends React.Component<{}, IApp> {
  constructor(props) {
    super(props);

    this.state = { refreshing: false };
  }

  refresh() {
    this.setState({ refreshing: true });
  }

  onComponentRefresh() {
    this.setState({ refreshing: false });
  }

  render() {
    const { refreshing } = this.state;
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Github Activity" />
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents}
          />
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
