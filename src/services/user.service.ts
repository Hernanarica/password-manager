import { supabase } from './supabase.service'
import userAdapter from '../adapters/user.adapter'
import { UserMetadata, UserResponse } from '../models/user.model'

export async function getUser(): Promise<UserResponse | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser()

    if(user?.user_metadata) {
      const data =  userAdapter(user.user_metadata as UserMetadata)
      return  {
        status: 'success',
        user: data
      }
    }

    return null
  } catch (error) {
    console.error(error);
    return null
  }
}