import { Link } from 'react-router-dom';

import './successOrder.css';

const SuccessOrder: React.FC = () => {
    return(<>
                <div className="brand_header">
                    <h1 className='brand_tittle'>Заказ получен</h1>
                    <div className="brand_header_descr">
                        <p className='brand_mane'>Главная</p>
                        <div className='bar'></div>
                        <p className='brand_mane'>Оформление заказа</p>
                        <div className='bar'></div>
                        <p className='brand_not-mane'>Заказ получен</p>
                    </div>
                </div>

                <section className='success'>
                    <div className="success_text-tittle">Заказ успешно оформлен</div>
                    <div className="success_text-descr">Мы свяжемся c вами в ближайшее время!</div>
                    <Link to='/'>
                        <button className='success_button' type='button'>Перейти на главную</button>
                    </Link>
                </section>
            </>)
}

export default SuccessOrder;