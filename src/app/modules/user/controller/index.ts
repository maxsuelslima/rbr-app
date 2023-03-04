import { RouteController } from "@http/types"
import { FastifyRequest, RouteGenericInterface, RawServerDefault, FastifySchema, FastifyTypeProviderDefault, FastifyBaseLogger, FastifyReply, FastifyInstance } from "fastify"
import { ResolveFastifyRequestType } from "fastify/types/type-provider"
import { IncomingMessage } from "http"

async function getUserHandler({ req, reply }: { req: FastifyRequest, reply: FastifyReply }): Promise<FastifyReply> {
    return reply.send({ user: `here is your user ` })
}
async function postUserHandler({ req, reply }: { req: FastifyRequest, reply: FastifyReply }): Promise<FastifyReply> {
    return reply.send({user: `user posted with success`})
}
class userController implements RouteController {
    get = getUserHandler
    post = postUserHandler
    constructor({
        app
    }:{
        app: FastifyInstance
    }) {
        app.get('/user/:id', this.get)
        app.post('/user/:id', this.post)
    }
}
export default userController