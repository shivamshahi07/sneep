import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@prisma/client';
import ProductCard from '@/components/postcard';

interface HomeProps {
  searchParams: { page: string };
}
export default async function Home({}: HomeProps) {
  const totalitemcount = await prisma.post.count();
  const posts = await prisma.post.findMany({});

  return (
    <div className="flex flex-col items-center ">
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          {/* <div>
            <h1 className="text-5xl font-bold">{posts[0].code}</h1>
            <p className="py-6 text-black text-5xl ">{posts[0].description}</p>
            <Link
              href={'/posts/' + posts[0].id}
              className="rounded-xl bg-green-300 p-3 text-3xl "
            >
              Check it out
            </Link>
          </div> */}
        </div>
      </div>

      <div className="">
        {posts.map((posts) => (
          <ProductCard post={posts} key={posts.id} />
        ))}
      </div>
    </div>
  );
}
