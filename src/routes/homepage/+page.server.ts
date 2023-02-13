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

export const actions: Actions = {
    createStar: async ({ request }) => {
        console.log("I'm in createStar!!!")
        const { star_image } = Object.fromEntries(await request.formData()) as {
            star_image: string;
        }
        try {
            await prisma.star.create({
                data: {
                    star_image
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, {message: 'Could not save star.'})
        }

        return {
            status: 201
        }
    }
}