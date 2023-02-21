import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout/Layout";
function BlogPost({ data }: any) {
  const post = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className="wrapper">
        <header>
          <Link to="/">Go back to "Home"</Link>
        </header>
        <main>
          <h1>{post.title}</h1>
          <em>{post.date}</em> - {post.topic}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </main>
      </div>
    </Layout>
  );
}

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MM-DD-YYYY")
        topic
        title
        tags
      }
      html
    }
  }
`;
