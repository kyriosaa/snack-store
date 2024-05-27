import * as yup from "yup";

export const validationSchema = [
  yup.object({
    fullName: yup.string().required("Full name is required"),
    address1: yup.string().required("Address is required"),
    address2: yup.string(),
    district: yup.string().required("District is required"),
    city: yup.string().required("City is required"),
    zip: yup.string().required("Zip code is required"),
    country: yup.string().required("Country is required"),
  }),
  yup.object(),
  yup.object({
    nameOnCard: yup.string().required(),
  }),
];
