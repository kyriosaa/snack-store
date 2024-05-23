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
          <strong>- Navigation Bar: </strong>
          Includes a navigation bar for quick navigation between pages.
          <br />
          <strong>- Product Details: </strong>
          Includes a page for every product that contains detailed descriptions
          along with an option to add, remove, or edit the items inside the
          user's shopping cart.
          <br />
          <strong>- Shopping Cart: </strong>
          Allows users to add products to a shopping cart before purchasing.
          <br />
          <strong>- Membership Functionality: </strong>
          Allows users to register an account and log in for discount codes that
          can be applied for discounts.
          <br />
          <strong>- Dark Mode: </strong>
          Includes a button on the page that toggles dark mode.
          <br />
          <strong>- Error Handling: </strong>
          Includes a test for the different types of errors that might be
          returned when a user interacts with the website.
        </body>
        <br />
        {/* Pages Section */}
        <body>
          <h3>Pages:</h3>
          <strong>- Home Page: </strong>
          Displays an eye-catching home menu.
          <br />
          <strong>- Catalog Page: </strong>
          Displays a list of available products to purchase along with the
          product information. Each product has two buttons: one to add the
          product to cart and another to view details about the product.
          <br />
          <strong>- About Page: </strong>
          Shows an about page containing the project description and a network
          error testing area.
          <br />
          <strong>- Contact Page: </strong>
          Shows the credits for the website.
          <br />
          <strong>- Checkout Page: </strong>
          Shows a list of products the user has added to their shopping cart
          along with options to add or remove those products. Also contains an
          area displaying the subtotal, shipping cost, and total amount that the
          user needs to pay along with a checkout button.
        </body>
        <br />
        This project was made for my Cloud Computing class.
      </body>
    </Typography>
  );
}
