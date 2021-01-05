import React from "react"
import Contacts from "../components/Home/Contacts"
import Hero from "../components/Home/Hero"
import Jobs from "../components/Home/Jobs"
import Projects from "../components/Home/Projects"
import Services from "../components/Home/Services"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Services />
      <Jobs />
      <Projects />
      <Contacts />
    </Layout>
  )
}
