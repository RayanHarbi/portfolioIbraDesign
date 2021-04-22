import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-center">
          <a href="https://t.co/hNBdEEGu9t?amp=1" target="_blanc">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
          <a href="https://goo.gl/maps/Zqz9F4nEk4eWcQyz7" target="_blanc">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="social-icon" />
          </a>
          <a href="https://twitter.com/Arch_ibraa?s=20" target="_blanc">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="footer-h">
            Developed with
            <a href="https://www.linkedin.com/in/rayan-sulaiman/" target="_blanc">
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </a>
            GA student
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
