import { Link } from 'react-router-dom';
import Carousel from '../Carousel/carousel';
import './homepage.css';
import Elem1 from './elem-1.jpg';
import Elem2 from './elem-2.jpg';
import Elem3 from './elem-3.jpg';
import Quality1 from './quality-1.svg';
import Quality2 from './quality-2.svg';
import Quality3 from './quality-3.svg';
import Team from './team.jpg';
import { GetThreeCards } from '../Cards/cards';

const Homepage: React.FC = () => {
    return (<>
               <section className='header'>
                    <div className="header_inf">
                        <h1 className='header_inf-tittle'>Новые поступления<br />
                            в этом сезоне</h1>
                        <p className='header_inf-descr'>
                        Утонченные сочетания и бархатные<br />
                         оттенки - вот то, что вы искали в этом<br /> 
                         сезоне. Время исследовать.</p>
                         <Link to="shop">
                            <button type='button'>Открыть магазин</button>
                         </Link>
                         <div className="header_buttons">
                            {/* <div className="block active-block"></div>
                            <div className="block"></div>
                            <div className="block"></div> */}
                         </div>
                    </div>
                    
                    <div className="header-carousel">
                        <Carousel>
                            <img src={Elem1}></img>
                            <img src={Elem2}></img>
                            <img src={Elem3}></img>
                        </Carousel>
                    </div>
                </section> 

                <section className='collection'>
                    <h2 className='collection_tittle'>Новая коллеция</h2>

                    <div className='collection_item'>
                        <GetThreeCards />
                    </div>

                    <Link to='shop'>
                        <button className='collection_button'>Открыть магазин</button>
                    </Link> 
                </section>

                <section className='important'>
                    <h2 className='important_tittle'>Что для нас важно</h2>
                    <div className='important_elements'>
                        <div className="important_element">
                            <img className="important_element-img" src={Quality1}></img>
                            <div className="important_element-tittle">Качество</div>
                            <div className="important_element-text">Наши профессионалы работают на<br/>
                            лучшем оборудовании для пошива<br/>
                            одежды беспрецедентного<br />
                            качества</div>
                        </div>

                        <div className="important_element">
                            <img className="important_element-img" src={Quality2}></img>
                            <div className="important_element-tittle">Скорость</div>
                            <div className="important_element-text">Благодаря отлаженной системе в<br />
                            Womazing мы можем отшивать до<br />
                            20-ти единиц продукции в наших<br />
                            собственных цехах</div>
                        </div>

                        <div className="important_element">
                            <img className="important_element-img" src={Quality3}></img>
                            <div className="important_element-tittle">Ответственность</div>
                            <div className="important_element-text">Мы заботимся o людях и планете.<br />
                            Безотходное производство и<br />
                            комфортные условия труда - все<br />
                            это Womazing</div>
                        </div>
                    </div>
                </section>

                <section className='team'>
                    <h2 className='team-tittle'>Команда мечты Womazing</h2>
                    <div className="team_content">
                        <img src={Team} alt="team" className="team_img" />
                        <div className="team_text">
                            <h3 className='team_text-tittle'>Для каждой</h3>

                            <p>
                            Каждая девушка уникальна.<br /> 
                            Однако, мы схожи в<br /> 
                            миллионе мелочей.<br />
                            <br /><br />
                            Womazing ищет эти мелочи и<br />
                            создает прекрасные вещи,<br />
                            которые выгодно<br/>
                            подчеркивают достоинства<br />
                            каждой девушки.
                            </p>

                            <Link to="brand" className='active'>Подробнее о бренде</Link>
                        </div>
                    </div>
                </section>
            </>);
}

export default Homepage;