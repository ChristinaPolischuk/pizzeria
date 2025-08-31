import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

// export async function GET() {
//   const ingredients = await prisma.ingredient.findMany();

//   return NextResponse.json(ingredients);
// }

export async function GET() {
  try {
    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json(ingredients);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch ingredients" },
      { status: 500 }
    );
  }
}
