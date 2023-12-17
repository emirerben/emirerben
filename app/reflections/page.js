import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-8 sm:px-16 sm:py-16">
      <Link href={'/'} className="text-2xl pb-12 sm:pb-20">🍌</Link>
      <div className='flex flex-wrap gap-20 animate-carousel '>

          <h1 className="text-2xl pb-2 sm:text-4xl">Things I learnt at Michigan</h1>

        </div>
    </main>
  )
}
