import { Typography, Divider } from "@mui/material";
import ContactDescription from "./ContactDescription";

export default function ContactPage() {
  return (
    <>
      <Typography display="flex" justifyContent="center">
        <h1>Contact</h1>
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <ContactDescription />
    </>
  );
}
