import logo from './logo.svg';
import Routing from "./Routing/routing";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import { PRODUCTION } from './Services/util';
import { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { trackPageEnter } from './util/tracking';
import { setPartnerCode } from "./Redux/Actions/actions";
import { getUrlParam } from './util/getUrlParam';
import { connect } from "react-redux";

ReactGA.initialize('UA-187241314-2');

const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
});


class App extends Component {

  componentDidMount() {
    trackPageEnter();

    let code = getUrlParam('PartnerCode')
    this.props.setPartnerCode(code);
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#EFF6FB" }}>
        <Router history={history}>
          <Routing />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = { setPartnerCode };

export default connect(null, mapDispatchToProps)(App);
