import React from "react";
import { useFormik } from "formik";
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log('form values',values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required field";
      }
      if (!values.email) {
        errors.email = "Required field";
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Invalid email address";
      }
      if (!values.channel) {
        errors.channel = "Required field";
      }
      return errors;
    }
  });
  console.log('Visited fields', formik.touched);
  return (
    <form onSubmit= {formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
      </div>
      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? (<div className="error">{formik.errors.channel}</div>) : null}
      </div>
      <button type ='submit'>Submit</button>
    </form>
  );
};

export default YoutubeForm;
