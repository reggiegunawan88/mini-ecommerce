import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import fetcher from '@/services/fetcher'
import { IUser } from '@/types/user'
import { ENV_VARS } from '@/constants/env-vars'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

async function fetchMockUserData() {
  const result = await fetcher<IUser>(`${ENV_VARS.baseUrl}/users/1`)
  return result
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await fetchMockUserData()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={user} />
        <div className="page-container">
          <div className="page-content">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
