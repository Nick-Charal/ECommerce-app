import NewestProductCard from "./components/newestProductCard";
import ProductCard from "./components/productCard";
import prisma from "./lib/db/prisma";

export default async function Home() {
  const products = await prisma.products.findMany({
    orderBy: { id: 'desc' }
  })
  
  return (
    <div>
      <div>
        <NewestProductCard product={ products[0] } />
      </div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-2"
      >
        { products.slice(1).map((each) => (
          <ProductCard product={ each } key={ each.id }/>
        )) }
      </div>
    </div>
  );
}
