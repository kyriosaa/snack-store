import { useEffect } from "react";
import ProductList from "./ProductList";
import {
  Typography,
  Divider,
  Grid,
  Container,
  FormLabel,
  Box,
  Pagination,
} from "@mui/material";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
  setProductParams,
} from "./catalogSlice";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckboxButtons from "../../app/components/CheckboxButtons";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to Low" },
  { value: "price", label: "Price - Low to High" },
];

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const {
    productsLoaded,
    status,
    filtersLoaded,
    brands,
    types,
    productParams,
  } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  if (status.includes("pending"))
    return <LoadingComponent message="Loading products..." />;

  return (
    <>
      <Typography display="flex" justifyContent="center">
        <h1>Catalog</h1>
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4}>
        {/* Filtering functionality */}
        <Grid item xs={3}>
          {/* Search bar */}
          <Container sx={{ mb: 2 }}>
            <ProductSearch />
          </Container>

          {/* Sort by */}
          <Container sx={{ p: 2 }}>
            <FormLabel id="sortby">Sort By</FormLabel>
            <RadioButtonGroup
              selectedValue={productParams.orderBy}
              options={sortOptions}
              onChange={(e) =>
                dispatch(setProductParams({ orderBy: e.target.value }))
              }
            />
          </Container>

          {/* Filter by types */}
          <Container sx={{ p: 2 }}>
            <FormLabel id="sortby">Brands</FormLabel>
            <CheckboxButtons
              items={types}
              checked={productParams.types}
              onChange={(items: string[]) =>
                dispatch(setProductParams({ types: items }))
              }
            />
          </Container>

          {/* Filter by brands */}
          <Container sx={{ p: 2 }}>
            <FormLabel id="sortby">Types</FormLabel>
            <CheckboxButtons
              items={brands}
              checked={productParams.brands}
              onChange={(items: string[]) =>
                dispatch(setProductParams({ brands: items }))
              }
            />
          </Container>
        </Grid>

        {/* List of products */}
        <Grid item xs={9}>
          <ProductList products={products} />
        </Grid>

        {/* Pagination (basically the option to switch pages) */}
        <Grid item xs={3} />
        <Grid item xs={9} sx={{ mb: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Displaying 1-9 of 20 items</Typography>
            <Pagination color="secondary" size="large" count={10} page={2} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
