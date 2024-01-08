import Image from 'next/image'
import Link from 'next/link'
import CircularStatus from '@/app/components/CircularStatus';
import MovingImages from '@/app/components/MovingImages';
import fs from 'fs';
import path from 'path';


// const images = ['/images/adr/adrimages.png','/images/adr/adrnews.png', '/images/adr/adrmain.png', '/images/adr/adrpublications.png'];

const text = 'Adel Design Research Lab';
const directory = path.join(process.cwd(), 'public/images/adr');
const filenames = fs.readdirSync(directory);
const images = filenames.map(name => `/images/adr/${name}`);

export default function Home() {
  const texts = [
    {
      title: 'ADR Lab',
      main: `One noteworthy project was the creation of the ADR Lab's website (https://adrlabs.vercel.app/) using Next.js, a cutting-edge technology. This experience allowed me to not only turn designs into functional and visually appealing front-end code but also to prioritize user experience and performance optimization.`,
      link: '/designpluscode/ADRLab'
    },
    {
      subtitle: 'Usersmagic',
      description: 'Designs for the startup I co-founded',
      link: '/work'
    },
    {
      subtitle: `ebru's`,
      description: `The website I built for my mom's pottery`,
      link: '/sports'
    },
    // Add more text objects here
  ];

  return (
    <main className="overflow-x-hidden scroll-smooth	flex min-h-screen flex-col items-center p-8 py-32 md:py-56">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-3xl pb-5">ADR Lab</div>
        <div className='flex flex-row items-center gap-2 sm:gap-5 pb-10'>
          <CircularStatus text="React" circleColor="bg-sky-500" />
          <CircularStatus text="Next.js" circleColor="bg-gray-500" />
          <CircularStatus text="Part-time" circleColor="bg-yellow-500" />
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <Image src="/images/adr/3.png" alt="Image description" width={830} height={410} className="rounded-md"/>
        </div>
        
        <div className="text-justify text-sm sm:text-lg mt-8 text-wrap  max-w-prose sm:py-16 py-8 text-gray-400/100	">
          One noteworthy project was the creation of the ADR Lab's website (https://adrlabs.vercel.app/) using Next.js, a cutting-edge technology. This experience allowed me to not only turn designs into functional and visually appealing front-end code but also to prioritize user experience and performance optimization.
        </div>
        <div className="max-w-800 text-center text-sm sm:text-lg mt-8 text-wrap sm:p-8 mb-16 text-gray-400/100	">
          <h3 className='text-md text-left text-black dark:text-white sm:text-lg'>Things I've learned <br></br><br></br></h3>
          <ul className='list-disc text-left ml-3 sm:ml-4 gap-5 flex flex-col max-w-prose'>
            <li>Working in a project with various stakeholders coming from a different background, architecture in this case, requires documentation and effort to get everyone on the same page</li>
            <li>It is important to document everything from the ground up and leave a written playbook for the rest of the team to handle change once I'm out </li>
          </ul>
        </div>
        <div>
          <MovingImages images={images} text={text} />
        </div>

      </div>
    </main>
  );
}
