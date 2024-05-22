import { Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

export default function NotFound() {
  return (
    // <Container component={Paper} sx={{ height: 400 }}>
    //   <Typography>
    //     <h1>Oops! We could not find what you are looking for!</h1>
    //   </Typography>
    //   <Divider />
    //   <Button fullWidth component={Link} to="/catalog">
    //     Go back to shop
    //   </Button>
    // </Container>

    <>
      <Typography display="flex" justifyContent="center">
        <h1>404 Not Found</h1>
      </Typography>
      <Typography display="flex" justifyContent="center">
        <img src="/images/404notfound.png" />
      </Typography>
      <Typography display="flex" justifyContent="center">
        <h3>Oops! We could not find what you are looking for!</h3>
      </Typography>
      <Divider />
      <Button
        variant="text"
        size="large"
        endIcon={<FiShoppingBag />}
        fullWidth
        component={Link}
        to="/catalog"
      >
        Go back to shop
      </Button>
    </>
  );
}
