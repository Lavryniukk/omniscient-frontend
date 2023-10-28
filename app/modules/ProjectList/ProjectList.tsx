"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ProjectsList from "./components/ProjectsList/ProjectsList";
// import { AiOutlineQuestion } from "react-icons/ai";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";

let arr: Array<any> = [{ title: "Node.js", _id: "1" }];

export default function UserProjects() {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data, isLoading } = useQuery({
    queryKey: ["userProjects"],
    queryFn: () => fetch("/user/roadmaps/"),
  });
  return (
    <div className="mx-auto w-1/3 max-w-[600px] min-w-[500px] px-5 py-16 font-inter h-fit border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight font-inter">
        Your learning projects
      </h1>
      {isLoading ? (
        <div className="w-3/4 mx-auto space-y-5 p-5 h-fit py-20">
          <div className="py-6 border border-secondary rounded-lg text-lg text-center text-accent px-3 w-full">
            <div className="w-3/4 mx-auto h-[20px] bg-secondary animate-pulse "></div>
          </div>
          <div className="py-6 border border-secondary rounded-lg text-lg text-center text-accent px-3 w-full">
            <div className="w-3/4 mx-auto h-[20px] bg-secondary animate-pulse"></div>
          </div>
          <div className="py-6 border border-secondary rounded-lg text-lg text-center text-accent px-3 w-full">
            <div className="w-3/4 mx-auto h-[20px] bg-secondary animate-pulse"></div>
          </div>
        </div>
      ) : arr.length !== 0 ? (
        <ProjectsList projects={arr} />
      ) : (
        <ProjectsNotFound />
      )}
    </div>
  );
}
