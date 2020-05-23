import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ListPresenter from "../components/ListPresenter"

const Lists = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <ListPresenter />
    </header>
  </Layout>
)

export default Lists
