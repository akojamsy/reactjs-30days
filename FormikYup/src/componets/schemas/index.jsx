import * as yup from "yup";

// regex for password test
const passwordMatches = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email field is required."),
  username: yup.string().min(5).required("Username field is required."),
  password: yup
    .string()
    .min(5)
    .matches(passwordMatches, {
      message: "Password must contain letter, special characters and numbers",
    })
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .min(5)
    .oneOf([yup.ref("password"), null], { message: "Passwords don't match." })
    .required("Confirm password is required."),
});