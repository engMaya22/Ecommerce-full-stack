


import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// GET /products?categoryId=1
export const getProductsByCategory = async (req, res) => {
  try {
    const {id} = req.query;//get params of front url
     const products = await prisma.product.findMany({
      where: {
        categoryId: Number(id),
      },
    });

    res.json({success:true, data:products });
    
  } catch (error) {
    // res.status(500).json({ error: "Failed to fetch categories" });
     res.json({success:false , message:error.message})
  }
};


