import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
        <Link href="/">
            <Image src="https://public-static.tinkoffjournal.ru/business-secrets/uploads/2023/04/9U7vAlfc-1.png" width={150} height={150} alt="logo"/>
        </Link>
        <div>
            <button className="mr-5 px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">Log in</button>
            <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">Sing up</button>
        </div>
    </header>
  )
}
