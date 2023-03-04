import { type FastifyRequest, type FastifyReply } from 'fastify'
import delay from '../../../../../../tools/js-tools'
import { type FastifyRouteRegister } from '../../types'
function getUserHandler(
    _req: FastifyRequest,
    reply: FastifyReply
): FastifyReply {
    const { id } = _req.params as { id: string }
    return reply.send({ user: `here is your user ${id}` })
}
const getUserRoute: FastifyRouteRegister = async ({ app }): Promise<void> => {
    await delay(1000)
    app.get('/user/:id', getUserHandler)
}
export default getUserRoute
