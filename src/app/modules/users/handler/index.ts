import { type RouteController } from '@http/types'
import postUserHandler from './post'
import getUserHandler from './get'

class UserRequestHandler implements RouteController {
    get = getUserHandler
    post = postUserHandler
}
export default UserRequestHandler
