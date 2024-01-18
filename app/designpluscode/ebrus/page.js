import ComingSoon from "@/app/components/ComingSoon";
import Link from "next/link";

export default function Home() {

  return (
    <main className="overflow-x-hidden scroll-smooth text-center flex min-h-screen items-center justify-center p-8 py-32 md:py-56">
      <Link href={'/'} className="absolute left-10 top-10 font-serif text-2xl">ee</Link>
      <ComingSoon></ComingSoon>
    </main>
  );
}
