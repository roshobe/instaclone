import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import InsidHeader from "../components/InsidHeader";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <InsidHeader />

      <Feed />

      <h1>this is the instagram 2.0 build</h1>
    </div>
  );
};

export default Home;
