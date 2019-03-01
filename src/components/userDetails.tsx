import * as React from "react";
import UserDetailsCard from "./userDetailsCard";
const API = "https://randomuser.me/api/";

interface IProps {
  userId: string;
}
interface IState {
  user?: {
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      city: string;
      state: string;
    };
    email: string;
    dob: {
      date: string;
      age: number;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    phone: string;
    cell: string;
  };
}
class userDetailWrapper extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch(API + "?lego&seed=" + this.props.userId)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data.results[0] });
      });
  }
  render() {
    if (this.state.user === null) {
      return <div>Waiting...</div>;
    }
    return (
      <div>
        <h1>User: {this.props.userId}</h1>
        <UserDetailsCard user={this.state.user} />
      </div>
    );
  }
}

export default userDetailWrapper;
