'use client'
import Blocks from 'editorjs-blocks-react-renderer';

export default function BlockRenderer({ data, base_url }: { data: any, base_url: any }) {

  const ImageRenderer = ({ data } : { data: any }) => {
    const src = `${base_url}${data.file.url}`;
    return <img src={src} alt={data.caption || ''} />;
  };

  return <Blocks data={data} renderers={{ image: ImageRenderer }} />;
}