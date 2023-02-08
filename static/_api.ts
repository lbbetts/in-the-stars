// import { PrismaClient, type Cards } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function api(request: Request<Locals>, resource: string, data?: Cards) {

//     let body = {};
//     let status = 500;
//     switch (request.method.toUpperCase()) {
//         case "GET":
//             body = await prisma.cards.findMany();
//             status = 200;
//             break;
//         case "POST":
//             body = await prisma.cards.create({
//                 data: {
//                     card_name: data.text,
//                     reversed: false,
//                     image_url: data.text,
//                     keywords_upright: data.text,
//                     keywords_reversed: data.text,
//                     description_upright: data.text,
//                     description_reversed: data.text
//                 }
//             });
//             status = 201;
//             break;
//         }

//         return {
//             status,
//             body
//             };
//         }