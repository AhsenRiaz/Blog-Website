import * as React from "react"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import BlogsSection from "../components/BlogsSection"
import Layout from "../components/Layout"

// markup
const IndexPage = () => {
  return (

    <Layout>

    <div>
      <Home />
      <BlogsSection src = "/blogs" />
    </div>
    </Layout>
  )
}



export default IndexPage
