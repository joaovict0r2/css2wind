import { NextResponse } from "next/server";
import { dict } from "./v1";
import { getRandomKey } from "@/utils";

export async function GET() {
  const data: Record<string, string[]> = {};
  const numberOfProperties = 8;

  for (let i = 0; i < numberOfProperties; i++) {
    const randomProperty = getRandomKey(dict);
    data[randomProperty] = dict[randomProperty];
  }

  return NextResponse.json(data);
}
