import { type FastifyInstance } from 'fastify'
import userRoutes from './user'
import { FastifyRouteRegister } from '../types'
async function registerRoutes({
    app,
    routes,
}: {
    app: FastifyInstance
    routes: FastifyRouteRegister[]
}): Promise<void> {
    try {
        await Promise.all(
            routes.map(async (route) => {
                await route({ app })
            })
        )
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
const routes = async (app: FastifyInstance): Promise<void> => {
    await registerRoutes({
        app,
        routes: [...userRoutes],
    })
}

export default routes
