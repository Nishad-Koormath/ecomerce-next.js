import React from "react";
import "./style.css";
import { Suspense } from "react";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductLodingSkelton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Product List',
  description: '...',
}

const Products = async () => {
  return (
    <div className="container my-5">
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Products;
