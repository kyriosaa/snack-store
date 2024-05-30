import { Avatar, CardActions, Typography } from "@mui/material";

export default function ContactDescription() {
  return (
    <Typography>
      <h3>This project was made by:</h3>
      <body>
        <CardActions sx={{ display: "flex", justifyContent: "left" }}>
          <Avatar sx={{ width: 80, height: 80 }}>
            <img src="/images/kin.jpg" style={{ width: 80, height: 80 }} />
          </Avatar>
          <strong> </strong>
          <body>
            <strong>Purit Hongjirakul</strong>
            <br />
            Email: kyriosaaph@gmail.com
          </body>
        </CardActions>
      </body>
    </Typography>
  );
}
