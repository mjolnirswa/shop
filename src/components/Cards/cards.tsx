import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa' ;
import { IconContext } from "react-icons";
import './cards.css';
import { ListItem } from '../../store/slices/itemSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useItems } from '../../hooks/use-items';
import { VscChromeClose } from "react-icons/vsc"
import { removeItem } from '../../store/slices/itemSlice';

interface Item {
    id: number;
    name: string;
    img: string;
    price: string;
}


export const GetThreeCards: React.FC = () => {
    const [data, setData] = useState<Item[]>();

    const navigate = useNavigate();

    useEffect(() => {
        axios<Item[]>({
                method: 'get',
                url: 'http://localhost:3001/items?_start=0&_end=3'
            })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, []);

    const makeCards = (data: Item[] | undefined): JSX.Element[] | string => { //не выношу функцию, тк хук useNavigate(navigate) не может быть на верхнем уровне
        if(typeof(data) === "undefined"){
            const str: string = 'Error'
            return str;
        }

        if (data) {
            const result: JSX.Element[] = [];
            for(let i = 0; i < data.length; i++){
                const { id, name, img, price } = data[i];

                const card: JSX.Element = (
                    <div className='card' id={id.toString()} key={id}>
                        <div className='card_img-container'>
                            <IconContext.Provider value={{ color: "white", className: "img_overlay-arrow"  }}>
                                <img src={img} className="card_img" alt={name}/>
                                <div className='img_overlay' onClick={() => navigate(`/shop/${id}`)}>
                                    <FaChevronRight size={35} />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <h3 className='card_tittle'>{name}</h3>
                        <p className='card_price'>${price}</p>
                    </div>
                );
                result.push(card);
            };
            return result;
        };
        return '';
    };

    const cards: JSX.Element[] | string = makeCards(data);

    return (
        <>
            <div className='cards_flex-container'>
                {cards}
            </div>
        </>
    );
};

export const GetCardsShopList: React.FC = () => {
    const [data, setData] = useState<Item[]>();
    const [page, setPage] = useState<number>(1);
    
    const navigate = useNavigate();

    useEffect(() => {
        axios<Item[]>({
                method: 'get',
                url: `http://localhost:3001/items?_limit=9&_page=${page}`
            })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [page]);

    const makeCards = (data: Item[] | undefined): JSX.Element[] | string => { //не выношу функцию, тк хук useNavigate(navigate) не может быть на верхнем уровне
        if(typeof(data) === "undefined"){
            const str: string = 'Error'
            return str;
        }

        if (data) {
            const result: JSX.Element[] = [];
            for(let i = 0; i < data.length; i++){
                const { id, name, img, price } = data[i];

                const card: JSX.Element = (
                    <div className='card' id={id.toString()} key={id}>
                        <div className='card_img-container'>
                            <IconContext.Provider value={{ color: "white", className: "img_overlay-arrow"  }}>
                                <img src={img} className="card_img" alt={name}/>
                                <div className='img_overlay' onClick={() => navigate(`/shop/${id}`)}>
                                    <FaChevronRight size={35} />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <h3 className='card_tittle'>{name}</h3>
                        <p className='card_price'>${price}</p>
                    </div>
                );
                result.push(card);
            };
            return result;
        };
        return '';
    };

    const cards: JSX.Element[] | string = makeCards(data);

    return (<>
                <div className='cards_flex-container'>
                    {cards}
                </div>

                <div className='cards_buttons'>
                    <FaChevronLeft className="cards_arrow" opacity={page===1 ? 0 : 1} onClick={() => setPage(page - 1)}/>
                    <button 
                        className={page===1 ? 'cards_button cards_button__active' : 'cards_button'} 
                        type='button'
                        onClick={() => setPage(1)}
                    >1</button>
                    <button 
                        className={page===2 ? 'cards_button cards_button__active' : 'cards_button'} 
                        type='button'
                        onClick={() => setPage(2)}
                    >2</button>
                    <FaChevronRight className="cards_arrow" onClick={() => setPage(page + 1)}/>
                </div>
            </>);
};


export const СreateItemsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.item);

    const handleDelete = (id: number) => {
        dispatch(removeItem(id));
    }

    const makeItemsList = (items: ListItem[]) : JSX.Element[] => {
        const itemsList : JSX.Element[] = [];
        for (let i = 0; i < items.length; i++){
            const { name, price, count, img, id} = items[i];

            const item: JSX.Element = (
            <div className='item_container' id={id.toString()} key={id}>
                <img alt={name} src={img} className='item_busket-img'></img>

                <h3 className='item_name'>{name}</h3>

                <h3 className='item_basket-price'>${price}</h3>

                <h3 className='item_count'>{count.toString()}</h3>

                <h3 className='item_fullprice'>${(count * (+price)).toString()}</h3>

                <VscChromeClose className='item_delete' onClick={() => handleDelete(id)} size={30}/>
            </div>
            );

            itemsList.push(item);
        };

        return itemsList;
    };

    const itemList = makeItemsList(items);

    return useItems() ? (
        <div>
            {itemList}
        </div>
    ) : (
        <div className='busket_empty-tittle'>Товаров в корзине пока нет</div>
    );
}



