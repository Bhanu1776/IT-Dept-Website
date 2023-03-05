import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline bg-red-200 !text-red-600">
        Hello world!
      </h1>
    </main>
  )
}
