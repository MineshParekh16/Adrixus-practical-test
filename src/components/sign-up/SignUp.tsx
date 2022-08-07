import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../../services/auth.service";
import { Button } from "primereact/button";
import PasswordShowHide from "./PasswordShowHide";

type Props = {};

type State = {
  username: string,
  email: string,
  password: string,
  successful: boolean,
  message: string,
};

const required = (value: any) => (value ? undefined : "Required");

export default class Register extends Component<Props, State> {
  toast: any;
  constructor(props: Props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "The username must be between 3 and 20 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        )
        .required("This field is required!"),
      email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
      password: Yup.string()
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  }

  handleRegister(formValue: { username: string; email: string; password: string }) {
    const { username, email, password } = formValue;

    this.setState({
      message: "",
      successful: false
    });

    AuthService.register(
      username,
      email,
      password
    ).then(
      response => {
        this.setState({
          message: response.data.id,
          successful: true
        });
        if(window.confirm("Are you really want to Sign Up ?")) {
          window.location.replace("/");
        }else{
          window.location.replace("/sign-up");
        }
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    const { successful} = this.state;

    const initialValues = {
      username: "",
      email: "",
      password: "",
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleRegister}
          >
            <Form>
              {!successful && (
                <div className="main-form">
                  <div className="title">Sign-Up</div>
                    <div className="subtitle">Sign up to your account</div>
                  <div className="form-group">
                    <label className="new-label" htmlFor="username"> Username </label>
                    <div className="messageone">
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="alert alert-danger-new"
                      />
                      <Field name="username" type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="new-label" htmlFor="email"> Email </label>
                    <div className="messageone">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger-new"
                      />
                      <Field name="email" type="email" className='form-control' />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="new-label" htmlFor="password"> Password </label>
                    <div className="messageone">
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-danger-new"
                      />
                      <Field
                        name="password"
                        className="form-control"
                        validate={required}
                        component={PasswordShowHide}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <Button
                      label="Sign Up"
                      icon="pi pi-check"
                      className="p-button-success"
                      type="submit"
                    />
                  </div>
                </div>
              )}
              {/* {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger-new"
                    }
                    role="alert"
                  >
                  </div>
                </div>
              )} */}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}