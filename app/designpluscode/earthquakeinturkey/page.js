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
        <div className="text-center text-3xl pb-5">Earthquake Relief Fund</div>
        <div className='flex flex-row items-center gap-2 sm:gap-5 pb-10'>
          <CircularStatus text="React" circleColor="bg-sky-500" />
          <CircularStatus text="Next.js" circleColor="bg-gray-500" />
          <CircularStatus text="Part-time" circleColor="bg-yellow-500" />
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <Link href="https://helpturkey.vercel.app/">
            <Image src="/images/helpturkey.png" alt="Image description" width={830} height={410} className="rounded-md" />
          </Link>
        </div>
        
        <div className="text-justify text-sm sm:text-lg mt-8 text-wrap  max-w-prose sm:py-16 py-8 text-gray-400/100	">
          After staring the horrible day of February 6, 2023, I was in shock and despair waiting for news like every other Turkish people around the world. My initial reactiong after coming from class was to build <Link href='https://helpturkey.vercel.app/'><u className='underline-offset-4 decoration-red-500'>this</u></Link> website and start accepting donations by informing people on campus. After setting a venmo account for the Turkish Student Association at the University of Michigan and building this site, we collected and donated over $10,000 to trusted NGO's in Turkey.     
        </div>
        <div className="max-w-800 text-center text-sm sm:text-lg mt-8 text-wrap sm:p-8 mb-16 text-gray-400/100	">
          <h3 className='text-md text-left text-black dark:text-white sm:text-lg'>Reflections <br></br><br></br></h3>
          <ul className='list-disc text-left ml-3 sm:ml-4 gap-5 flex flex-col max-w-prose'>
            <li>People around you losing relatives, waiting to only hear bad news puts a lot into perspective. It reminded me once again how important health and saftey is, how lucky I am in life and how all the other things are mere desires.</li>
            <li>Being far from home yet being so much affected as a community showed me important it is to have people from your culture because it's so hard for many epople to understand what you're going through.</li>
            <li>So many of my friends donated money and clothes for our effforts which immensely surprised me. The care and attention they have shown, including their families have surprised me so much and made me feel the most grateful I've been. That day, I decided to donate to anything my friends are raiding money for because I saw how much it could mean to them.</li>
          </ul>
        </div>
        {/* <div>
          <MovingImages foldername='adrimages' text={text} />
        </div> */}

      </div>
    </main>
  );
}
