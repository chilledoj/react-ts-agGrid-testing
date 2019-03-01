import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import User from "../components/userDetails";

interface IProps extends RouteComponentProps<any> {
  userId: string;
}
class UserDetailsPage extends React.Component<IProps> {
  componentDidMount() {
    console.log(this.props.match.params.userId);
  }
  render() {
    return <User userId={this.props.match.params.userId} />;
  }
}

export default UserDetailsPage;
