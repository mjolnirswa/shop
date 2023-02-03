import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addItem } from '../../store/slices/itemSlice';
import axios from 'axios';
import './item-page.css';

interface Item {
    id: number;
    name: string;
    img: string;
    price: string;
}

const ItemPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const [data, setData] = useState<Item>();
    const [size, setSize] = useState('');
    const [count, setCount] = useState(0);
    const [ok, setOk] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios<Item>({
            method: 'get',
            url: `http://localhost:3001/items/${id}`
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    const handleAddItem = (data: Item) => {
        dispatch(addItem({
            id: data.id,
            name: data.name,
            img: data.img,
            price: data.price,
            count
        }));
        setOk(true);
    }

    if (typeof(data)==="undefined") {
        return (
            <>
                <h2>Ошибка</h2>
            </>
        );
    }else {
        return (
            <>
                <div className="brand_header">
                    <h1 className='brand_tittle'>{data.name}</h1>
                    <div className="brand_header_descr">
                        <p className='brand_mane'>Главная</p>
                        <div className='bar'></div>
                        <p className='brand_mane'>Магазин</p>
                        <div className='bar'></div>
                        <p className='brand_not-mane'>{data.name}</p>
                    </div>
                </div>

                <section className='item'>
                    <Link to="/shop">
                        <FaChevronLeft size={35} color="black"/>
                    </Link>
                    <img src={data.img} className="item_img"></img>

                    <div className='item_inf'>
                        <h2 className='item_price'>${data.price}</h2>

                        <h3 className='item_size-tittle'>Выберите размер:</h3>
                        <div className='item_size-buttons'>
                            <button 
                                className={size==='S' ? 'item_size-button__active' : 'item_size-button'} 
                                type='button'
                                onClick={() => setSize('S')}
                            >S</button>
                            <button 
                                className={size==='M' ? 'item_size-button__active' : 'item_size-button'} 
                                type='button'
                                onClick={() => setSize('M')}
                            >M</button>
                            <button 
                                className={size==='L' ? 'item_size-button__active' : 'item_size-button'} 
                                type='button'
                                onClick={() => setSize('L')}
                            >L</button>
                            <button 
                                className={size==='XL' ? 'item_size-button__active' : 'item_size-button'} 
                                type='button'
                                onClick={() => setSize('XL')}
                            >XL</button>
                            <button 
                                className={size==='XXL' ? 'item_size-button__active' : 'item_size-button'} 
                                type='button'
                                onClick={() => setSize('XXL')}
                            >XXL</button>
                        </div>

                        <div className='item_order'>
                            <input placeholder='0' className='item_order-input' value={count} onChange={(e) => setCount(+(e.target.value))}></input>
                            <button type='submit' className='item_order-button' onClick={() => handleAddItem(data)}>Добавить в корзину</button>
                        </div>

                        {ok && <div>Товар добавлен в корзину</div>}
                    </div>
                </section>
            </>
        );
    }
};

export default ItemPage;