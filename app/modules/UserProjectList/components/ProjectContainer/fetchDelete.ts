"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

const fetchDelete = async (roadmapId: string) => {
  console.log();
  try {
    await axiosWithAuth({
      method: "DELETE",
      url: `/users/me/roadmaps/${roadmapId}`,
    });
  } catch (e) {
    console.log("Error with DELETE roadmap", e);
  }
};

export default fetchDelete;