import React from "react"
import * as styles from "./MemberCard.module.scss"

const MemberCard = ({ name, position, sns }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.name}>
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
      <div className={styles.snsLinks}>
        <ul>
          <li>
            <a href={sns.twitter}>twitter</a>
          </li>
          <li>
            <a href={sns.instagram}>instagram</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MemberCard
