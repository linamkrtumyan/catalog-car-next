import Layout from "@/components/layout/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const NotFound: NextPage = () => {
  return (
    <Layout title="Not found">
      {/* <Head>
            <title>012</title>
        </Head> */}
      <div className="flex justify-center">
        <Image src="/404.webp" alt="404" width="500" height="300" />
      </div>
    </Layout>
  );
};

export default NotFound;
