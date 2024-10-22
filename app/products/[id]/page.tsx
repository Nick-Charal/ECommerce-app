import prisma from "@/app/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id
  const findProduct = await prisma.products.findUniqueOrThrow({ 
    where: { id } 
  }).catch(() => {
    notFound()
  })

  return {
    title: findProduct.name,
    openGraph: {
      images: [findProduct.image]
    }
  }
}

export default async function Product({ params }: { params: { id: string } }) {
  const id = params.id
  const findProduct = await prisma.products.findUniqueOrThrow({ 
    where: { id } 
  }).catch(() => {
    notFound()
  })

  return (
    <div
      className="flex flex-col lg:flex-row gap-2"
    >
      <Image
          src={ findProduct.image}
          alt={ findProduct.name }
          width={ 500 }
          height={ 500 }
          className="max-w-lg rounded-lg shadow-2xl w-full" 
      />
      <div>
        <h1 
          className="text-5xl font-bold"
        >
          { findProduct.name }
        </h1>
        <p 
          className="py-4"
        >
          { findProduct.description }
        </p>
        <div
          className="flex justify-between items-center"
        >
          <p>
          { findProduct.price.toLocaleString('en-US', {style: 'currency', currency:'EUR'}) }
          </p>
          <button 
            className="btn btn-primary justify-end"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
