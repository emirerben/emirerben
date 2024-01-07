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
    <main className="flex min-h-screen flex-col items-center p-8  py-48 md:py-56">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-3xl mb-8">ADR Lab</div>
        <div className="rounded-lg bg-gray-900 p-6">
        <Image src="/adrmain.png" alt="Image description" width={830} height={410} className="rounded-md"/>
        </div>
        
        <div className="text-center text-md mt-8 text-wrap sm:p-48 text-gray-400/100	">
        One noteworthy project was the creation of the ADR Lab's website (https://adrlabs.vercel.app/) using Next.js, a cutting-edge technology. This experience allowed me to not only turn designs into functional and visually appealing front-end code but also to prioritize user experience and performance optimization.
        </div>
      </div>
    </main>
  );
}
