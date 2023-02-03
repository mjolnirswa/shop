import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid ,
                    token: user.refreshToken,
                }))
                navigate(`/user/${user.uid}`);
            })
            .catch(() => setError(true));
    };

    interface MyFormValues {
        email: string;
        password: string;
    }

    const initialValues: MyFormValues = { email:'', password: '' };

    function validateEmail(value: any) {
        let error;
        if (!value) {
          error = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Неправильно введен email';
        }
        return error;
    };

    function validatePassword(value: any) {
        let error;
        if (!value) {
          error = 'Введите пароль';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Неправильно введен пароль';
        }
        return error;
    }

    return (
        <>
            <div className="brand_header">
                <h1 className='brand_tittle'>Авторизация</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Личный кабинет</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>Авторизация</p>
                </div>
            </div>

            <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    }}
                >
                    {({ errors, touched}) => (
                        <Form>
                            <div className='forms'>

                            <Field 
                            name="email" 
                            id="email" 
                            validate={validateEmail} 
                            placeholder='email' 
                            className='form' 
                            value={email} 
                            onChange={(e: any) => setEmail((e.target.value).toString())}/>
                            {errors.email && touched.email && <div className='form_error'>{errors.email}</div>}
                            
                            <Field 
                            name="password" 
                            id="password" 
                            validate={validatePassword} 
                            placeholder='Пароль' 
                            className='form' 
                            value={password} 
                            onChange={(e: any) => setPassword((e.target.value).toString())}/>
                            {errors.password && touched.password && <div className='form_error'>{errors.password}</div>}
                            <button type="submit" className='form_button' onClick={handleLogin}>Войти</button>
                            
                            <p>или пройти <Link to="/register">Регистрацию</Link></p>
                            </div>

                            {error && <div><h3>Неправильно введен логин или пароль</h3></div>}
                        </Form>
                    )}
                </Formik>
        </>
    );
}

export default Login;