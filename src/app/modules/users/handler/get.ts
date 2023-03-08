import { type FastifyReply, type FastifyRequest } from 'fastify'

async function getUserHandler({
    req,
    reply,
}: {
    req: FastifyRequest
    reply: FastifyReply
}): Promise<FastifyReply> {
    return await reply.send({ user: `here is your user ` })
}
export default getUserHandler
