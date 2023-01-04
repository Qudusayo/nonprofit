import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import styles from "./TeamCard.module.scss";

interface TeamCardProp {
  name: string;
  title: string;
  profileUri: string;
}

export default function TeamCard({ name, title, profileUri }: TeamCardProp) {
  return (
    <div className={styles.TeamCard}>
      <img src={profileUri} alt="profile-pic" />
      <h3>{name}</h3>
      <span>{title}</span>
      <div className={styles.TeamCardSocial}>
        <FaFacebook color="#454545" />
        <FaTwitter color="#454545" />
        <FaLinkedin color="#454545" />
      </div>
    </div>
  );
}
