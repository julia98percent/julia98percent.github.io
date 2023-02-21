import React from "react";
import { graphql, Link } from "gatsby";
import Thumbnail from "../templates/Thumbnail";
import Layout from "../components/Layout/Layout";
import * as styles from "./index.module.scss";
import Peach from "../../writing-thumbnail-image/peach.png";

const Index = ({ data }: any) => {
  const recentWritings = data.recentWritings.nodes;

  return (
    <Layout>
      <main className={styles.wrapper}>
        <title>Home Page</title>
        <div>
          <p className={styles.recentText}>최근 글</p>
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
        {/* TODO 검색 버튼 */}
      </main>
    </Layout>
  );
};

export default Index;

// 비교를 위해 임시로 limit 1 적용
// TODO 추후 포스팅 5개 넘으면 5로 수정하기
export const query = graphql`
  {
    recentWritings: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 1
    ) {
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
