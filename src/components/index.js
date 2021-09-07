import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function Component({ title, logo }) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/index.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - {title}
        </a>
      </header>
    </div>
  )
}

Component.defaultProps = {
  title: '',
  logo: ''
};

Component.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string
};

export default Component;
export { Component };