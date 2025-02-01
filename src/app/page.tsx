import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="my-8 md:w-1/2 mx-4 md:mx-auto">
        <div className="p-4 rounded-lg border border-slate-200">
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
      </div>
    </div>
  )
}