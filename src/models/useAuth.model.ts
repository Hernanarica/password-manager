import { User } from './user.model'

export interface UseAuthReturn {
  user: User | null;
  login: () => void;
  logout: () => void;
}