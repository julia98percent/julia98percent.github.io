import React from "react";
import { graphql, Link } from "gatsby";
import Thumbnail from "../templates/Thumbnail";

import * as styles from "./index.module.scss";
import Peach from "../../writing-thumbnail-image/peach.png";
import Layout from "../components/Layout";

const allWritings = ({ data }: any) => {
  const recentWritings = data.allWritings.nodes;
  return (
    <Layout>
      <main className={styles.wrapper}>
        <title>Home Page</title>
        <div>
          <p className={styles.recentText}>모든 글</p>
          {recentWritings.map((item: { frontmatter: any }, index: string) => {
            const { featuredImage } = item.frontmatter;

            return (
              <div className={styles.thumbnailWrapper}>
                <Link to={`/writings/${item.frontmatter.slug}`} key={index}>
                  <Thumbnail
                    title={item.frontmatter.title}
                    entry={`${item.frontmatter.title}은 엄청나게 중요합니당`}
                    createdAt={item.frontmatter.date.slice(0, 10)}
                    tags={item.frontmatter.tags}
                    avatar={
                      featuredImage
                        ? featuredImage?.childImageSharp.gatsbyImageData
                        : Peach
                    }
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default allWritings;

export const query = graphql`
  {
    allWritings: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
          tags
          slug
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;
