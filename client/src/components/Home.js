import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <section className="hero is-medium is-warning is-bold has-text-centered">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Lister</h1>
        <h2 className="subtitle">
          Get organised. Create your own lists and take them with you!
        </h2>
        <Link to="/register" className="button is-primary is-medium">
          Sign Up
        </Link>
      </div>
    </div>
  </section>
);
