import { useNavigate } from 'react-router-dom';
import './Busket.css';
import { СreateItemsList } from '../Cards/cards';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { removeAllItem } from '../../store/slices/itemSlice';
import { useState } from 'react';

const Busket: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.item);

    const [error, setError] = useState(false);

    const finalPrice = items.reduce((sum, current) => sum + (+current.price * current.count), 0);

    const handleOrder = () => {
        if( finalPrice === 0 ){
            setError(true)
        }else{
            navigate('/order')
            dispatch(removeAllItem()) 
        }
    }

    return (
        <>
            <div className="brand_header">
                <h1 className='brand_tittle'>Корзина</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Главная</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>Корзина</p>
                </div>
            </div>

            <section className='busket'>
                <div className='busket_tittles'>
                    <h4 className='busket_tittle'>Товар</h4>
                    <h4 className='busket_tittle price'>Цена</h4>
                    <h4 className='busket_tittle'>Количество</h4>
                    <h4 className='busket_tittle'>Всего</h4>
                </div>
                <div className="divider"></div>

                <СreateItemsList />

                <button className='busket_button-delete' onClick={() => dispatch(removeAllItem())}>Обновить корзину</button>

                <div className='busket_result'>
                    <div className='result'>
                        <p>Итог: ${finalPrice}</p>
                    </div>
                    
                    <button className='busket_button-order' type='button' onClick={() => handleOrder()}>Оформить заказ</button>
                    
                </div>

                {error && <div>Сначала наполните корзину</div>}
            </section>
        </>
    );
}

export default Busket;