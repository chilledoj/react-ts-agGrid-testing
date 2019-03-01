import * as React from "react";
import Card from "react-bootstrap/Card";

interface IUser {
  user: {
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
class UserDetailsCard extends React.Component<IUser> {
  constructor(props: IUser) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    var user = this.props.user;
    return (
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src={user.picture.medium} />
        <Card.Body>
          <Card.Title>
            {user.name.first} {user.name.last}
          </Card.Title>
          <Card.Text>
            <dl>
              <dt>DOB:</dt>
              <dd>{new Date(user.dob.date).toISOString().substr(0, 10)}</dd>
              <dt>Location:</dt>
              <dd>
                {user.location.city}, {user.location.state}
              </dd>
              <dt>email:</dt>
              <dd>{user.email}</dd>
              <dt>Phone:</dt>
              <dd>{user.phone}</dd>
              <dt>Mobile:</dt>
              <dd>{user.cell}</dd>
            </dl>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default UserDetailsCard;
