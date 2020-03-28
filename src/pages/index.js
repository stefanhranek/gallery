import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
// import Layout from "../components/layout"
import Layout from "./layouts"
import Image from "../components/image"

const propTypes = {
  data: PropTypes.object.isRequired,
}


const Product = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/products/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
        }}
      >
        <div >
          {node.image[0].fixed.src && (
            <Img style={{ margin: 0 }} fixed={node.image[0].fixed} />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.productName.productName}</div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const usProductEdges = this.props.data.edges
    const deProductEdges = this.props.data.edges
    return (
      <Layout>
        <div >
          <h2>{`Gatsby's`} integration with the Contentful Image API</h2>
          <Link to="/image-api/">See examples</Link>
          <br />
          <br />
          <br />
          <h2>Localization</h2>
          <p>
            The <code>gatsby-source-contentful</code> plugin offers full support
            for {`Contentful's`} localization features. Our sample space
            includes products localized into both English and German.
          </p>
          <p>
            An entry and asset node are created for each locale following
            fallback rules for missing localization. In addition, each node has
            an additional field added, <code>node_locale</code> so you can
            select for nodes from a single locale
          </p>
          <h3>en-US</h3>
          {usProductEdges}
          {/* {usProductEdges.map(({ node }, i) => (
            <Product node={node} key={node.id} />
          ))} */}
          <br />
          <br />
          <h3>de</h3>
          {/* {deProductEdges.map(({ node }, i) => (
            <Product node={node} key={node.id} />
          ))} */}
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
query {
  allContentfulAsset {
    edges {
      node {
        title
        resize(width: 100) {
          src
          width
          height
        }
      }
    }
  }
}
`
