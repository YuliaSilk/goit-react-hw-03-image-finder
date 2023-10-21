import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from 'yup';
// import { IconName } from "react-icons/ci";

const searchSchema = Yup.object().shape({
query: Yup.string().required('This field is reduired').trim().lowercase(),
});

export const SearchBar = (onSubmitForm) => {
     return (
        <div>
           <Formik
            initialValues={{ 
                query: '',}}
            validationSchema={searchSchema}
            onSubmit={(values, actions) => {
                onSubmitForm(values.query)
                 actions.resetForm(); 
            }}
          >
              <Form>
        
        <label >
        <Field
        name="query"
        // class="input"
        type="text"
        autoComplete="off"
        autFocus
        placeholder="Search images and photos"
        />
        <ErrorMessage component="div" name="query"/>
        <button type="submit">search-icon</button>
        </label>
      </Form>
            
          </Formik>
       
        </div>
      );
} 

  