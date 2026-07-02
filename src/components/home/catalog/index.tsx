"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/product/all`,
      );
      setProducts(await productsRes.json());
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <ul>{}</ul>
    </div>
  );
};

export default ProductCatalog;
