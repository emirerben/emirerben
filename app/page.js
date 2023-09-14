import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-8 sm:px-16 sm:py-16">
      <h1 className="text-2xl pb-12 sm:pb-20">🍌</h1>
      <h1 className="text-2xl pb-2">Emir Erben</h1>
      <h3 className='text-sm text-gray-600 pb-8'> New computer science grad from @umich <br></br> Looking for a role in pm or front-end </h3>
      <div className='flex flex-wrap gap-10 pt-4'>
        <div>
          <div className="relative">
            <div className="bg-opacity-20 bg-gray-400 rounded-2xl p-3 -m-2">
              <div class="max-h-[406px] bg-opacity-20 bg-gray-400  rounded-2xl overflow-hidden">
                <div class="max-h-[406px]">
                  <img src="mymind.jpg" alt="Your Image" class="relative m-h-[100%] rounded-2xl" />
                </div>
              </div>
            </div>
            
          </div>
          <h1 className="relative pt-6">My designs</h1>
        </div>
        <div>
          <div className="relative">
            <div className="bg-opacity-20 bg-gray-400 rounded-2xl p-3 -m-2">
              <div class="max-h-[406px] bg-opacity-20 bg-gray-400  rounded-2xl overflow-hidden">
                <div class="max-h-[406px]">
                  <img src="mymind.jpg" alt="Your Image" class="relative m-h-[100%] rounded-2xl" />
                </div>
              </div>
            </div>
            
          </div>
          <h1 className="relative pt-4">My designs</h1>
        </div>
      </div>
      
    </main>
  )
}
