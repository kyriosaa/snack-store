import { Button, Divider, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  const { basket } = useAppSelector((state) => state.basket);

  if (!basket)
    return (
      <Typography align="center" sx={{ mt: 7 }}>
        <h1>Your basket is empty!</h1>
      </Typography>
    );

  return (
    <>
      <Typography display="flex" justifyContent="center">
        <h1>Cart</h1>
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <BasketTable items={basket.items} />
      <Grid container>
        <Grid item xs={6} sx={{ mb: 4 }} />
        <Grid item xs={6} sx={{ mb: 4 }}>
          <BasketSummary />
          <Button
            sx={{ mt: 2 }}
            component={Link}
            to="/checkout"
            variant="contained"
            size="large"
            color="success"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
