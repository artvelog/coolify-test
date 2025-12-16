import Image from "next/image";
import {directus} from './lib/directus';
import { readItems } from '@directus/sdk';
import BlockRenderer from "./components/Blocks";


async function getTestData() {
  return directus.request(readItems('testdata')) ?? [];
}


export default async function Home() {
  const data = await getTestData();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {data.map((item, index) => (
            <div key={item.id} className="p-4 border rounded shadow w-full">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <BlockRenderer key={index} data={item.content} />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        </div>
      </main>
    </div>
  );
}
