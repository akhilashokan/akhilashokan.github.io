import './globals.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Splash from '../components/splash'

export const metadata = {
  title: 'Akhil Ashokan',
  description: 'My portfolio website :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: add page transition
  return (
    <html lang="en">
      <body className='max-w-[1920px] mx-auto dark:bg-gray-950 dark:text-gray-200'>
        <Splash /> 
        <Header />
        <main className='px-4 overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
