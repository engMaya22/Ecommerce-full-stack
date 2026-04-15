import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  await prisma.category.create({
    data: {
      title: "Men",
      prefix: "men",
      img: "test.jpg",
    },
  });

  const categories = await prisma.category.findMany();
  console.log(categories);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());