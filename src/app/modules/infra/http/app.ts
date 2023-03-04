import fastify, { type FastifyInstance } from 'fastify'
import routes from './routes'
import { PrismaClient } from '@prisma/client'
async function registerRoutes(app: FastifyInstance): Promise<void> {
    try {
        console.log('Registering routes...')
        await routes(app)
        console.log('Routes registered')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
const app = fastify()
export const prisma = new PrismaClient()
void app.register(async (app: FastifyInstance): Promise<void> => {
    try {
        await registerRoutes(app)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})

export default app
