import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Index() {
  return <h2>Home</h2>;
}

class Loading extends React.Component {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return <Alert variant="dark">Loading...</Alert>;
  }
}

import Grid from "./pages/Grid";
//import Users from "./pages/Users";
const Users = React.lazy(() => import("./pages/Users"));
const UserDetails = React.lazy(() => import("./pages/UserDetails"));

interface IProps {}
class AppRouter extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Test</Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/" exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/grid">
                <Nav.Link>Grid</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/users">
                <Nav.Link>Users</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/grid/" component={Grid} />
              <Route exact path="/users/" component={Users} />
              <Route path="/users/:userId" component={UserDetails} />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
