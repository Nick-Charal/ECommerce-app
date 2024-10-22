import { Products } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function NewestProductCard({ product }: { product: Products }) {
  return (
    <div 
      className="hero bg-base-200"
    >
      <div 
        className="hero-content flex-col lg:flex-row"
      >
        <Image
          src={ product.image }
          alt={ product.name }
          width={ 500 }
          height={ 500 }
          className="max-w-lg rounded-lg shadow-2xl w-full" 
        />
        <div>
          <h1 
            className="text-5xl font-bold"
          >
            { product.name }
          </h1>
          <div 
            className="badge badge-primary mt-2"
          >
            NEW
          </div>
          <p 
            className="py-4"
          >
            { product.description }
          </p>
          <div
            className="flex justify-between items-center"
          >
            <p>
            { product.price.toLocaleString('en-US', {style: 'currency', currency:'EUR'}) }
            </p>
            <div>
              <Link
                href={`/products/${product.id}`}
                className="btn btn-link mr-2"
              >
                View More
              </Link>
              <button 
                className="btn btn-primary justify-end"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
