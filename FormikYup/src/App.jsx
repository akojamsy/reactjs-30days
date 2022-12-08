import { useState } from "react";
import { useFormik } from "formik";
import "./App.css";
import { basicSchema } from "./componets/schemas";

function App() {
  const [count, setCount] = useState(0);

  const onSubmit = async (values, actions) => {
    console.log("it worked");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const { email, password, username, confirmPassword } = values;

  return (
    <div className='App'>
      <header className='fs-2 d-flex justify-content-center'>
        This is me learning how to use Formik and Yup together in a project.
      </header>

      <form
        onSubmit={handleSubmit}
        className='d-grid gap-3 p-3 w-50 mt-5 mx-auto shadow'
      >
        <input
          className={`form-control ${
            errors?.username && touched.username ? "is-invalid" : ""
          }`}
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username && (
          <span className='invalid-feedback'>{errors.username}</span>
        )}
        <input
          className={`form-control ${
            errors.email && touched.email ? "is-invalid" : ""
          }`}
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          className={`form-control ${
            errors.password && touched.password ? "is-invalid" : ""
          }`}
          type='password'
          value={password}
          id='password'
          placeholder='Password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          className={`form-control ${
            errors.confirmPassword && touched.confirmPassword
              ? "is-invalid"
              : ""
          }`}
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          placeholder='Comfirm Password'
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type='submit'
          disabled={isSubmitting ? true : ""}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
