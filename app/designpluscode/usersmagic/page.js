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
        <div className="text-center text-3xl pb-5">Usersmagic</div>
        <div className='flex flex-row items-center gap-2 sm:gap-5 pb-10'>
          <CircularStatus text="UI/UX" circleColor="bg-sky-500" />
          <CircularStatus text="User/Market Research" circleColor="bg-gray-500" />
          <CircularStatus text="Startup" circleColor="bg-yellow-500" />
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <Image src="/images/usersmagic.png" alt="Usersmagic" width={830} height={410} className="rounded-md"/>
        </div>
        
        <div className="text-justify text-sm sm:text-lg mt-8 text-wrap  max-w-prose sm:py-16 py-8 text-gray-400/100	">
            Co-founded Usersmagic, a user and market research startup with over <u className='underline-offset-4 decoration-sky-500'>200,000</u> testers and clients such as <u className='underline-offset-4 decoration-orange-500'>Nike</u>, <u className='underline-offset-4 decoration-red-500'>Delivery Hero</u>, and <u className='underline-offset-4 decoration-emerald-500'>Teknosa</u>. Designed websites, deliverables, and surveys from the ground up. Led user and market research, from sampling to questionnaire, for over 25 companies.
        </div>
        <div className="max-w-800 text-center text-sm sm:text-lg mt-8 text-wrap sm:p-8 mb-16 text-gray-400/100	">
          <h3 className='text-md text-left text-black dark:text-white sm:text-lg'>Things I've learned <br></br><br></br></h3>
          <ul className='list-disc text-left ml-3 sm:ml-4 gap-5 flex flex-col max-w-prose'>
            <li>User research is about listening, just like everything in life. The more and better you listen, the more you learn and improve. The Mom Test was an amazing book that helped me improve in doing research and understanding users/people.</li>
            <li>Momentum is the fuel when building with a team. If you can get the team back on track at hard times, it gives you a higher change of success in the long run. This is because everyone works on a startup or idea when the hype and motivation is there.</li>
            <li>My leadership type is a servant leader, working to make others' jobs easier, taking the weight from others and pushing my limits. I have high standards for myself, but I expect the same from others, which taught me to pay a lot of attention to this when before working with someone.</li>
            <li>It is essential to find genuinely good people, people that have high standards, and people that get the job done. I think this is all you need</li>
          </ul>
        </div>
        {/* <div>
          <MovingImages foldername='usersmagic' text={text} />
        </div> */}

      </div>
    </main>
  );
}
