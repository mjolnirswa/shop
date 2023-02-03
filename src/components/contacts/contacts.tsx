import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import './contacts.css';

const Contacts: React.FC = () => {
    const [ok, setOk] = useState('');

    interface MyFormValues {
        firstName: string;
        email: string;
        phone: string;
    }

    const initialValues: MyFormValues = { firstName: '', email:'', phone: '' };

    function validateEmail(value: any) {
        let error;
        if (!value) {
          error = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Неправильно введен email';
        }
        return error;
    };
      
    function validateUsername(value: any) {
        let error;
        if (!value) {
          error = 'Введите ваше имя';
        }else if (!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i.test(value)) {
            error = 'Неправильно введено имя';
        }
        return error;
    };

    function validatePhone(value: any) {
        let error;
        if (!value) {
            error = 'Введите номер телефона'
        } else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value)) {
            error = 'Неправильно введен номер телефона'
        }
        return error;
    };

    return(<>
            <div className="brand_header">
                <h1 className='brand_tittle'>Контакты</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Главная</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>Контакты</p>
                </div>
            </div>

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A52fe27795f2ead7808c300cbaa0b4b4a4e59c70b1728bc5e21ff34ddd163fa2b&amp;source=constructor" width="1109" height="476"></iframe>
            
            
            <section className='contacts'>
                <div className="contacts_block">
                    <div className="contacts_block-tittle">Телефон</div>
                    <div className="contacts_block-inf">+7 (495) 823-54-12</div>
                </div>

                <div className="contacts_block">
                    <div className="contacts_block-tittle">E-mail</div>
                    <div className="contacts_block-inf">info@sitename.com</div>
                </div>

                <div className="contacts_block">
                    <div className="contacts_block-tittle">Адрес</div>
                    <div className="contacts_block-inf">г. Москва, 3-я улица Строителей, 25</div>
                </div>
            </section>

            <section className='contacts_form'>
                <h3 className='contacts_form-tittle'>Оставьте данные для связи c нами</h3>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    setOk('ok');
                    }}
                >
                    {({ errors, touched}) => (
                        <Form>
                            <div className='forms'>
                            <Field name="firstName" id="firstName" validate={validateUsername} placeholder='Имя' className='form'/>
                            {errors.firstName && touched.firstName && <div className='form_error'>{errors.firstName}</div>}

                            <Field name="email" id="email" validate={validateEmail} placeholder='email' className='form' />
                            {errors.email && touched.email && <div className='form_error'>{errors.email}</div>}
                            
                            <Field name="phone" id="phone" validate={validatePhone} placeholder='Телефон' className='form' />
                            {errors.phone && touched.phone && <div className='form_error'>{errors.phone}</div>}

                            <button type="submit" className='form_button'>Отправить</button>
                            
                            {ok && <div className='form_success'><p>Сообщение успешно отправлено</p></div>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </section>
        </>
            );      
}

export default Contacts;