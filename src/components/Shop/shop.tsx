import './shop.css';
import '../Cards/cards.css';
import { GetCardsShopList } from '../Cards/cards';

const Shop: React.FC = () => {
    return(
        <>
            <div className="brand_header">
                <h1 className='brand_tittle'>Магазин</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Главная</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>Магазин</p>
                </div>
            </div>

            {/* <section className='shop_buttons'>
                <button className='shop_button shop_button__active'>Bce</button>
                <button className='shop_button'>Пальто</button>
                <button className='shop_button'>Свитшоты</button>
                <button className='shop_button'>Кардиганы</button>
                <button className='shop_button'>Толстовки</button>
            </section> */}

            <section className='shop_items'>
                <GetCardsShopList />
            </section>
        </>
    );
};

export default Shop;