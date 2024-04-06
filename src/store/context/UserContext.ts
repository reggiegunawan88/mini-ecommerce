import { createContext, useContext } from 'react'
import { IUser } from '@/types/user'

interface ContextState {
  user: IUser | null
}

export interface UserContextType extends ContextState {
  setUser: (newValue: IUser) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function useUserContext() {
  const ctx = useContext(UserContext)
  if (!ctx) {
    throw new Error('User context not found')
  }

  return ctx
}
