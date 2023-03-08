import userRepository from '@users/repository'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'

async function postUserHandler({
    req,
    reply,
}: {
    req: FastifyRequest
    reply: FastifyReply
}): Promise<FastifyReply> {
    const createUserSchema = z.object({
        username: z.string(),
        password: z.string(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
    })
    const user = createUserSchema.parse(req.body)
    await userRepository.create(user)
    return await reply.send({ user: `user posted with success` })
}
export default postUserHandler
