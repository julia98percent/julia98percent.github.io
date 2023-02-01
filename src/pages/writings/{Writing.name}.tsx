import * as React from "react";
import { graphql } from "gatsby";
import WritingView from "../../views/writing_view";

function Writing(props: any) {
  const { writing } = props.data;
  console.log(props);
  return <WritingView writing={writing} />;
}

export default Writing;

export const query = graphql`
  query ($id: String!) {
    writing(id: { eq: $id }) {
      name
      description
    }
  }
`;
