import Layout from "@/Components/Layout";
import PostCard from "@/Components/PostCard";
import React from "react";

const savePage = () => {
  return (
    <Layout>
      <h1 className="text-6xl mb-4  text-gray-400">Saved posts</h1>
      <PostCard />
      <PostCard />
    </Layout>
  );
};

export default savePage;
