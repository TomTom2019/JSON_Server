import { useFormik } from "formik";
import * as Yup from 'yup'
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";


const Contact = () =>{
  const dispatch = useDispatch();
  const formik = useFormik({
  	initialValues:{email:'',firstname:'',lastname:'',message:''},
  	validationSchema: Yup.object({
  		email: Yup.string()
  		.required('The email is required')
  		.email('The email is invalied'),
  		firstname: Yup.string()
  		.required('firstname is required'),
  		lastname:Yup.string()
  		.required('last name is required'),
  			message:Yup.string()
  		.required('message is required')
  		.max(500,'you message is too long')

  	}),
  	onSubmit:(values,{resetForm})=>{
       ////
       console.log(values)
  	}
  })



	return(
		<>
		 <h1>Contact Us</h1>
		 <form className="mt-3" onSubmit={formik.handleSubmit} >
		 	  <div className="form-group">
		 	  	  <label htmlFor="email">Email adress</label>
		 	  	  <input
                    type='email'
                    className="form-control"
                    name="email"
                    placeholder="email@gmail.com"
                    {...formik.getFieldProps('email')}
		 	  	  />
		 	  	  {formik.errors.email && formik.touched.email ?
                     <Alert variant="danger">
                     	{formik.errors.email}
                     </Alert>

		 	  	  	:null}
		 	  </div>
		 	   <div className="form-group mt-2">
		 	  	  <label htmlFor="firstname">First name</label>
		 	  	  <input
                    type='text'
                    className="form-control"
                    name="firstname"
                    placeholder="Enter your firstname"
                    {...formik.getFieldProps('firstname')}
		 	  	  />
		 	  	  {formik.errors.firstname && formik.touched.firstname ?
                     <Alert variant="danger">
                     	{formik.errors.firstname}
                     </Alert>

		 	  	  	:null}
		 	  </div>

		 	  <div className="form-group mt-2">
		 	  	  <label htmlFor="lastname">Last name</label>
		 	  	  <input
                    type='text'
                    className="form-control"
                    name="lastname"
                    placeholder="Enter your lastname"
                    {...formik.getFieldProps('lastname')}
		 	  	  />
		 	  	  {formik.errors.lastname && formik.touched.lastname ?
                     <Alert variant="danger">
                     	{formik.errors.lastname}
                     </Alert>

		 	  	  	:null}
		 	  </div>
		 </form>


          
		</>
		)
}




export default Contact;