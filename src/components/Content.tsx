import React from "react";
import ActivityItem, { IActivity } from "./ActivityItem";
import { data } from "../data";
export interface ContentProps {
  onComponentRefresh: any;
  requestRefresh: any;
  fetchData: any;
}
export interface IContent {
  activities: typeof data;
  loading: boolean;
}
class Content extends React.Component<ContentProps, IContent> {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      loading: false
    };
  }
  updateData() {
    this.setState({
      loading: false,
      activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
    });
    this.props.onComponentRefresh;
  }

  // LIFECYCLE
  componentWillReceiveProps(nextProps) {
    if (nextProps.requestRefresh === true) {
      this.setState({ loading: true }, this.updateData);
    }
  }
  componentWillMount() {
    this.updateData();
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
