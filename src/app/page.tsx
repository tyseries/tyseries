import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="my-4 md:my-8 md:w-1/2 mx-4 md:mx-auto">
        <div className="p-4 rounded-lg border border-zinc-200 bg-white">
          <div className="flex">
            <Image src="/icon.jpg" alt="Icon" width={100} height={100} className="aspect-square w-16 h-16 rounded-full"  />
            <div className="ml-4">
              <h1 className="text-xl font-bold">Typhone</h1>
              <p className="my-2">I&apos;m TyPhone, a middle schooler living in Japan. I mainly focus on front-end development.</p>
              <div className="flex items-center gap-2 text-zinc-400 flex-wrap">
                <Link href="https://github.com/tyseries" rel="noreferrer noopener" target="_blank" className="rounded-lg">
                  <div className="px-2 py-0.5 border rounded-lg border-zinc-200 flex items-center shadow-sm">
                    <FaGithub className="mr-2" /><p>@tyseries</p>
                  </div>
                </Link>
                <Link href="https://zenn.dev/tyseries" rel="noreferrer noopener" target="_blank" className="rounded-lg">
                  <div className="px-2 py-0.5 border rounded-lg border-zinc-200 flex items-center shadow-sm">
                    <Image src="/zenn.svg" alt="Zenn Logo" width={100} height={100} className="w-4 h-4 aspect-square mr-2" /><p>@tyseries</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 flex-wrap text-zinc-600">
            <p className="px-2 py-0.5 rounded bg-zinc-200 w-fit">HTML</p>
            <p className="px-2 py-0.5 rounded bg-zinc-200 w-fit">CSS</p>
            <p className="px-2 py-0.5 rounded bg-zinc-200 w-fit">JavaScript</p>
            <p className="px-2 py-0.5 rounded bg-zinc-200 w-fit">TypeScript</p>
            <p className="px-2 py-0.5 rounded bg-zinc-200 w-fit">React</p>
            <p className="px-2 py-0.5 rounded bg-zinc-200 w-fit">Next.js</p>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg border border-zinc-200 bg-white">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="https://waterui.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-lg">
              <div className="border border-zinc-200 rounded-lg p-2 shadow-sm">
                <h1 className="font-bold">Water UI</h1>
                <p className="text-zinc-400 line-clamp-1">Super Easy-to-Use React UI Components</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-lg border border-zinc-200 bg-white">
          <h2 className="text-xl font-bold">Timeline</h2>
          <div className="space-y-2 mt-4">
            <div className="flex items-center"><div className="w-4 h-4 rounded-full border-4 aspect-square border-zinc-400 mr-2" /><p>I created the <Link href="/" className="underline decoration-dashed text-zinc-600" rel="noreferrer noopener" target="_blank">Water UI</Link>. You can install it via npm. 2025/02/06</p></div>
            <div className="flex items-center"><div className="w-4 h-4 rounded-full border-4 aspect-square border-zinc-400 mr-2" /><p>I&apos;ve launched this website. 2025/02/01</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}