


import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json({success:true, data:categories });
    
  } catch (error) {
    // res.status(500).json({ error: "Failed to fetch categories" });
     res.json({success:false , message:error.message})
  }
};