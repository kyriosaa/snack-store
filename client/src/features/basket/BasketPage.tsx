import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { useStoreContext } from "../../app/context/StoreContext";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import agent from "../../app/api/agent";
import BasketSummary from "./BasketSummary";
import { currencyFormat } from "../../app/util/util";

export default function BasketPage() {
  const { basket, setBasket, removeItem } = useStoreContext();

  function handleAddItem(productId: number) {
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error));
  }

  function handleRemoveItem(productId: number, quantity = 1) {
    agent.Basket.removeItem(productId, quantity)
      .then(() => removeItem(productId, quantity))
      .catch((error) => console.log(error));
  }

  if (!basket)
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <>
      <Typography display="flex" justifyContent="center">
        <h1>Cart</h1>
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Product</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Price</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Quantity</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Subtotal</strong>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <img
                      src={item.pictureUrl}
                      alt={item.name}
                      style={{ height: 50, marginRight: 20 }}
                    />
                    <span>{item.name}</span>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  {currencyFormat(item.price)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => handleRemoveItem(item.productId)}
                    color="error"
                    size="small"
                  >
                    <IoIosRemove />
                  </IconButton>
                  {item.quantity}
                  <IconButton
                    onClick={() => handleAddItem(item.productId)}
                    color="success"
                    size="small"
                  >
                    <IoIosAdd />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  {currencyFormat(item.price * item.quantity)}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() =>
                      handleRemoveItem(item.productId, item.quantity)
                    }
                    color="error"
                  >
                    <FaRegTrashAlt fontSize="medium" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
        </Grid>
      </Grid>
    </>
  );
}
