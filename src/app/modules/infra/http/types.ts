import {
    type FastifyInstance,
    type FastifyReply,
    type FastifyRequest,
} from 'fastify'

export type FastifyRouteRegister = ({
    app,
}: {
    app: FastifyInstance
}) => Promise<void>
type RequestHandler = ({
    req,
    reply,
}: {
    req: FastifyRequest
    reply: FastifyReply
}) => Promise<FastifyReply>
export interface RouteController {
    get?: RequestHandler
    post?: RequestHandler
    put?: RequestHandler
    delete?: RequestHandler
    patch?: RequestHandler
    options?: RequestHandler
    head?: RequestHandler
    trace?: RequestHandler
    connect?: RequestHandler
    all?: RequestHandler
}
