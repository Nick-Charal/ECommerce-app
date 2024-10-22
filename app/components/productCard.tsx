import { Products } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Products }) {
  return (
    <div 
      className="card bg-base-100 shadow-xl w-full"
    >
      <figure>
        <Image
          src={ product.image }
          alt={ product.name }
          width={ 500 }
          height={ 500 }
          className="max-w-lg rounded-lg"
        />
      </figure>
      <div 
        className="card-body"
      >
        <h2 
          className="card-title"
        >
          { product.name }
        </h2>
        <p>
          { product.description }
        </p>
        <div 
          className="card-actions justify-between items-center"
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
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
