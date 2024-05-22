import { Typography } from "@mui/material";

export default function ProjectDescription() {
  return (
    <Typography>
      <h3>SnackStore - Cloud Computing Final Project</h3>
      <body>
        An e-commerce website that allows users to purchase snacks.
        <br />
        <br />
        {/* Features Section */}
        <body>
          <h3>Features:</h3>
          <strong>Navigation Bar: </strong>
          Includes a navigation bar for quick navigation between pages.
          <br />
          <strong>Shopping Cart: </strong>
          Allows users to add products to a shopping cart before purchasing.
          <br />
          <strong>Membership Functionality: </strong>
          Allows users to register an account and log in for discount codes that
          can be applied for discounts.
          <br />
          <strong>Dark Mode: </strong>
          Includes a button on the page that toggles dark mode.
          <br />
          <strong>Error Handling: </strong>
          Includes a test for the different types of errors that might be
          returned when a user interacts with the website.
        </body>
        <br />
        {/* Pages Section */}
        <body>
          <h3>Pages:</h3>
          <strong>Home Page: </strong>
          Displays an eye-catching home menu.
          <br />
          <strong>Catalog Page: </strong>
          Displays a list of available products to purchase along with the
          product information. Each product has two buttons: one to add the
          product to cart and another to view details about the product.
          <br />
          <strong>About Page: </strong>
          Shows an about page.
          <br />
          <strong>Contact Page: </strong>
          Shows the credits for the website.
        </body>
        <br />
        This project was made for my Cloud Computing class.
      </body>
    </Typography>
  );
}
