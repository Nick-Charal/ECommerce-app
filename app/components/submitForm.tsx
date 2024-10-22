'use client'

import { useFormStatus } from "react-dom"

export default function SubmitForm() {
  const { pending } = useFormStatus();

  return (
    <button 
      className="btn w-full"
      type="submit"
      disabled={ pending }
    >
      { pending && <span className="loading loading-spinner loading-md"></span> }
      Add Product
    </button>
  )
}
