import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {
  // categories
  const men = await prisma.category.create({
    data: {
      title: "men",
      prefix: "men",
      img: "https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg",
    },
  });

  const women = await prisma.category.create({
    data: {
      title: "women",
      prefix: "women",
      img: "https://cdn-eu.dynamicyield.com/api/9876644/images/30d354267a09b__hp-w12-22032022-h_m-women_dresses.jpg",
    },
  });

    const kids = await prisma.category.create({
    data: {
      title: "kids",
      prefix: "kids",
      img: "https://cdn-eu.dynamicyield.com/api/9876644/images/37d243d334c63__hp-w12-22032022-h_m-kids1.jpg",
    },
  });

  const baby = await prisma.category.create({
    data: {
      title: "baby",
      prefix: "baby",
      img: "https://cdn-eu.dynamicyield.com/api/9876644/images/28948d47ae6e8__h_m-w39-28092022-4066c-1x1.jpg",
    },
  });
  const sport = await prisma.category.create({
    data: {
      title: "sport",
      prefix: "sport",
      img: "https://cdn-eu.dynamicyield.com/api/9876644/images/1dda9ae79a671__h_m-w40-06102022-7416b-1x1.jpg",
    },
  });

  // products
  await prisma.product.create({
    data: {
      title: "Jersey top",
      price: 249,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJpDM-BB6pcBu2Qy56WDgPFXIszRC6Jp5xg&s",
      max: 4,
      categoryId: men.id,
    },
  });

  await prisma.product.create({
    data: {
      title: "Cotton t-shirt",
      price: 100,
      img: "https://www.hummel.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-newline-master-catalog/default/dwd7489e16/images/model/500130-2162_B.png?sw=514&sh=685&q=80",
      max: 2,
      categoryId: women.id,
    },
  });

  // user
  const user = await prisma.user.create({
    data: {
      email: "test@test.com",
      password: "hashed-password",
      firstName: "Maya",
      lastName: "Ismaeel",
    },
  });

  // wishlist
  await prisma.wishlist.create({
    data: {
      userId: user.id,
      productId: 1,
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());