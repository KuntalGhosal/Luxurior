import React  from 'react';
 import { Formik } from 'formik';



 const Login = () => {

  

   return(
  
  <>
   <div className="total-login-from">
     <h2>Login to Luxurior</h2>
     <Formik
       initialValues={{ email: '', password: '',phonenumber:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <div className="inputbox">
             <p>enter your email address</p>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder="enter your email address"
           />
           {errors.email && touched.email && errors.email}
           <p className="whyp">OR</p>
           <div className="inputbox">
             <p>enter your mobile number</p>
           <input
             type="number"
             name="phonenumber"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phonenumber}
             placeholder="enter your mobile number"
           />
           </div>
           </div>
           <div className="inputbox">
             <p>enter your password</p>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder="enter your password"
           />
           {errors.password && touched.password && errors.password}
           </div>
           <div className="button">
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </div>
         </form>
       )}
     </Formik>
   </div>
  
  </>
   )
 };
 
 export default Login;