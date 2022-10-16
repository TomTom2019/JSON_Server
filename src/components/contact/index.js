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
  		.required('firstname is required')

  	})
  })



	return(
		<>
          contact
		</>
		)
}




export default Contact;