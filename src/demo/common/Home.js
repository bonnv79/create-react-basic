import React from "react";
import PropTypes from "prop-types";
import {
  HashRouter,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import './index.css';
import { getSrcUrl } from "./utils";

export function getDemoURL(id = '') {
  return `/${id}`;
}

function Home({ title, children, version }) {
  const defaultData = children[0];

  return (
    <HashRouter>
      <div className="home-root">
        <div className="home-header">
          <span className="logo">
            {title}
          </span>
          <ul>
            {
              children.map(item => (
                <NavLink key={item.key} exact to={getDemoURL(item.key)} className="nav" activeClassName="active">
                  {item.key}
                  <span />
                </NavLink>
              ))
            }
          </ul>
          <a className="version" target="blank" href={getSrcUrl('CHANGELOG.md')}>
            {version}
          </a>
        </div>

        <div className="home-body">
          <Route exact path="/">
            <Redirect to={getDemoURL(defaultData.key)} />
          </Route>
          {
            children.map(item => (
              <Route key={item.key} exact path={getDemoURL(item.key)}>
                <React.Fragment>
                  {
                    item && item.props && item.props.link && (
                      <a target="blank" href={item.props.link}>
                        source
                      </a>
                    )
                  }
                  <div>
                    {item}
                  </div>
                </React.Fragment>
              </Route>
            ))
          }
        </div>
      </div>
    </HashRouter>
  )
}

Home.defaultProps = {
  title: 'React',
  children: '',
  version: ''
};

Home.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  version: PropTypes.string
};

export default Home;