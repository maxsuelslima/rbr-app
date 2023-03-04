import { FastifyRouteRegister } from '@http/types'
import getUserRoute from './get'
import postUserRoute from './post'

const indexRoutes: FastifyRouteRegister[] = [getUserRoute, postUserRoute]
const userRoutes: FastifyRouteRegister[] = [...indexRoutes]
export default userRoutes
