import type { PageServerLoad } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

// export const prerender = false;

console.log("i'm in the homepage page.server!")
export const load: PageServerLoad = async () => {
    return {
        fates: await prisma.fates.findMany()
    }
}