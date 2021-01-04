import React from "react"
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Services />
    </Layout>
  )
}
