"use client"; // An environment-specific directive or comment, not part of the logic.
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";

let ProfileLink = () => {
  let { user, isLoading } = useUser(); // Use the useUser hook to retrieve user information.
  let pic = user?.picture ?? ""; // Extract the user's profile picture URL.

  return isLoading ? (
    <Skeleton width={"80px"} height={"32px"} rounded={"10px"} />
  ) : user ? (
    <a
      href={`/profile/${user.sub}`}
      className=" items-center justify-center flex box-border"
    >
      <picture>
        <img
          src={pic}
          alt=""
          width={40}
          height={40}
          className="h-11 w-11 mx-auto rounded-full border-2 border-accent-700 hover:border-accent transition-colors duration-200"
        />
      </picture>
    </a>
  ) : (
    <Link
      href="/api/auth/login" // Create a link to the authentication login endpoint.
      className="text-text font-inter font-medium hover:text-background transition-colors duration-200 mx-auto w-fit px-4 border-text border-2 p-1 rounded-md hover:bg-text  bg-background flex justify-around space-x-3 items-center"
    >
      Sign in
    </Link>
  );
};

export default ProfileLink;
