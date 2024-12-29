import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    slug: string,
    title: string,
    description: string,
    thumnail: string
  }
}

export default function ProCard(data: Props) {
  return (
    <Link href={`${data.data.slug}`}>
      <div className="pro-card">
        <Image src={data.data.thumnail} sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px" width={160} height={160} className="lg:w-40 w-full lg:h-40 rounded-2xl" alt={data.data.title}/>
        <div className="">
          <h2 className="text-yellow-500 text-4xl mb-6">{data.data.title}</h2>
          <p className="lg:text-base text-sm">{data.data.description}</p>
        </div>
      </div>
    </Link>
  );
}
