import type { Actions, PageServerLoad } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

// export const prerender = false;

export const load: PageServerLoad = async () => {
    console.log("i'm in the homepage page.server!")
    return {
        fates: await prisma.fates.findMany(),
        stars: await prisma.star.findMany()
    }
}

// export const load: PageServerLoad = async ({ params }) => {
//     const getStar = async () => {
//         const star = await prisma.star.findUnique({
//             where: {
//                 id: Number(params.star_id)
//             }
//         })
//         if (!star) {
//             throw error(404, "Star not found")
//         }
//         return star
//     }

//     return {
//         star: getStar
//     }
// }

export const actions: Actions = {
    updateStar: async ({ request }) => {
        console.log("im inside updateStar!")
        const { star_id, star_image } = Object.fromEntries(await request.formData()) as { 
            star_id: string
            star_image: string}
        try {
            console.log("i'm trying!")
            await prisma.star.update({
                where: {
                    star_id: Number(star_id),
                },
                data: {
                    star_image
                },
            })
        } catch (err) {
            console.log(err)
            return fail(500, {message: "could not update star"})
        }

        return {
            status: 200
        }
    }
}

