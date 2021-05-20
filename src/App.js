import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
  MemoryRouter,
} from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/hashrouter">
          <HashRouter>
            <Route path="/" component={HashRouters} />
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/users/:user">
              <User />
            </Route>
          </HashRouter>
        </Route>
        <Route exact path="/memoryrouter">
          <MemoryRouter>
            <Route path="/" component={MemoryRouters} />
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/users/:user">
              <User />
            </Route>
          </MemoryRouter>
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/:user">
          <User />
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/not-found">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = (props) => {
  const handleClick = (e) => {
    e.stopPropagation();
    props.history.push("users");
    console.log("innermost div");
  };
  return (
    <>
      <h2>Home</h2>
      <p>
        BrowserRouter The widely popular router and a router for modern browsers
        which use HTML5 pushState API. (i.e., pushState, replaceState and
        popState API). It routes as a normal URL in browser, you can’t
        differentiate whether it is server rendered page or client rendered page
        through the URL.
      </p>
      <div onClick={() => console.log("outer div")}>
        <div onClick={() => console.log("middle div")}>
          <div onClick={handleClick}>Click me!</div>
        </div>
      </div>
    </>
  );
};

const Users = () => {
  return (
    <>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to="/users/demo">Demo</Link>
        </li>
        <li>
          <Link to="/users/test">Test</Link>
        </li>
      </ul>
    </>
  );
};

const HashRouters = () => {
  return (
    <>
      <h2>HashRouter</h2>
      <p>
        A router which uses client side hash routing. Whenever, there is a new
        route get rendered, it updated the browser URL with hash routes. (eg.,
        /hashrouter#/) Hash portion of the URL won’t be handled by server,
        server will always send the index.html for every request and ignore hash
        value. Hash value will be handled by react router.
      </p>
      <h3>Users</h3>
      <ul>
        <li>
          <Link to="/users/demo">Demo</Link>
        </li>
        <li>
          <Link to="/users/test">Test</Link>
        </li>
      </ul>
    </>
  );
};

const MemoryRouters = () => {
  return (
    <>
      <h2>Memory Router</h2>

      <p>
        A router which doesn’t change the URL in your browser instead it keeps
        the URL changes in memory It is very useful for testing and non browser
        environments ✅ But in browser, It doesn’t have history. So you can’t go
        back or forward using browser history
      </p>
      <h3>Users</h3>
      <ul>
        <li>
          <Link to="/users/demo">Demo</Link>
        </li>
        <li>
          <Link to="/users/test">Test</Link>
        </li>
      </ul>
    </>
  );
};
