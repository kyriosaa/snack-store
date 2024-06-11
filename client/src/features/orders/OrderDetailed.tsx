import { Box, Button, Grid, Typography } from "@mui/material";
import { Order } from "../../app/models/order";
import { BasketItem } from "../../app/models/basket";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
  order: Order;
  setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
  const subtotal =
    order.orderItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    ) ?? 0;
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} gutterBottom>
          <h1>
            Order #{order.id} - {order.orderStatus}
          </h1>
        </Typography>
        <Button
          onClick={() => setSelectedOrder(0)}
          sx={{ m: 2 }}
          size="medium"
          variant="text"
          color="secondary"
        >
          Back to orders
        </Button>
      </Box>
      <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subtotal={subtotal} />
        </Grid>
      </Grid>
    </>
  );
}
