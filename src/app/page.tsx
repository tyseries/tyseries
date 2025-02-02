import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="my-8 md:w-1/2 mx-4 md:mx-auto">
        <div className="p-4 rounded-lg border border-slate-200 bg-white">
          <div className="flex">
            <Image src="/icon.jpg" alt="Icon" width={100} height={100} className="aspect-square w-16 h-16 rounded-full"  />
            <div className="ml-4">
              <h1 className="text-xl font-semibold">Typhone</h1>
              <p className="mt-2 text-slate-400 text-sm">I&apos;m TyPhone, a middle schooler living in Japan. I mainly focus on front-end development.</p>
              <div className="flex items-center mt-2 gap-2">
                <Link href="/"><FiLink className="text-xl text-slate-400" /></Link>
                <Link href="https://github.com/tyseries" rel="noreferrer noopener" target="_blank"><FaGithub className="text-xl text-slate-400" /></Link>
                <Link href="https://zenn.dev/tyseries" rel="noreferrer noopener" target="_blank"><Image src="/zenn.svg" alt="Zenn" width={100} height={100} className="w-5 h-5 aspect-square" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 flex flex-wrap text-sm">
            <p className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 w-fit">HTML</p>
            <p className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 w-fit">CSS</p>
            <p className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 w-fit">JavaScript</p>
            <p className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 w-fit">TypeScript</p>
            <p className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 w-fit">React</p>
            <p className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 w-fit">Next.js</p>
          </div>
        </div>
        <div className="mt-8 p-4 rounded-lg border border-slate-200 bg-white">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="https://waterui.vercel.app" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-lg p-2 shadow-sm">
              <h1 className="font-semibold">Water UI</h1>
              <p className="text-sm text-slate-400 line-clamp-1">Super Easy-to-Use React UI Components</p>
            </Link>
          </div>
        </div>
        <div className="mt-8 p-4 rounded-lg border border-slate-200 bg-white">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="space-y-4 mt-4 ml-2">
            <div className="flex items-center"><div className="w-4 h-4 rounded-full border-4 aspect-square border-slate-400 mr-2" /><p className="text-sm">I&apos;ve launched this website. 2025/02/01</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}