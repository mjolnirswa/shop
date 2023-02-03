import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import './user.css';

const User: React.FC = () => {
    const dispatch = useAppDispatch();

    const { isAuth, email } = useAuth(); 

    return isAuth ? (
        <>
            <div className="brand_header">
                <h1 className='brand_tittle'>Личный кабинет</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Личный кабинет</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>Информация о пользователе</p>
                </div>
            </div>

            <p className='user_email'>Ваш email: {email}</p>

            <button onClick={() => dispatch(removeUser())} className="exit_button" type='button'>Выйти из аккаунта</button>
        </>
    ) : (
        <>
            <div className="brand_header">
                <h1 className='brand_tittle'>Пожалуйста,пройдите авторизацию</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Авторизация</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>Вход или регистрация</p>
                </div>
            </div>

            <div className='auth_buttons'>
                <Link to="/login">
                    <button type="button" className='auth-button'>Войти</button>
                </Link>

                <Link to="/register">
                    <button type="button" className='auth-button'>Зарегистрироваться</button>
                </Link>
            </div>
        </>
    );
}

export default User;