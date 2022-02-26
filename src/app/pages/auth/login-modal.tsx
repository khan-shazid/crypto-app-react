import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Formik } from 'formik';

import styles from './login-modal.module.css';

export default function LoginModal({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <div id="myModal" className={`${styles.modal} ${isOpen ? styles.show : {}}`}>
        <div className={styles.modalContent}>
            <span className={styles.close}>&times;</span>
            
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={(values: {email: string, password: string}) => {
                const errors: {email?: string, password?: string} = {};
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
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>

        </div>
    </div>
  )
}


// <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //   <Dialog.Overlay />

    //   <Dialog.Title>Deactivate account</Dialog.Title>
    //   <Dialog.Description>
    //     This will permanently deactivate your account
    //   </Dialog.Description>

    //   <p>
    //     Are you sure you want to deactivate your account? All of your data will
    //     be permanently removed. This action cannot be undone.
    //   </p>

    //   <button onClick={() => setIsOpen(false)}>Deactivate</button>
    //   <button onClick={() => setIsOpen(false)}>Cancel</button>
    // </Dialog>