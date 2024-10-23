import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { currencyFormat } from "../../app/util/util";
import { useAppSelector } from "../../app/store/configureStore";

interface Props {
  subtotal?: number;
}

export default function BasketSummary({ subtotal }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  if (subtotal === undefined)
    subtotal =
      basket?.items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      ) ?? 0;
  const deliveryFee = subtotal > 1000 ? 0 : 60;

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                Delivery fee
                <br />
                <Typography variant="caption" style={{ fontStyle: "italic" }}>
                  (Orders over 1000 NTD qualify for free delivery)
                </Typography>
              </TableCell>
              <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {currencyFormat(subtotal + deliveryFee)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
