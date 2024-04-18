import { Helmet } from "react-helmet-async";
import { Formik, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthServiceContext } from "../contexts/AuthContext";

interface LoginFormValues {
  email: string;
  password: string;
}

const FormikForm = () => {

  const {login} = useAuthServiceContext();
  const navigate = useNavigate();

  return (
    
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values: LoginFormValues) => {
        const errors: Partial<typeof values> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}

      onSubmit={async (values, { setSubmitting }) => {
        const { email, password } = values;
        const status = await login(email, password);
        if (status === 401 || status === 400) {
          console.log("Unauthorised");
          // TODO: Maybe this error handle could be better ? 
          throw new Error(`Network response was not ok (status ${status})`)
        } 
        else {

          console.log("ok...");
          navigate("/Profile");
        }
        setSubmitting(false);
      }}
    
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="form-error"
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="login-btn">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </Formik>
  );
};


const LoginForm = () => {
  return (
    <>
      <Helmet title="Login Page Ex" />
      <div id="login-page">
        <div className="login-container">
          <div className="card-left">
            <div className="login">Login</div>
            <div className="eula">
              By logging in you agree to the ridiculously long terms that you
              didn't bother to read
            </div>
          </div>

          <div className="card-right">
            <FormikForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
