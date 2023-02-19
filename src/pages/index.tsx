import React from "react";
import { graphql, Link } from "gatsby";
import Thumbnail from "../templates/Thumbnail";
import Header from "../components/Header";
import * as styles from "./index.module.scss";
import Peach from "../../writing-thumbnail-image/peach.png";

const Index = ({ data }: any) => {
  const allWritings = data.writings.nodes;
  return (
    <main className={styles.wrapper}>
      <Header />
      <title>Home Page</title>
      <div>
        <p className={styles.recentText}>최근 글</p>
        {allWritings.map((item: { frontmatter: any }, index: string) => {
          const { featuredImage } = item.frontmatter;

          return (
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
          );
        })}
      </div>
      {/* TODO 검색 버튼 */}
    </main>
  );
};

export default Index;

export const query = graphql`
  {
    writings: allMarkdownRemark {
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
