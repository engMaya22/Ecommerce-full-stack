import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// Get cart
export const getCart = async (req, res) => {

  try {
    const userId = req.user.userId;

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add / update item
export const addToCart = async (req, res) => {
  try {
    console.log("🔥 USER OBJECT:", req.user);

    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: "Invalid user" });
    }

    const userId = Number(req.user.userId);
    const productId = Number(req.body.productId);
    const quantity = Number(req.body.quantity) || 1;


    let cart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
      });
    }

    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }

    res.json({ message: "Cart updated" });
  } catch (error) {
    
    console.error("💥 FULL ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
