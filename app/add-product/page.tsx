import { redirect } from "next/navigation";
import prisma from "../lib/db/prisma"
import SubmitForm from "../components/submitForm";

async function addProduct(params: FormData) {
  'use server'

  const name = params.get('name')?.toString() ?? 'Something went wrong';
  const description = params.get('description')?.toString() ?? '';
  const image = params.get('image')?.toString() ?? 'Something went wrong';
  const price = Number(params.get('price')) ?? 0;

  await prisma.products.create({
    data: {name, description, image, price},
  })
  
  redirect('/')
}

export default function AddProductPage() {
  return (
    <div>
      <h1
        className="font-bold text-lg mb-2"
      >
        Add Product
      </h1>
      <form action={addProduct}>
        <input 
          type="text" 
          placeholder="Name" 
          className="input input-bordered w-full mb-2"
          name="name"
          required
        />
        <textarea 
          className="textarea textarea-bordered w-full mb-2" 
          placeholder="Description"
          name="description"
        >
        </textarea>
        <input 
          type="url" 
          placeholder="Image URL" 
          className="input input-bordered w-full mb-2"
          name="image"
          required
        />
        <input 
          type="number" 
          placeholder="Price" 
          className="input input-bordered w-full mb-2"
          name="price"
          required
        />
        <SubmitForm />
      </form>
    </div>
  )
}
