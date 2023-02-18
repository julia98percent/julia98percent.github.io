import React from "react";
import { graphql, Link } from "gatsby";
import Thumbnail from "../templates/Thumbnail";
import Header from "../components/Header";

const Index = ({ data }: any) => {
  const allWritings = data.writings.nodes;

  return (
    <main>
      <Header />
      <title>Home Page</title>
      <h1>Peach Jam</h1>
      <Link to="/about">About</Link>
      {allWritings.map((item: { frontmatter: any }, index: string) => (
        <Link to={`/writings/${item.frontmatter.slug}`} key={index}>
          <Thumbnail
            title={item.frontmatter.title}
            entry={`${item.frontmatter.title}은 엄청나게 중요합니당`}
            createdAt={item.frontmatter.createdAt}
            tags={item.frontmatter.tags}
            avatar={
              item.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData
            }
          />
        </Link>
      ))}
      {/* TODO 다크 모드 토글 버튼*/}
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
