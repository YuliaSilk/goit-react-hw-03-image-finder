import { Formik } from "formik";
import * as Yup from 'yup';
import { ErrMsg, SearchBarStyle, SearchForm, SearchFormBtn, SearchInput } from "./Searchbar.Styled";
import { CiSearch } from "react-icons/ci";

const searchSchema = Yup.object().shape({
query: Yup.string().trim().lowercase().required('This field is reduired'),
});

export const SearchBar = ({ onSubmitForm }) => {
     return (
        <SearchBarStyle>
           <Formik
            initialValues={{ 
                query: '',}}
            validationSchema={searchSchema}
            onSubmit={(values, actions) => {
                onSubmitForm(values.query)
                 actions.resetForm(); 
            }}
          >
              <SearchForm>
        
        <label >
        <SearchInput
        name="query"
        // class="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        />
        <ErrMsg component="div" name="query" />
        </label>
      
        <SearchFormBtn type="submit">
        <CiSearch ></CiSearch>
        </SearchFormBtn>
     
      </SearchForm>
            
          </Formik>
       
        </SearchBarStyle>
      );
} 

  