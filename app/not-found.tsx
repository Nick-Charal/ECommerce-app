'use client'

import { redirect } from "next/navigation";
import { useEffect, useTransition } from "react";

export default function NotFound() {
  const [, startTransition] = useTransition();

  useEffect(() => {
    const timeout = setTimeout(() => startTransition(() => redirect("/")), 5000);

    return () => clearTimeout(timeout);
  }, []);
  setTimeout(() => {
    redirect('/')
  }, 3000);

  return (
    <div>
      <h2>
        Product not found
      </h2>
      <h2>
        Redirecting to homepage
      </h2>
    </div>
  )
}