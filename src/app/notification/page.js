import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import Layout from "@/Components/Layout";
import Link from "next/link";
import React from "react";

const notificationPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
      <Card noPadding={true}>
        <div className="">
          <div className="flex  gap-2 items-center border-b border-b-gray-100 p-4 ">
            <Link href={"/profile"}>
              <Avatar />
            </Link>
            <div className="">
              <Link
                href={"/profile"}
                className="font-semibold mr-1 hover:underline"
              >
                John doe
              </Link>
              liked
              <Link href={""} className="text-socialBlue hover:underline ml-1">
                your posts
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default notificationPage;
