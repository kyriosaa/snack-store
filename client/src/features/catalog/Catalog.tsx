import { Product } from "../../app/models/product";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { Divider, Typography } from "@mui/material";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Typography display="flex" justifyContent="center">
        <h1>Catalog</h1>
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <ProductList products={products} />
    </>
  );
}
