import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const NewYouTubeForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required field!!!"),
    email: Yup.string()
      .email("Invalid email address!!!")
      .required("Required field!!!"),
    channel: Yup.string().required("Required field!!!"),
  });
  const onSubmit = (values) => {
    console.log("form values", values);
  };
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form >
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        <ErrorMessage name = 'name' />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name = 'email'/>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            name="channel"
            id="channel"
            placeholder="Enter your channel"
          />
          <ErrorMessage name = 'channel'/>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYouTubeForm;
