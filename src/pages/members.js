import React from "react"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

import MemberList from "../components/Members/MemberList"
import SubMain from "../components/Main/SubMain"
import Box from "../components/Main/Box"

const MembersPage = ({ data, location }) => {
  const { title } = useSiteMetadata
  return (
    <div>
      <Layout location={location} title={title}>
        <SubMain text="Members" subtext="メンバー紹介" />
        <MemberList />
      </Layout>
    </div>
  )
}

export default MembersPage
