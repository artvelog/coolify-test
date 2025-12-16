'use client'

import Output from "editorjs-react-renderer";

export default function BlockRenderer({ data }: { data: any }) {
  return <Output data={data} />;
}