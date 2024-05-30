import { Typography } from "@mui/material";

export default function ProjectDescription() {
  return (
    <Typography>
      <h3>SnackStore</h3>
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
          <strong>- Product Sorting: </strong>
          Includes search, sorting, and filtering options for the items inside
          the product catalog for an easier time finding each product.
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
          Allows users to register an account and the website will remember
          their current shopping carts even after logging out.
          <br />
          <strong>- Discount Codes: </strong>
          Allows users to put in a discount code at checkout for a discount off
          their order.
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
          <strong>- Shopping Cart Page: </strong>
          Displays a list of available products to purchase along with the
          product information. Each product has two buttons: one to add the
          product to cart and another to view details about the product. The
          page also contains search, sorting, and filter options for easier
          navigation. Each page contains 9 products and the user can use switch
          between pages using the page numbers at the bottom of the list.
          <br />
          <strong>- Address Page: </strong>
          This page allows the user to enter their shipping address. The user
          can also press a checkbox to use the entered address inside their
          payment details.
          <br />
          <strong>- Order Summary Page: </strong>
          This page gives a complete reciept of the user's order for a final
          review before purchasing.
          <br />
          <strong>- Payment Page: </strong>
          This page allows the user to enter their payment information. The user
          can also press a checkbox to remember their payment details for later
          use.
        </body>
        <br />
        {/* This project was made for my Cloud Computing class. */}
      </body>
    </Typography>
  );
}
