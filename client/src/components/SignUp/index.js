import React from 'react';
import{Formik, Form, Field} from 'formik'

const SignUp = () => {

    const initualValues = {
     firstName: '',
     lastName: '',
     email:'',
     password: '',
     birthday: new Date()
    }

    const onSubmit = (values, actionsd) => {
        console.log(values);
    }

    return(
        <div>
            <h2>SignUp</h2>
            <Formik initualValues = {initualValues} onSubmit={onSubmit}>
               {  (props) = (
                    <Form>
                        <Field name = "firstName" palceholder = "Type your name"/>
                        <Field name = "lastName" placeholder = "Type your lastName"/>
                        <Field name = "email" placeholder = "Type your email"/>
                        <Field name = "password" placeholder = "Type your password"/>
                        <Field name = "birthday" placeholder = "Type your birthday" type = "date"/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignUp;