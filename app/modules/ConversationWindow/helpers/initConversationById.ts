"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { getAccessToken } from "@auth0/nextjs-auth0";
export default async function initConversation(
  conversation_id: string,
  user_roadmap_id: string,
  node_title: string
) {
  node_title = node_title.replaceAll("%26", "&");
  const { accessToken } = await getAccessToken();

  try {
    const res = await axiosWithAuth({
      url: `/users/me/conversations/${conversation_id}/init`,
      method: "POST",
      data: { user_roadmap_id: user_roadmap_id, node_title: node_title },
    });
    // console.log("Status", res.data);
    return res.data;
  } catch (error) {
    console.error(
      `Error with POST /users/me/conversations/${conversation_id}/init`,
      error
    );
  }
}
