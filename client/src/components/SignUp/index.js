import React from 'react';
import {Formik, Form, Field} from 'formik'
import {format} from 'date-fns';

const SignUp = (props) => {

    const initualValues = {
        firstName: '',
        lastName: '',
        email:'',
        passwordHash: '',
        birthday: format (new Date(), 'yyyy-MM-dd')
    }

    const onSubmit = (values, actions) => {
       props.sendData(values);
    }

   return(
    <div>
        <h2>SignUp</h2>
        <Formik initialValues={initualValues} onSubmit={onSubmit}>
            {(props) =>(
                <Form>
                    <Field name="firstName" placeholder = "Type your name"/>
                    <Field name="lastName" placeholder = "Type your last name"/>
                    <Field name="email" placeholder = "Type your email"/>
                    <Field name="passwordHash" placeholder = "Type your password"/>
                    <Field name="birthday" placeholder = "Type your birthday" type = "date"/>
                    <button type="submit">Send</button>
                </Form>
            )}
        </Formik>
    </div>
   )
}

export default SignUp