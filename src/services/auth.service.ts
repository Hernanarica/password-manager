import { supabase } from './supabase.service'

export async function login() {
  try {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  } catch (error) {
    console.error(error);
  }
}

export async function logout() {
  try {
    await supabase.auth.signOut()
  } catch (error) {
    console.error(error);
  }
}