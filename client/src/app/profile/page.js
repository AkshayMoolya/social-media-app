"use client";

import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import FriendInfo from "@/Components/FriendInfo";
import Layout from "@/Components/Layout";
import PostCard from "@/Components/PostCard";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Profilepage = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(router);
  const isPosts = pathname.includes("posts") || pathname === "/profile";
  const isAbout = pathname.includes("about");
  const isFriends = pathname.includes("friends");
  const isPhotos = pathname.includes("photos");

  const activeClasses =
    "flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold";
  const nonactiveClasses =
    "flex gap-1 px-4 py-1 items-center border-b-4 border-b-white";

  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <div className="h-36 overflow-hidden flex justify-center items-center ">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="absolute top-24 left-4">
            <Avatar size={"lg"} />
          </div>
          <div className="p-4 pb-0 pt-0 md:pt-4">
            <div className="md:ml-40 ml-24">
              <h1 className="text-xl font-bold">john doe</h1>
              <div className="text-gray-500 leading-4">stockholm,sweden</div>
            </div>
            <div className="md:mt-10 mt-4 flex">
              <Link
                href={"/profile/posts"}
                className={isPosts ? activeClasses : nonactiveClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
                <span className="hidden sm:block">Posts</span>
              </Link>
              <Link
                href={"/profile/about"}
                className={isAbout ? activeClasses : nonactiveClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span className="hidden sm:block">About</span>
              </Link>
              <Link
                href={"/profile/friends"}
                className={isFriends ? activeClasses : nonactiveClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <span className="hidden sm:block">Friends</span>
              </Link>
              <Link
                href={"/profile/photos"}
                className={isPhotos ? activeClasses : nonactiveClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="hidden sm:block">Photos</span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      {isPosts && (
        <div>
          <PostCard />
        </div>
      )}

      {isAbout && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2 ">About me</h2>
            <p className="mb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              repellat dolorem eaque odio minus ratione omnis reprehenderit
              similique iure necessitatibus nulla quos doloribus ut maiores quod
              vero suscipit aspernatur debitis, non accusamus!
            </p>
            <p className="mb-2 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              deleniti quam at inventore tempora quisquam, distinctio qui maxime
              praesentium eius?
            </p>
          </Card>
        </div>
      )}
      {isFriends && (
        <div className="">
          <Card>
            <h2 className="text-3xl mb-2 ">Friends</h2>
            <div className="">
              <div className="border border-b-gray-100  p-4 -mx-4">
                <FriendInfo />
              </div>
            </div>
          </Card>
        </div>
      )}

      {isPhotos && (
        <div className="">
          <Card>
            <div className="grid md:grid-cols-2  gap-4 ">
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
                <img
                  src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default Profilepage;
