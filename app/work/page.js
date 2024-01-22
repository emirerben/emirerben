import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const texts = [
    {
      subtitle: 'Hepsipay',
      description: 'Recent work as a Data Analyst at Hepsipay',
      link: '/work/hepsipay'
    },
    {
      subtitle: 'AiPi',
      description: 'My work as an analyst intern at AiPi',
      link: '/work/aipi'
    },
    {
      subtitle: `Coda`,
      description: `What I did as a growth fellow at Coda`,
      link: '/work/coda'
    },
    {
      subtitle: `Usersmagic`,
      description: `My experience building a user/market research startup with 200,000 testers`,
      link: '/work/usersmagic'
    },
    {
      subtitle: `ADR Lab`,
      description: `My work as a web developer at Adel Design Research Lab at the University of Michigan`,
      link: '/work/adrlab'
    },
    // Add more text objects here
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8  py-48 md:py-56">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <div className="flex flex-col items-center w-full">
        <div className="text-center text-3xl mb-8">Work</div>
        {texts.map((text, index) => (
          <Link key={index} href={text.link} className={`hover:bg-gray-200 dark:hover:bg-gray-900  md:items-center rounded-md grid grid-cols-1 md:grid-cols-[0.8fr_1.5fr]  py-3 px-3 md:px-9 gap- w-full max-w-xs md:max-w-lg lg:max-w-2xl ${text.subtitle === 'Hepsipay' ? 'text-green-500' : ''}`}>
            <div className="w-50 md:text-lg sm:text-sm md:font-semibold sm:font-light ">{text.subtitle}</div>
            <div className={`md:pl-12 text-sm ${text.subtitle === 'Hepsipay' ? 'text-green-500' : 'text-gray-600'}`}>{text.description}</div>
          </Link>
  ))}

      </div>
    </main>
  );
}
