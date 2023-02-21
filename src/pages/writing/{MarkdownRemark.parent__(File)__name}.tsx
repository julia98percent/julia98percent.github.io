import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import * as styles from "./writing.module.scss";
const Writing = ({ data }: any) => {
  const post = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{`[${post.topic}] ${post.title}`}</h1>
        <p className={styles.date}>{post.date}</p>
        <div className={styles.imageWrapper}>
          <GatsbyImage
            image={getImage(post.featuredImage) as IGatsbyImageData}
            alt={post.title}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          className={post.featuredImage && styles.main}
        />
        <div className={styles.tagsWrapper}>
          {post.tags.map((tag: string) => (
            <span className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Writing;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        topic
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 250)
          }
        }
      }
      html
    }
  }
`;
