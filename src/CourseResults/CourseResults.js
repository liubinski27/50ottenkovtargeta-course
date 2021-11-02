import './style.scss';
import results__bg from '../img/resultsBG.svg';
import diana from '../img/Diana.svg';
import angelina from '../img/Angelina.svg';
import elizaveta from '../img/Elizaveta.svg';
import vladislav from '../img/Vladislav.svg';
import ekaterina from '../img/Ekaterina.svg';

function CourseResults() {
    return (
        <div className="courseResults" style={{ backgroundImage: `url(${results__bg})` }}>
            <h2 className="title">Результаты учеников</h2>
            <div className="boxes">




                <div className="box">
                    <div className="box__title">
                        <div className="photo" style={{ backgroundImage: `url(${diana})` }}></div>
                        <div className="info">
                            <div className="name">
                                <span><p>Диана</p></span>
                            </div>
                            <div className="contacts">
                                <p><a href="https://www.instagram.com/thediannka/?hl=ru" target="_blank">@thediannka</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box__content">
                            <p><span>Точка А:</span></p>
                            <p><span>Доход:</span> 250-300$</p>
                            <p><span>Род деятельности:</span> SMM-специалист в агентстве. Вела 5-7 клиентов на SMM ежемесячно.</p>
                            <p><span>Навыки:</span> не было понимания таргета, не знала, как это работает.</p>
                        </div>
                        <div className="box__content">
                            <p><span>Точка Б:</span></p>
                            <p><span>Доход:</span> 900+$/месяц</p>
                            <p><span>Род деятельности:</span> веду 7 клиентов на таргет ежемесячно + делегирую SMM своей собственной команде.</p>
                            <p><span>Лучший кейс:</span> заявки по 0,2$ для компании по производству мебели.</p>
                        </div>
                    </div>
                    <div className="interview">
                        <a className="button" href="https://www.instagram.com/p/CK6svU5BUB1/" target="_blank">
                            <p>Интервью</p>
                        </a>
                    </div>
                </div>




                <div className="box">
                    <div className="box__title">
                        <div className="photo" style={{ backgroundImage: `url(${angelina})` }}></div>
                        <div className="info">
                            <div className="name">
                                <span><p>Ангелина</p></span>
                            </div>
                            <div className="contacts">
                                <p><a href="https://www.instagram.com/one.gelina/?hl=ru" target="_blank">@one_gelina</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box__content">
                            <p><span>Точка А:</span></p>
                            <p><span>Доход:</span> 0</p>
                            <p><span>Род деятельности:</span> официант в казино.</p>
                            <p><span>Навыки:</span> о таргете не знала почти ничего (однажды запускала рекламу из фейсбука, но это была чистая рулетка, т к теории не знала никакой), клиентов 0.</p>
                        </div>
                        <div className="box__content">
                            <p><span>Точка Б:</span></p>
                            <p><span>Доход:</span> 550$</p>
                            <p><span>Из достижений 😂:</span> клики по 2 цента, ROI 1023%, перевыполнила план клиентки по продажам вдвое.</p>
                            <p><span>Клиентов:</span> 3</p>
                        </div>
                    </div>
                    <div className="interview">
                        <a className="button" href="https://www.instagram.com/p/CPEGI9OBIZr/" target="_blank">
                            <p>Интервью</p>
                        </a>
                    </div>
                </div>




                <div className="box">
                    <div className="box__title">
                        <div className="photo" style={{ backgroundImage: `url(${vladislav})` }}></div>
                        <div className="info">
                            <div className="name">
                                <span><p>Владислав</p></span>
                            </div>
                            <div className="contacts">
                                <p><a href="https://www.instagram.com/vladshokun/?hl=ru" target="_blank">@vladshokun</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box__content">
                            <p><span>Точка А:</span></p>
                            <p><span>Доход:</span> 0</p>
                            <p><span>Навыки:</span> знал, что кнопка продвигать- это, когда публикация запустится в рекламу.</p>
                            <p><span>Уверенность в себе:</span> только если по жизни, не связанная с работой на фрилансе.</p>
                            <p><span>Клиентов:</span> 0</p>
                        </div>
                        <div className="box__content">
                            <p><span>Точка Б:</span></p>
                            <p><span>Доход:</span> 610$ через 2 недели после окончания курса</p>
                            <p><span>Навыки:</span> четкое понимание, что такое маркетинг, как работает реклама. Выстраивание рекламной стратегии, воронки продаж.</p>
                            <p><span>Клиентов:</span> 3</p>
                        </div>
                    </div>
                    <div className="interview">
                        <a className="button" href="https://www.instagram.com/p/CPQoDYuhcf6/" target="_blank">
                            <p>Интервью</p>
                        </a>
                    </div>
                </div>




                <div className="box">
                    <div className="box__title">
                        <div className="photo" style={{ backgroundImage: `url(${elizaveta})` }}></div>
                        <div className="info">
                            <div className="name">
                                <span><p>Елизавета</p></span>
                            </div>
                            <div className="contacts">
                                <p><a href="https://www.instagram.com/elizab_ha/?hl=ru" target="_blank">@elizab_ha</a> <a href="https://www.instagram.com/lizzi.target/?hl=ru" target="_blank">@lizzi.target</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box__content">
                            <p><span>Точка А:</span></p>
                            <p><span>Доход:</span> стипендия в 90 BYN</p>
                            <p><span>Род деятельности:</span> студент в медицинском колледже.</p>
                            <p><span>Навыки:</span> совершенно не знала что такое таргет и как он работает.</p>
                        </div>
                        <div className="box__content">
                            <p><span>Точка Б:</span></p>
                            <p><span>Доход:</span> на данный момент веду 3х клиентов по 200$.</p>
                            <p><span>Лучший кейс:</span> заявки по 2.71 рубля для зоомагазина.</p>
                        </div>
                    </div>
                </div>




                <div className="box">
                    <div className="box__title">
                        <div className="photo" style={{ backgroundImage: `url(${ekaterina})` }}></div>
                        <div className="info">
                            <div className="name">
                                <span><p>Екатерина</p></span>
                            </div>
                            <div className="contacts">
                                <p><a href="https://www.instagram.com/ekaaaterinas/?hl=ru" target="_blank">@ekaaaterinas</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box__content">
                            <p><span>Точка А:</span></p>
                            <p><span>Доход:</span> 150$ на смм</p>
                            <p><span>Навыки:</span> было понимание, что такое таргетированная реклама, но не было результата, клиентов закрывала только на смм.</p>
                        </div>
                        <div className="box__content">
                            <p><span>Точка Б:</span></p>
                            <p><span>Доход:</span> 450$/месяц</p>
                            <p><span>Навыки:</span> умение работать с клиентом и доводить его до результата.</p>
                            <p><span>Лучший кейс:</span> 9 клиентов для мастера маникюра за 10$.</p>
                            <p><span>Клиентов:</span> 3</p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default CourseResults;