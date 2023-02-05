import React from "react";
import { graphql, Link } from "gatsby";
import Thumbnail from "../templates/Thumbnail";

const Index = ({ data }: any) => {
  const allWritings = data.writings.nodes;

  return (
    <main>
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
