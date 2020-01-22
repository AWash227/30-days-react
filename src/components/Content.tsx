import React from "react";
import ActivityItem, { IActivity } from "./ActivityItem";
import { data } from "../data";
export interface IContent {
  activities: IActivity[];
}
class Content extends React.Component<{}, { activities: typeof data }> {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }
  componentWillMount() {
    this.setState({ activities: data });
  }
  render() {
    return (
      <div className="content">
        <div className="line"></div>

        {this.state.activities.map(activity => (
          <ActivityItem activity={activity} />
        ))}
      </div>
    );
  }
}

export default Content;
