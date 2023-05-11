import * as React from "react"
import { Link } from "gatsby";
import type { PageProps } from "gatsby"
import Layout from "../components/Layout";
import { title } from "process";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome to DevStickers">
      <div></div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage