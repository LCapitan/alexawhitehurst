import React, { Component } from 'react';
import firebase from '../../utils/firebase.js';
import { Formik, withFormik } from 'formik';
import * as Yup from 'yup';

import './styles.scss';

const db = firebase.database();

const FormSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Required'),
    name: Yup.string()
        .min(1, 'Please enter your full name.')
        .required('Required'),
    message: Yup.string()
        .min(1, 'Please let us know what questions or comments you have.')
        .required('Required'),
});

const initialValues = {
    email: '',
    name: '',
    message: ''
}

// const testValues = {
//   email: 'alex.e.whitehurst@gmail.com',
//   name: 'Alexa Whitehurst',
//   subject: 'Testing',
//   message: 'Just testing this contact form.'
// }

export default class Form extends Component {
    state = {
        isSending: false,
        alert: {
            type: '',
            message: ''
        }
    }

    render() {
        const { alert, isSending } = this.state;

        return (
            <div className="FormContact">
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    validationSchema={FormSchema}
                    onSubmit={(values, props) => {
                        const dateNow = Date.now();

                        this.setState({isSending: true})

                        db.ref('messages/' + dateNow).set(values).then((res) => {
                            this.setState({
                                isSending: false,
                                alert: {
                                    type: 'success',
                                    message: 'Your message was successfully sent.'
                                }
                            }, () => {
                                props.resetForm(initialValues)
                            })
                        }).catch((err) => {
                            this.setState({
                                isSending: false,
                                alert: {
                                    type: 'error',
                                    message: 'There was an error sending your message, please try again later.'
                                }
                            })
                        });
                    }}
                >

                    {(props) => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    {alert.type === 'success' ? <span className="form_status form_status--success"><i className="fas fa-check-circle"></i>{alert.message}</span> : null}
                                    {alert.type === 'error' ? <span className="form_status form_status--invalid"><i className="fas fa-exclamation-circle"></i>{alert.message}</span> : null}
                                </div>

                                <div className="TwoCol">
                                    <div className="FormItem">
                                        <label htmlFor="name"><span className="sr-only">Please enter your full</span>Name<span
                                            className="LabelIcon"></span><span
                                            className="error-message">{errors.name}</span></label>
                                        <input className={errors.name && touched.name ? 'error' : ''} id="name"
                                               name="name" type="text" placeholder="Full Name" value={values.name}
                                               onChange={handleChange} onBlur={handleBlur}/>
                                    </div>

                                    <div className="FormItem">
                                        <label htmlFor="email"><span
                                            className="sr-only">Please enter your</span>Email<span
                                            className="sr-only">address</span><span className="LabelIcon"></span><span
                                            className="error-message">{errors.email}</span></label>
                                        <input className={errors.email && touched.email ? 'error' : ''} id="email"
                                               name="email" type="email" placeholder="example@example.com"
                                               value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                </div>

                                <div className="FormItem">
                                    <label htmlFor="message"><span className="sr-only">Please enter your</span>Message<span
                                        className="LabelIcon"></span><span
                                        className="error-message">{errors.message}</span></label>
                                    <textarea className={errors.message && touched.message ? 'error' : ''}
                                              id="message" name="message" type="text"
                                              placeholder="Type your message here" value={values.message}
                                              onChange={handleChange} onBlur={handleBlur}></textarea>
                                </div>

                                <button disabled={isSubmitting} id="submit" name="submit" type="submit"
                                        value="send" className="Button">send<span></span></button>
                            </form>
                        )
                    }}
                </Formik>
            </div>
        );
    }
}
