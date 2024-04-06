import { IUser } from '@/types/user'
import { ReactNode, useState } from 'react'
import { UserContext, UserContextType } from '../context/UserContext'

interface UserProviderProps {
  children: ReactNode
  initialUserData: IUser
}

export function UserProvider({ children, initialUserData }: UserProviderProps) {
  const [user, setUser] = useState<IUser | null>(initialUserData)

  const providerValue: UserContextType = {
    user,
    setUser,
  }

  return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
}
