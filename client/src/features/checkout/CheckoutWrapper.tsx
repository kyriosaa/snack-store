import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QD3ILIEhx8CE5gHaHX9rLw5Qk61mqkrr6dbzZusIaLC92dvUC0aHF3s6xIx6li2g4SoMCxhSnnp4Gi6SHkbxg5e00b7CutTdm"
);

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
