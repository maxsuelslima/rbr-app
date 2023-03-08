import { type Users } from '@prisma/client'
import { prisma } from 'app/modules/infra/http/app'

class UserRepository {
    async create(user: {
        username: string
        password: string
        email?: string
        phone?: string
    }): Promise<Users | Error> {
        try {
            const createdUser = await prisma.users.create({
                data: {
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    phone: user.phone,
                },
            })
            return createdUser
        } catch (err) {
            if (err instanceof Error) {
                return err
            }
            return new Error('Error creating user')
        }
    }
}
const userRepository = new UserRepository()
export default userRepository
