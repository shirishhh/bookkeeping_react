import React from "react";

export default function HeaderContent() {
  return (
    <section className="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
  );
}
