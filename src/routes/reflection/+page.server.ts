import type { Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

// export const prerender = false;

console.log("i'm in the page.server!")
export const actions: Actions = {
    createFate: async ({ request }) => {
        console.log("I'm in createFate!!!")
        const { question, picked_cards, reflection } = Object.fromEntries(await request.formData()) as { 
            question: string
            picked_cards: string
            reflection: string}

        try {
            await prisma.fates.create({
                data: {
                    question,
                    picked_cards,
                    reflection
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, {message: 'Could not save fate.'})
        }

        return {
            status: 201
        }
    }
}