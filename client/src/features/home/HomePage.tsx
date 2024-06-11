import { Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import Snowfall from "react-snowfall";

export default function HomePage() {
  const snowflake1 = document.createElement("img");
  snowflake1.src = "/images/pixelsnacks/icons/Icon5_01.png";
  const snowflake2 = document.createElement("img");
  snowflake2.src = "/images/pixelsnacks/icons/Icon5_02.png";
  const snowflake3 = document.createElement("img");
  snowflake3.src = "/images/pixelsnacks/icons/Icon5_03.png";
  const snowflake4 = document.createElement("img");
  snowflake4.src = "/images/pixelsnacks/icons/Icon5_04.png";
  const snowflake5 = document.createElement("img");
  snowflake5.src = "/images/pixelsnacks/icons/Icon5_05.png";
  const snowflake6 = document.createElement("img");
  snowflake6.src = "/images/pixelsnacks/icons/Icon5_06.png";
  const snowflake7 = document.createElement("img");
  snowflake7.src = "/images/pixelsnacks/icons/Icon5_07.png";
  const snowflake8 = document.createElement("img");
  snowflake8.src = "/images/pixelsnacks/icons/Icon5_08.png";
  const snowflake9 = document.createElement("img");
  snowflake9.src = "/images/pixelsnacks/icons/Icon5_09.png";
  const snowflake10 = document.createElement("img");
  snowflake10.src = "/images/pixelsnacks/icons/Icon5_10.png";
  const snowflake11 = document.createElement("img");
  snowflake11.src = "/images/pixelsnacks/icons/Icon5_11.png";
  const snowflake12 = document.createElement("img");
  snowflake12.src = "/images/pixelsnacks/icons/Icon5_12.png";
  const snowflake13 = document.createElement("img");
  snowflake13.src = "/images/pixelsnacks/icons/Icon5_13.png";
  const snowflake14 = document.createElement("img");
  snowflake14.src = "/images/pixelsnacks/icons/Icon5_14.png";
  const snowflake15 = document.createElement("img");
  snowflake15.src = "/images/pixelsnacks/icons/Icon5_15.png";
  const snowflake16 = document.createElement("img");
  snowflake16.src = "/images/pixelsnacks/icons/Icon5_16.png";
  const snowflake17 = document.createElement("img");
  snowflake17.src = "/images/pixelsnacks/icons/Icon5_17.png";
  const snowflake18 = document.createElement("img");
  snowflake18.src = "/images/pixelsnacks/icons/Icon5_18.png";
  const snowflake19 = document.createElement("img");
  snowflake19.src = "/images/pixelsnacks/icons/Icon5_19.png";
  const snowflake20 = document.createElement("img");
  snowflake20.src = "/images/pixelsnacks/icons/Icon5_20.png";
  const snowflake21 = document.createElement("img");
  snowflake21.src = "/images/pixelsnacks/icons/Icon5_21.png";
  const snowflake22 = document.createElement("img");
  snowflake22.src = "/images/pixelsnacks/icons/Icon5_22.png";
  const snowflake23 = document.createElement("img");
  snowflake23.src = "/images/pixelsnacks/icons/Icon5_23.png";
  const snowflake24 = document.createElement("img");
  snowflake24.src = "/images/pixelsnacks/icons/Icon5_24.png";
  const snowflake25 = document.createElement("img");
  snowflake25.src = "/images/pixelsnacks/icons/Icon5_25.png";
  const snowflake26 = document.createElement("img");
  snowflake26.src = "/images/pixelsnacks/icons/Icon5_26.png";
  const snowflake27 = document.createElement("img");
  snowflake27.src = "/images/pixelsnacks/icons/Icon5_27.png";
  const snowflake28 = document.createElement("img");
  snowflake28.src = "/images/pixelsnacks/icons/Icon5_28.png";
  const snowflake29 = document.createElement("img");
  snowflake29.src = "/images/pixelsnacks/icons/Icon5_29.png";
  const snowflake30 = document.createElement("img");
  snowflake30.src = "/images/pixelsnacks/icons/Icon5_30.png";
  const snowflake31 = document.createElement("img");
  snowflake31.src = "/images/pixelsnacks/icons/Icon5_31.png";
  const snowflake32 = document.createElement("img");
  snowflake32.src = "/images/pixelsnacks/icons/Icon5_32.png";
  const snowflake33 = document.createElement("img");
  snowflake33.src = "/images/pixelsnacks/icons/Icon5_33.png";
  const snowflake34 = document.createElement("img");
  snowflake34.src = "/images/pixelsnacks/icons/Icon5_34.png";
  const snowflake35 = document.createElement("img");
  snowflake35.src = "/images/pixelsnacks/icons/Icon5_35.png";
  const snowflake36 = document.createElement("img");
  snowflake36.src = "/images/pixelsnacks/icons/Icon5_36.png";
  const snowflake37 = document.createElement("img");
  snowflake37.src = "/images/pixelsnacks/icons/Icon5_37.png";
  const snowflake38 = document.createElement("img");
  snowflake38.src = "/images/pixelsnacks/icons/Icon5_38.png";
  const snowflake39 = document.createElement("img");
  snowflake39.src = "/images/pixelsnacks/icons/Icon5_39.png";
  const snowflake40 = document.createElement("img");
  snowflake40.src = "/images/pixelsnacks/icons/Icon5_40.png";

  const images = [
    snowflake1,
    snowflake2,
    snowflake3,
    snowflake4,
    snowflake5,
    snowflake6,
    snowflake7,
    snowflake8,
    snowflake9,
    snowflake10,
    snowflake11,
    snowflake12,
    snowflake13,
    snowflake14,
    snowflake15,
    snowflake16,
    snowflake17,
    snowflake18,
    snowflake19,
    snowflake20,
    snowflake21,
    snowflake22,
    snowflake23,
    snowflake24,
    snowflake25,
    snowflake26,
    snowflake27,
    snowflake28,
    snowflake29,
    snowflake30,
    snowflake31,
    snowflake32,
    snowflake33,
    snowflake34,
    snowflake35,
    snowflake36,
    snowflake37,
    snowflake38,
    snowflake39,
    snowflake40,
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <Grid
        container
        columnSpacing={10}
        display="flex"
        justifyContent="center"
        sx={{ mt: 35 }}
      >
        <Grid item xs={6}>
          <Typography>
            <h1>Welcome to SnackStore!</h1>
            <br />
            <body>
              Hungry for some tasty treats?
              <br />
              Shop here and we'll deliver deliciousness straight to your door!
            </body>
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <Slider {...settings}>
            <div>
              <img
                src="/images/products/biscuits-pockygiant.png"
                alt="1"
                style={{ width: "100%", maxHeight: 500 }}
              />
            </div>
            <div>
              <img
                src="/images/products/chips-laysoriginal.png"
                alt="2"
                style={{ width: "100%", maxHeight: 500 }}
              />
            </div>
            <div>
              <img
                src="/images/products/chocolate-hersheys.png"
                alt="3"
                style={{ width: "100%", maxHeight: 500 }}
              />
            </div>
            <div>
              <img
                src="/images/products/cereal-frosties.png"
                alt="3"
                style={{ width: "100%", maxHeight: 500 }}
              />
            </div>
            <div>
              <img
                src="/images/products/chips-sourcream.png"
                alt="3"
                style={{ width: "100%", maxHeight: 500 }}
              />
            </div>
            <div>
              <img
                src="/images/products/biscuits-hellopanda.png"
                alt="3"
                style={{ width: "100%", maxHeight: 500 }}
              />
            </div>
          </Slider>
        </Grid>
      </Grid>
      <div>
        <Snowfall
          radius={[15, 60]}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={50}
          // Pass in the images to be used
          images={images}
        />
      </div>
    </>
  );
}
