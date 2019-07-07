import React, { Component } from 'react';
import './PortfolioSection.css';

class PortfolioSection extends Component {
  render() {
    const { inView } = this.props;
    return (
      <div className="section-holder">
        <header></header>
        <div className={inView ? "portfolio-content visible" : "portfolio-content"}>
          <h1 className="main-header">portfolio</h1>
          <h3>GIFsmos</h3>
          <div>
            <img src="https://ycamp.org/wp-content/uploads/2016/08/ock-image-placeholder.png" alt="portfolio" />
            <p>
              GIFsmos is an open source React/Redux application used to create
              animated GIF images via a Desmos graphing calculator. I worked as
              part of a team of developers making contributions to the project
              - making use of Agile methodology to maximize productivity. I
              added features, functionality, and design elements to the UI. I
              wrote robust tests using Jest and React Testing Library,
              increasing test coverage from 50% to 80%.
            </p>
          </div>
          <h3>Jobly</h3>
          <div>
            <img src="https://ycamp.org/wp-content/uploads/2016/08/ock-image-placeholder.png" alt="portfolio" />
            <p>
              Jobly is a full stack job search application with a React front
              end, Node/Express back end API, and PostgreSQL database. When
              querying the database, potential SQL injection attacks are
              prevented by making use of parameterized queries. User
              priviledges are handled via token based authentication. To better
              organize large batches of data, job and company lists include
              a pagination feature - allowing users to view listings page by
              page instead of all at once.
            </p>
          </div>
          <h3>VistaMaps</h3>
          <div>
            <img src="https://ycamp.org/wp-content/uploads/2016/08/ock-image-placeholder.png" alt="portfolio" />
            <p>
              VistaMaps was my first web development project. It's a full stack
              application for sharing and finding photography locations. It
              implements an EJS front end, Node/Express back end, and MongoDB
              database. The Google Maps API is used, allowing users to view the
              location of each vista on an interactive map.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
