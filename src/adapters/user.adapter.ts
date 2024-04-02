import { User, UserMetadata } from '../models/user.model'

const userAdapter = (user: UserMetadata): User => {
  return {
    name: user.name,
    fullName: user.full_name,
    email: user.email,
    avatarUrl: user.avatar_url,
  }
}

export default userAdapter
