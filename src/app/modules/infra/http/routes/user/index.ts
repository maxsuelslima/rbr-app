import { type FastifyRouteRegister } from '@http/types'
import UserRequestHandler from '@users/handler'

const userRoutes: FastifyRouteRegister = async ({ app }) => {
    const userRequestHandler = new UserRequestHandler()
    app.get('/users/:id', async (req, reply) => {
        return await userRequestHandler.get({ req, reply })
    })
    app.post('/users/:id', async (req, reply) => {
        return await userRequestHandler.post({ req, reply })
    })
}
export default userRoutes
