import Image from 'next/image'
import Link from 'next/link'
import CircularStatus from '@/app/components/CircularStatus';
import MovingImages from '@/app/components/MovingImages';
import fs from 'fs';
import path from 'path';
import { CloudinaryLoader } from 'next-cloudinary';




const text = 'Usersmagic';
// const directory = path.join(process.cwd(), 'public/images/adr');
// const filenames = fs.readdirSync(directory);
// const images = filenames.map(name => cloudinary.url(`/adrimages/${name}`));



export default function Home() {

  return (
    <main className="overflow-x-hidden scroll-smooth	flex min-h-screen flex-col items-center p-8 pt-32 pb-18">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="">
          <Link href="https://www.hepsipay.com/" target="_blank">
            <Image src="/images/hepsipay.png" alt="Usersmagic" width={200} height={50} className="rounded-md" />
          </Link>
        </div>
        <div className="text-center text-xl pb-10 mt-[-30px]">Jr. Data Analyst</div>
        <div className='flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-5 pb-10'>
          <CircularStatus text="Full-time" circleColor="bg-red-500" />
          <CircularStatus text="Fintech" circleColor="bg-green-500" />
          <CircularStatus text="SQL" circleColor="bg-sky-500" />
          <CircularStatus text="Python" circleColor="bg-yellow-500" />
          <CircularStatus text="Excel" circleColor="bg-green-300" />
          <CircularStatus text="BI Tools" circleColor="bg-green-800" />
        </div>

        
        
        <div className="text-justify text-sm sm:text-lg mt-8 text-wrap  max-w-prose sm:py-4 py-4 text-gray-400/100	">
        Hepsipay is a payment service provider that offers online payment solutions for businesses. It allows merchants to accept various payment methods, including buy now pay later, bank loan, and hepsipay prepaid card option. 
        </div>
        <div className="max-w-800 text-center text-sm sm:text-lg mt-8 text-wrap sm:p-8 mb-16 text-gray-400/100	">
          <h3 className='text-md text-left text-black dark:text-white sm:text-lg'>Day to day <br></br><br></br></h3>
          <ul className='list-disc text-left ml-3 sm:ml-4 gap-5 flex flex-col max-w-prose'>
            <li>Conduct in-depth analysis of customer behavior within brands and related categories to forecast potential profit growth for prospective clients.</li>
            <li>Compare user behavior across various platforms, campaigns, and categories to derive valuable insights.</li>
            <li>Generate innovative ideas and analyze data to contribute to marketing and product strategy enhancements.</li>

          </ul>
        </div>
        {/* <div>
          <MovingImages foldername='usersmagic' text={text} />
        </div> */}

      </div>
    </main>
  );
}
