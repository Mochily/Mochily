import React from "react"
import * as styles from "./Members.module.scss"

import MemberCard from "./MemberCard"
import Container from "../Container/Container"

// メンバー情報
const membersInfo = [
  {
    name: "あああああ",
    position: "役職",
    sns: {
      twitter: "/",
      instagram: "/",
    },
  },
  {
    name: "あああああ",
    position: "役職",
    sns: {
      twitter: "/",
      instagram: "/",
    },
  },
  {
    name: "あああああ",
    position: "役職",
    sns: {
      twitter: "/",
      instagram: "/",
    },
  },
  {
    name: "あああああ",
    position: "役職",
    sns: {
      twitter: "/",
      instagram: "/",
    },
  },
]

const Members = () => {
  return (
    <Container>
      <div className={styles.cards}>
        {membersInfo.map((member, index) => {
          return (
            <div className={styles.cardContainer}>
              <MemberCard
                key={index}
                name={member.name}
                position={member.position}
                sns={member.sns}
              />
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Members
