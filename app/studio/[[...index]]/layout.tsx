import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'



import Cursor_Tail from '../../Components/Cursor_Tail'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:  'Blog | SpiningRope',
  description: 'Generated by Spiningrope',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
    
    
      <body className={inter.className}  >

       

        {children}

  

      <Cursor_Tail />

      </body>
    </html>
  )
}
