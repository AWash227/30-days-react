import React from "react";
import moment from "moment";
import { data } from "../data";

export interface IActivity {
  timestamp: number;
  text: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  comments: { from: string; text: string }[];
}
type Data = typeof data[0];
interface IActivityItem {
  activity: Data;
}
class ActivityItem extends React.Component<IActivityItem> {
  render() {
    const { activity } = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img alt="avatar" src={activity.actor.avatar_url} />
          <div>
            {activity.actor.display_login}
            <div className="time">{moment(activity.created_at).fromNow()}</div>
          </div>
        </div>

        <p>
          {activity.actor.display_login} {activity.payload.action}
        </p>
        <div className="commentCount">{activity.repo.name}</div>
      </div>
    );
  }
}

export default ActivityItem;
