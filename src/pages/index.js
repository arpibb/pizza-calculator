import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import PizzaCalculator from '../components/PizzaCalculator'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This is a pizza calculator</p>
    <p>Now go and bake a great pizza!</p>
    <StaticImage
      src="https://banner2.cleanpng.com/20180811/wow/kisspng-neapolitan-pizza-neapolitan-cuisine-italian-cuisin-pizza-fest-e-shopping-il-gusto-di-piano-di-sorren-5b6fa4e876b2f5.0031116815340433684862.jpg"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <PizzaCalculator />
  </Layout>
)

export default IndexPage
