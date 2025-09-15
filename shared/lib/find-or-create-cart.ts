import { prisma } from "@/prisma/prisma-client";

export const findOrCreateCart = async (token: string) => {
  console.log("Received token in findOrCreateCart:", token);
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  });

  console.log("Found cart:", userCart);

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: { token },
    });
    console.log("Created new cart:", userCart);
  }
  return userCart;
};
