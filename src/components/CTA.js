import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CTA.module.css";

function CTA() {
  const navigate = useNavigate();
  const handleContactLinkClick = () => {
    window.scrollTo(0,0);
    navigate("/contact");
  }

  return (
    <section className={`${styles.contact} ${styles.padding_2}`}>
      <h2 className={`${styles.section__header} ${styles.col_md_6}`}>
        Interested in doing a&nbsp;project together?
      </h2>
      <hr
        className={`${styles.section__break} ${styles.section__break_3} ${styles.d_none} ${styles.d_md_block}`}
      />
      <Link 
        to="/contact"
        onClick={handleContactLinkClick} 
        className={`${styles.button} ${styles.button_secondary} ${styles.CTA}`}>
        Contact Me
      </Link>
      
    </section>
  );
}

export default CTA;
