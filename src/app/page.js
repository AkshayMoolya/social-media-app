import Layout from "@/Components/Layout";
import PostCard from "@/Components/PostCard";
import PostformCrad from "@/Components/PostformCard";
import { supabase } from "../../supabase";


export default function Home() {
  

  return (
    <Layout>
      <PostformCrad />
      <PostCard />
      <PostCard />
    </Layout>
  );
}
