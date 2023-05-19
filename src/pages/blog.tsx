import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import { link } from "fs";

export default function Blog({data}) {
  console.log(data);
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;