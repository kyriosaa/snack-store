import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  IconButton,
} from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { currencyFormat } from "../../app/util/util";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
import { BasketItem } from "../../app/models/basket";

interface Props {
  items: BasketItem[];
  isBasket?: boolean;
}

export default function BasketTable({ items, isBasket = true }: Props) {
  // eslint-disable-next-line no-empty-pattern
  const {} = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
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
            {isBasket && <TableCell align="right"></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
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
              <TableCell align="center">{currencyFormat(item.price)}</TableCell>
              <TableCell align="center">
                {isBasket && (
                  <IconButton
                    onClick={() =>
                      dispatch(
                        removeBasketItemAsync({
                          productId: item.productId,
                          quantity: 1,
                          name: "rem",
                        })
                      )
                    }
                    color="error"
                    size="small"
                  >
                    <IoIosRemove />
                  </IconButton>
                )}
                {item.quantity}
                {isBasket && (
                  <IconButton
                    onClick={() =>
                      dispatch(
                        addBasketItemAsync({ productId: item.productId })
                      )
                    }
                    color="success"
                    size="small"
                  >
                    <IoIosAdd />
                  </IconButton>
                )}
              </TableCell>
              <TableCell align="center">
                {currencyFormat(item.price * item.quantity)}
              </TableCell>
              {isBasket && (
                <TableCell align="right">
                  <IconButton
                    onClick={() =>
                      dispatch(
                        removeBasketItemAsync({
                          productId: item.productId,
                          quantity: item.quantity,
                          name: "del",
                        })
                      )
                    }
                    color="error"
                  >
                    <FaRegTrashAlt fontSize="medium" />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
