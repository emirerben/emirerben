import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const texts = [
    {
      subtitle: 'ADR Lab',
      description: 'My work for Adel Design Research Lab',
      link: '/designpluscode/ADRLab'
    },
    {
      subtitle: 'Usersmagic',
      description: 'Designs for the startup I co-founded',
      link: '/designpluscode/usersmagic'
    },
    {
      subtitle: `Turkey Earthquake Relief Fund`,
      description: `Donation efforts after the earthquake in Turkey`,
      link: '/designpluscode/earthquakeinturkey'
    },
    {
      subtitle: `onepint`,
      description: `To match people with new people over a pint`,
      link: '/designpluscode/onepint'
    },
    {
      subtitle: `ebru's`,
      description: `The website I built for my mom's pottery`,
      link: '/designpluscode/ebrus'
    },
    // Add more text objects here
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8  py-48 md:py-56">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-3xl mb-8">Design + Code</div>
        {texts.map((text, index) => (
          <Link key={index} href={text.link} className="hover:bg-gray-200 dark:hover:bg-gray-900  md:items-center rounded-md grid grid-cols-1 md:grid-cols-[0.8fr_1.5fr]  py-3 px-3 md:px-9 gap- w-full max-w-xs md:max-w-lg lg:max-w-2xl ">
            <div className="w-50 md:text-lg sm:text-sm md:font-semibold sm:font-light">{text.subtitle}</div>
            <div className="md:pl-12 text-sm text-gray-600">{text.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
