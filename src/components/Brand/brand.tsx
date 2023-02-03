import './brand.css';
import Girl1 from './girl1.jpg';
import Girl2 from './girl2.jpg';
import { Link } from 'react-router-dom';

const Brand: React.FC = () => {
    return (
        <>
            <div className="brand_header">
                <h1 className='brand_tittle'>O бренде</h1>
                <div className="brand_header_descr">
                    <p className='brand_mane'>Главная</p>
                    <div className='bar'></div>
                    <p className='brand_not-mane'>O бренде</p>
                </div>
            </div>

            <section className='first'>
                <div className="first_elems">
                    <img src={Girl1} alt='girl1' className='first_img'/>
                    <div className="first_text">
                        <div className="first_text-tittle">Идея и женщина</div>
                        <p>
                        Womazing была основана в 2010-ом и стала одной из самых<br />
                        успешных компаний нашей страны. Как и многие итальянские<br />
                        фирмы, Womazing остаётся семейной компанией, хотя ни один<br />
                        из членов семьи не является модельером.
                        <br /><br />
                        Мы действуем по успешной формуле, прибегая к услугам<br />
                        известных модельеров для создания своих коллекций. Этот<br />
                        метод был описан критиком моды Колином Макдауэллом как<br />
                        форма дизайнерского co-творчества, характерная для ряда<br />
                        итальянских prêt-a-porter компаний. 
                        </p>
                    </div>
                </div>
            </section>

            <section className='second'>
                <div className="first_elems">
                    <div className="first_text second_text">
                        <div className="first_text-tittle">Магия в деталях</div>
                        <p>
                        Womazing была основана в 2010-ом и стала одной из самых<br />
                        успешных компаний нашей страны. Как и многие итальянские<br />
                        фирмы, Womazing остаётся семейной компанией, хотя ни один<br />
                        из членов семьи не является модельером.
                        <br /><br />
                        Мы действуем по успешной формуле, прибегая к услугам<br />
                        известных модельеров для создания своих коллекций. Этот<br />
                        метод был описан критиком моды Колином Макдауэллом как<br />
                        форма дизайнерского co-творчества, характерная для ряда<br />
                        итальянских prêt-a-porter компаний. 
                        </p>
                    </div>
                    <img src={Girl2} alt='girl2' className='second_img'/>
                </div>
            </section>

            <Link to="/shop">
                <button className='brand_button'>Перейти в магазин</button>
            </Link>
        </>
    )
}

export default Brand;