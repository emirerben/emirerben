import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-8 sm:px-16 sm:py-16">
      <Link href={'/'} className="text-2xl pb-12 sm:pb-20">🍌</Link>
      <div className='flex flex-wrap gap-20 animate-carousel '>
        <div className='bg-opacity-20 bg-gray-400  rounded-2xl p-8 -m-2'>
          <h1 className="text-2xl pb-2 sm:text-4xl">Adel Design Research Lab</h1>
          {/* <h3 className='text-sm text-gray-600 pb-8'> I have been designing websites and apps since 2017. Everything started after going to a Sketch introductory meetup in Boston while attending the Harvard Summer School. <br></br><br></br> After starting to build products and startups, I always stepped up as the product designer. As my Figma skills improved, I was able to add a more structured learning experience by taking EECS 493, User Interface Development at the University of Michigan. </h3> */}
          <div className=''>
            <div className="mt-10 mb-10 grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-2">
              <Link href='https://adrlabs.vercel.app' className="relative group row-span-2 col-span-2">
                <img src="adrmain.png" alt="Your Image" className=" hover:brightness-10  h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white">
                  <span className="bg-yellow-400 px-4 py-1 rounded-full">adrlabs.vercel.app</span>
                </div>
              </Link>
              <Link href='https://adrlabs.vercel.app/news' className="relative group">
                  <img src="adrnews.png" alt="Your Image" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white">
                    <span className="bg-yellow-400 px-4 py-1 rounded-full">adrlabs.vercel.app/news</span>
                  </div>
              </Link>
              <Link href='https://adrlabs.vercel.app/projects/RFS1' className="relative group">
                  <img src="adrimages.png" alt="Your Image" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white">
                    <span className="bg-yellow-400 px-4 py-1 rounded-full">adrlabs.vercel.app/projects/RFS1</span>
                </div>
              </Link>
            </div>

            <h3 className='text-sm sm:text-base text-gray-400 pb-8'> ADR Lab is doing amazing things at Michigan and I was lucky to be a part of this amazing team. During my time at the Adel Design Research Lab, I had the privilege of leading the development of a website using Next.js, HTML, and CSS. I oversaw the project from conceptualization to deployment, ensuring the highest standards of performance and user experience. I gained experience in using API's, animations, writing clean code and documenting, collaborating with people with no prior web development experience.</h3>
          </div>
        </div>
        <div className='bg-opacity-20 bg-gray-400  rounded-2xl p-8 -m-2'>
          <h1 className="text-2xl pb-2 sm:text-4xl">Earthquake Donation For Turkey</h1>
          {/* <h3 className='text-sm text-gray-600 pb-8'> I have been designing websites and apps since 2017. Everything started after going to a Sketch introductory meetup in Boston while attending the Harvard Summer School. <br></br><br></br> After starting to build products and startups, I always stepped up as the product designer. As my Figma skills improved, I was able to add a more structured learning experience by taking EECS 493, User Interface Development at the University of Michigan. </h3> */}
          <div className=''>
            <div className="mt-10 mb-10 grid grid-flow-row-dense grid-cols-2 grid-rows-1 gap-2">
              <Link href='https://helpturkey.vercel.app' className="relative group row-span-1 col-span-1">
                <img src="helpturkey.png" alt="Your Image" className=" hover:brightness-10  h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white">
                  <span className="bg-yellow-400 px-4 py-1 rounded-full">helpturkey.vercel.app</span>
                </div>
              </Link>
              <Link href='https://adrlabs.vercel.app/news' className="relative group row-span-2">
                  <img src="helpturkeydonation.png" alt="Your Image" className="h-full w-full  object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white">
                    <span className="bg-yellow-400 px-4 py-1 rounded-full">adrlabs.vercel.app/news</span>
                  </div>
              </Link>
            </div>

            <h3 className='text-sm sm:text-base text-gray-400 pb-8'> On February 6th, Turkey woke up with devastating news by two massive earthquakes that affected over 10 cities. Death toll was climbing over tens of thousands of people and more were on the streets waiting to be rescued. As the the Turkish Student Association at the University of Michigan, we have collected over $10,000 to help those who are in need.</h3>
          </div>
        </div>
      </div>
    </main>
  )
}
