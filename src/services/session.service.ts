import { supabase } from "./supabase.service";

export async function isActiveSession(): Promise<boolean> {
  try {
    const { data: { session } } = await supabase.auth.getSession()

    if(session) return true

    return false
  } catch (error) {
    console.error(error);
    return false
  }
}