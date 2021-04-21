import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faSnapchatGhost, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-center">
          <a href="https://t.co/hNBdEEGu9t?amp=1" target="_blanc">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
          <a href="https://www.snapchat.com/add/arch_ibraa" target="_blanc">
            <FontAwesomeIcon icon={faSnapchatGhost} className="social-icon" />
          </a>
          <a href="https://twitter.com/Arch_ibraa?s=20" target="_blanc">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="footer-h">
            Developed with
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            GA student
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
