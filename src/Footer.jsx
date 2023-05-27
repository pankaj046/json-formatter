import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="justify-content-center" bg="dark" variant="dark">
      <Nav>
        <Nav.Link href="#">About us</Nav.Link>
      </Nav>
      <Nav className="position-absolute end-0">
        <Nav.Link href="https://github.com/pankaj046">
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
