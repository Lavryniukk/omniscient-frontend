"use server";

import RoadmapInterface from "@/app/shared/entities/Roadmap";
import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export default async function fetchRoadmap(id: string) {
  const token = await getAccessToken();
  let response = await axios({
    method: "GET",
    url: `${process.env.SERVER_URL}/api/users/me/roadmaps/${id}`,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
  const roadmaps = (await response.data) as RoadmapInterface;
  return roadmaps;
}