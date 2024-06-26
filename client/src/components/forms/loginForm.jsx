import { useState } from "react";
import { useQueriesContext } from '../../utils/QueriesContext';
import auth from '../../utils/auth';
import RequiredField from './requiredField.jsx';
import './loginForm.module.css';

export default function LoginForm() {
  const { mutations, validateEmail, classNames } = useQueriesContext();

  const [form, setForm] = useState({
    email: { address: '', valid: true },
    password: ''
  });

  const [showRequired, setShowRequired] = useState({
    email: false,
    password: false
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'email' ? { address: value, valid: validateEmail(value) } : value
    });
    setShowRequired({
      ...showRequired,
      [name]: !value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email.address)) {
      setErrorMessage('Invalid email');
      return;
    } else if (!form.password) {
      setErrorMessage('Password is required');
      return;
    }

    try {
      const variables = {
        email: form.email.address,
        password: form.password
      };

      console.log('Submitting login with variables:', variables);

      const { data } = await mutations.loginUser({ variables });

      console.log('Received data:', data);

      setForm({
        email: { address: '', valid: true },
        password: ''
      });
      setShowRequired({
        email: false,
        password: false
      });
      setErrorMessage('');

      auth.login(data.login.token);
    } catch (error) {
      console.error('Error occurred during form submission:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <p className="email">Login</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <section className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <section className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <section className="mt-2.5">
              <input
                value={form.email.address}
                type="email"
                name="email"
                id="email"
                onMouseLeave={() => setShowRequired({ ...showRequired, email: !form.email.address })}
                onChange={handleInputChange}
                className={classNames(!form.email.valid && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
              />
              {!form.email.valid && <p className='text-red-700'>Invalid email</p>}
              {showRequired.email && !form.email.address && <RequiredField />}
            </section>
          </section>

          <section className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <section className="mt-2.5">
              <input
                value={form.password}
                type="password"
                name="password"
                id="password"
                onMouseLeave={() => setShowRequired({ ...showRequired, password: !form.password })}
                onChange={handleInputChange}
                className={classNames(showRequired.password && !form.password && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
              />
              {showRequired.password && !form.password && <RequiredField />}
            </section>
          </section>

          <section className="mt-10 sm:col-span-2 submit p-2">
            <button
              type="submit"
              className="rounded block p-3.5 text-center text-sm text-grey-900 font-semibold shadow-sm"
            >
              Login
            </button>
          </section>
        </section>
      </form>

      {errorMessage && (
        <section className="m-3">
          <p className="error-text">{errorMessage}</p>
        </section>
      )}
    </>
  );
}
