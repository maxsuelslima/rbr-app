import { type FastifyRequest, type FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../app'
import { type FastifyRouteRegister } from '@http/types'
async function postUserHandler(
    _req: FastifyRequest,
    reply: FastifyReply
): Promise<FastifyReply> {
    const createSchema = z.object({
        email: z.string().email(),
        password: z.string(),
        username: z.string().optional(),
        phone: z.string().optional(),
    })
    const { phone, email, username, password } = createSchema.parse(_req.body)
    await prisma.user.create({
        data: {
            email,
            password,
            username,
            phone,
        },
    })

    return await reply.send({ user: `user posted with success` })
}
const postUserRoute: FastifyRouteRegister = async ({ app }): Promise<void> => {
    app.post('/user/:id', postUserHandler)
}
export default postUserRoute
