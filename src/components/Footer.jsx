import React from "react";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer className="note-footer">
        <div className="note-footer_icon_group">
          <a href="https://www.instagram.com/gebeh69/" className="note-footer_icon">
            <FaInstagram className="note-footer_icon" />
          </a>
          <a href="https://github.com/theamik69" className="note-footer_icon">
            <FaGithubSquare className="note-footer_icon" />
          </a>
          <a href="https://www.linkedin.com/in/amik69/" className="note-footer_icon">
            <FaLinkedin className="note-footer_icon" />
          </a>
        </div>
        <div className="note-footer_name">
          <p>© 2023 Ahmad Mishba Khumainy</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
