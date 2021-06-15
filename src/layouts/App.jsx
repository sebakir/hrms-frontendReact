import "../styles/styles.css";
import { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Home from "./Home";
import About from "./About";
import TopBar from "./TopBar";

import Footer from "./Footer";

import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Section from "./Section";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar
          onSetSidebarOpen={this.onSetSidebarOpen}
          cartCount={this.props.cart.reduce((a, c) => a + c.count, 0)}
        />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/section" component={Section} />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
