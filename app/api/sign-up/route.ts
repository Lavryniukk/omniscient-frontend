import { NextApiResponse } from "next";
import { AxiosError, AxiosResponse } from "axios";
import { axiosWithoutAuth } from "@/app/shared/config";
import { cookies } from "next/headers";
import { JwtTokenPair } from "@/app/shared/types";

type SignUpDto = {
  email: string;
  password: string;
};

export const POST = async (req: Request, res: Response) => {
  try {
    const data: SignUpDto = await req.json();
    const { data: tokens }: AxiosResponse<JwtTokenPair> =
      await axiosWithoutAuth.post("/auth/sign-up", data);

    cookies().set("_rt", tokens._rt, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
    });

    cookies().set("_at", tokens._at, {
      httpOnly: false,
      secure: true,
      sameSite: "strict",
      maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
    });
    const response = new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    const response = new Response(
      JSON.stringify({
        ...((error as AxiosError).response?.data as {
          message: string;
          error: string;
          statusCode: number;
        }),
        ok: false,
      }),
      {
        status: (error as AxiosError).response?.status || 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  }
};
export const GET = async (req: Request, res: NextApiResponse) => {
  return Response.json({
    message: "Hello World",
  });
};
