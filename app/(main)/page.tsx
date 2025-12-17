import Image from "next/image";
import {directus} from '../lib/directus';
import { readItems } from '@directus/sdk';
import BlockRenderer from "../components/BlockRenderer";


async function getTestData() {
  return directus.request(readItems('testdata'));
}


export default async function Home() {
  const data = await getTestData();

  return (
    <div className="w-[500px] mx-auto space-y-2">
      {data?.map((item, index) => (
        <div key={item.id} className="p-4 border border-gray-300 rounded w-full">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <BlockRenderer key={index} data={item.content} base_url={process.env.BACKEND_URL} />
          {item.image && <img src={`${process.env.BACKEND_URL}/assets/${item.image}`} width={1200} height={600} alt=""/>}
        </div>
      ))}
    </div>
  );
}


