import Image from 'next/image'
import Link from 'next/link'

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
    <main className="flex min-h-screen flex-col items-center p-8 py-32 md:py-56">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-3xl mb-8">ADR Lab</div>
        <div className="rounded-lg bg-gray-900 p-6">
        <Image src="/adrmain.png" alt="Image description" width={830} height={410} className="rounded-md"/>
        </div>
        
        <div className="text-justify text-sm sm:text-lg mt-8 text-wrap sm:px-24 sm:py-16 text-gray-400/100	">
        One noteworthy project was the creation of the ADR Lab's website (https://adrlabs.vercel.app/) using Next.js, a cutting-edge technology. This experience allowed me to not only turn designs into functional and visually appealing front-end code but also to prioritize user experience and performance optimization.
        </div>
        <div className="w-full text-start text-sm sm:text-lg mt-8 text-wrap sm:p-8 text-gray-400/100	">
          <h3 className='text-md text-black sm:text-lg'>Things I've learned <br></br><br></br></h3>
          <ul className='list-disc ml-5 gap-5 flex flex-col'>
            <li>Working in a project with various stakeholders coming from a different background, architecture in this case, requires documentation and effort to get everyone on the same page</li>
            <li>It is important to document everything from the ground up and leave a written playbook for the rest of the team to handle change once I'm out </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
