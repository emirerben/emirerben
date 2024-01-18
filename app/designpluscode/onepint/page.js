import Image from 'next/image'
import Link from 'next/link'
import CircularStatus from '@/app/components/CircularStatus';
import MovingImages from '@/app/components/MovingImages';
import fs from 'fs';
import path from 'path';
import { CloudinaryLoader } from 'next-cloudinary';




const text = ' ';
// const directory = path.join(process.cwd(), 'public/images/adr');
// const filenames = fs.readdirSync(directory);
// const images = filenames.map(name => cloudinary.url(`/adrimages/${name}`));



export default function Home() {

  return (
    <main className="overflow-x-hidden scroll-smooth	flex min-h-screen flex-col items-center p-8 pt-32 pb-18">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-3xl pb-5">One Pint</div>
        <div className='flex flex-row items-center gap-2 sm:gap-5 pb-10'>
          <CircularStatus text="React" circleColor="bg-sky-500" />
          <CircularStatus text="Next.js" circleColor="bg-gray-500" />
          <CircularStatus text="Part-time" circleColor="bg-yellow-500" />
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <Link href="https://onepint.vercel.app/" target="_blank">
            <Image src="/images/onepint.png" alt="Image description" width={830} height={410} className="rounded-md" />
          </Link>
        </div>
        
        <div className="text-justify text-sm sm:text-lg mt-8 text-wrap  max-w-prose sm:py-16 py-8 text-gray-400/100	">
           After graduation, I realised how it is hard to meet new people in a new city although if you could only get the chance, you could meet amazing like-minded people. I decided to build a waitlist form in <Link href='https://onepint.vercel.app/'><u className='underline-offset-4 decoration-red-500'>this</u></Link> website and start accepting applications from people that might be interested. My main goal was to build a form to accept responses and get familiar with the flow and if I wanted to continue in the future, I could just build the matching algorithm and the rest of the website.     
        </div>
        <div className="max-w-800 text-center text-sm sm:text-lg mt-8 text-wrap sm:p-8 mb-16 text-gray-400/100	">
          <h3 className='text-md text-left text-black dark:text-white sm:text-lg'>Things I've learned <br></br><br></br></h3>
          <ul className='list-disc text-left ml-3 sm:ml-4 gap-5 flex flex-col max-w-prose'>
            <li>Building forms and accepting responses from users.</li>
            <li>Storing user responses in Supabase and preventing duplicate emails.</li>
          </ul>
        </div>
        {/* <div>
          <MovingImages foldername='adrimages' text={text} />
        </div> */}

      </div>
    </main>
  );
}
