import React, { Component } from 'react';
import './PortfolioSection.css';


class PortfolioSection extends Component {
  render() {
    const { inView } = this.props;
    return (
      <div className="section-holder portfolio-holder">
        <header></header>
        <div className={inView ? "portfolio-content visible" : "portfolio-content"}>
          <h1 className="main-header">portfolio</h1>
          <div>
            <h3>GIFsmos</h3>
            <img src="https://res.cloudinary.com/dxklaorw6/image/upload/v1563056805/GF1.png" alt="portfolio" />
            <p>
              GIFsmos is an open source React/Redux application used to create animated GIF images via the Desmos graphing calculator. I worked as part of a team of developers making contributions to the project - making use of Agile methodology to maximize productivity. I added features and functionality to the UI. (generate GIF form, undo burst capture, mute preview, etc.) I wrote robust tests using Jest and React Testing Library, increasing test coverage from 50% to 80%.
            </p>
            <a
              href="http://www.gifsmos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-chevron-right"></i>
              go to site
            </a>
            <div className="spacer"></div>
            <h3>Jobly</h3>
            <img src="https://res.cloudinary.com/dxklaorw6/image/upload/v1563056806/JY1.png" alt="portfolio" />
            <p>
              Jobly is a full stack job search application with a React front end, Node/Express back end API, and a PostgreSQL database. React Router is implemented to improve UX. The React Context API is used to mitigate prop drilling. User priviledges are handled via token (JWT) based authentication. To better organize large batches of data, job and company lists include a pagination feature - allowing users to view listings page by page. When querying the database, potential SQL injection attacks are prevented by making use of parameterized queries.
            </p>
            <a
              href="https://the-jobly-app.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-chevron-right"></i>
              go to site
            </a>
            <div className="spacer"></div>
            <h3>VistaMaps</h3>
            <img src="https://res.cloudinary.com/dxklaorw6/image/upload/v1563056806/VM1.png" alt="portfolio" />
            <p>
              VistaMaps is a full stack application for sharing and finding photography locations - aka vistas. It implements an EJS front end, Node/Express back end, and MongoDB database. The Google Maps API allows a user to view the location of each vista on an interactive map. User priviledges are handled via Passport.js. A user can reset their password by email - via Nodemailer. Mongoose is used to communicate with the database.
            </p>
            <a
              href="http://vistamaps.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-chevron-right"></i>
              go to site
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
