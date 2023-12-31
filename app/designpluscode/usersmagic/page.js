import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-8 sm:px-16 sm:py-16">
      <Link href={'/'} className="text-2xl pb-12 sm:pb-20">🍌</Link>
      <h1 className="text-2xl pb-2">Design @Usersmagic</h1>
      <h3 className='text-sm text-gray-600 pb-8'> Here are my designs for Usersmagic that include landing pages, SaaS product, blog pages, and more. </h3>
      <div className='flex flex-wrap gap-10 pt-4 animate-carousel '>
        <Link className='hover:translate-y-[-10px] transition-transform' href="/designs/usersmagic">
          <div className="relative">
            <div className="bg-opacity-20 bg-gray-400 rounded-2xl p-3 -m-2">
              <div class="max-h-[406px] sm:max-w-[600px] bg-opacity-20 bg-gray-400  rounded-2xl overflow-hidden">
                <div class="max-h-[406px]">
                  <img src="mymind.jpg" alt="Your Image" class="relative m-h-[100%] rounded-2xl" />
                </div>
              </div>
            </div>
            
          </div>
          <h1 className="relative pt-6">My designs</h1>
        </Link>
      </div>
      
    </main>
  )
}
