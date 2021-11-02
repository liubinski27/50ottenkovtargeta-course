import './style.scss';
import rectangle from '../img/PlanRectangleBG.svg';
import arrows from '../img/arrows.svg';
import flame from '../img/flame.svg';

function CoursePlan() {
    return (
        <div className="coursePlan">
            <div className="whiteFigure">
                <div className="rectangle" style={{ backgroundImage: `url(${rectangle})` }}>
                    <div className="container">
                        <div className="title">
                            <h2 className="title__text">Программа курса</h2>
                            <p className="title__info">
                                <a href="#planList">Нажимай, чтобы узнать подробнее</a>
                            </p>
                            <div className="arrows" style={{ backgroundImage: `url(${arrows})` }}></div>
                        </div>
                        <a name="planList"></a>
                        <ul className="plan__list">
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ПОДГОТОВКА</p>
                                    <div className="id__box">
                                        <p>1</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>СТРУКТУРА КАБИНЕТА</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">АНАЛИЗ ЦА И ВОРОНКИ ПРОДАЖ</p>
                                    <div className="id__box">
                                        <p>2</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ЦЕЛЕВАЯ АУДИТОРИЯ</li>
                                        <li>ВОРОНКИ ПРОДАЖ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ПОСАДОЧНЫЕ СТРАНИЦЫ</p>
                                    <div className="id__box">
                                        <p>3</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>БИЗНЕС-СТРАНИЦА, ПРИВЯЗКИ, НДС</li>
                                        <li>ПОДГОТОВКА ПРОФИЛЯ/САЙТА К РЕКЛАМЕ</li>
                                        <li>МАТРИЦА КОНТЕНТА</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">МАРКЕТИНГ</p>
                                    <div className="id__box">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ПУТЬ КЛИЕНТА</li>
                                        <li>КОММУНИКАЦИОННЫЕ СТРАТЕГИИ ЗАПУСКА РЕКЛАМЫ</li>
                                        <li>МАРКЕТИНГОВЫЕ ПОКАЗАТЕЛИ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">КРЕАТИВЫ</p>
                                    <div className="id__box">
                                        <p>5</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ЧЕТКИЕ ТЕКСТЫ И КАК ИХ ПИСАТЬ</li>
                                        <li>СОЗДАНИЕ КРЕАТИВОВ</li>
                                        <li>РАЗБОР ПРИЛОЖЕНИЙ ДЛЯ СОЗДАНИЯ КРЕАТИВОВ, СОЗДАЕМ КРЕАТИВЫ</li>
                                        <li>ТРИГГЕРЫ И ВИЗУАЛЬНЫЕ СТИМУЛЫ</li>
                                        <li>КАК ВЫДЕЛЯТЬСЯ СВОИМИ КРЕАТИВАМИ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ЦЕЛИ</p>
                                    <div className="id__box">
                                        <p>6</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ТРАФИК</li>
                                        <li>ГЕНЕРАЦИЯ ЛИДОВ</li>
                                        <li>ВОВЛЕЧЕННОСТЬ</li>
                                        <li>ОХВАТ</li>
                                        <li>УЗНАВАЕМОСТЬ БРЕНДА</li>
                                        <li>КОНВЕРСИИ</li>
                                        <li>УСТАНОВКИ ПРИЛОЖЕНИЯ</li>
                                        <li>ПРОСМОТРЫ ВИДЕО</li>
                                        <li>СООБЩЕНИЯ</li>
                                        <li>ПРОДАЖИ ПО КАТАЛОГУ</li>
                                        <li>ПОСЕЩАЕМОСТЬ ТОЧЕК</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">АУДИТОРИИ FACEBOOK</p>
                                    <div className="id__box">
                                        <p>7</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>СТРАТЕГИЯ РЕКЛАМЫ</li>
                                        <li>БЫСТРЫЙ ЗАПУСК РЕКЛАМНЫХ КАМПАНИЙ</li>
                                        <li>DEEPLINKS</li>
                                        <li>ПОДБОР АУДИТОРИИ</li>
                                        <li>СОЗДАНИЕ АУДИТОРИЙ</li>
                                        <li>ПЕРЕСЕЧЕНИЕ АУДИТОРИЙ</li>
                                        <li>AUDIENCE INSIGHTING</li>
                                        <li>ПЛАТЕЖЕСПОСОБНЫЕ АУДИТОРИИ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ЭФФЕКТИВНОСТЬ</p>
                                    <div className="id__box">
                                        <p>8</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ДЕКОМПОЗИЦИЯ</li>
                                        <li>ВИДЫ ТЕСТИРОВАНИЯ</li>
                                        <li>АЛГОРИТМЫ РАБОТЫ FACEBOOK</li>
                                        <li>ОЗДАНИЕ СОБЫТИЙ И СПЕЦИАЛЬНО НАСТРОЕННЫХ КОНВЕРСИЙ</li>
                                        <li>UTM-МЕТКИ</li>
                                        <li>РАБОТА С ЯНДЕКС-МЕТРИКОЙ И GOOGLE ANALYTICS</li>
                                        <li>АВТОМАТИЧЕСКИЕ ПРАВИЛА</li>
                                        <li>ИНСПЕКТОР И ДИАГРАММЫ</li>
                                        <li>БЮДЖЕТ НА ТЕСТОВУЮ РЕКЛАМНУЮ КАМПАНИЮ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ОПТИМИЗАЦИЯ</p>
                                    <div className="id__box">
                                        <p>9</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ОПТИМИЗАЦИЯ РЕКЛАМЫ</li>
                                        <li>АВТОМАТИЧЕСКИЕ ПРАВИЛА</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ФИШКИ</p>
                                    <div className="id__box">
                                        <p>10</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ПРОМОАКЦИИ И КАК РАБОТАТЬ С НИМИ ЭФФЕКТИВНО</li>
                                        <li>КВИЗЫ И МЕТОД 5*3</li>
                                        <li>БЫСТРЫЙ ЗАПУСК КАМПАНИЙ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">РАБОТА С КЛИЕНТОМ</p>
                                    <div className="id__box">
                                        <p>11</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>СПОСОБЫ ПОИСКА КЛИЕНТОВ</li>
                                        <li>ОТЧЕТЫ</li>
                                        <li>КОММЕРЧЕСКИЕ ПРЕДЛОЖЕНИЯ И ПРОДАЖА СЕБЯ</li>
                                        <li>ОСНОВНЫЕ МЕТРИКИ ТАРГЕТОЛОГА</li>
                                        <li>КАК ТАРГЕТОЛОГУ ВЫЙТИ НА 1500$/МЕСЯЦ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">БЛОКИРОВКА</p>
                                    <div className="id__box">
                                        <p>12</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>ЗА ЧТО БЛОКИРУЮТ И КАК СНЯТЬ БЛОК</li>
                                        <li>КАК ПИСАТЬ В ПОДДЕРЖКУ</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main">
                                    <p className="item__title">ЛИЧНЫЙ БРЕНД</p>
                                    <div className="id__box">
                                        <p>13</p>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <ul>
                                        <li>КАК ТАРГЕТОЛОГУ ВЕСТИ ЛИЧНЫЙ БРЕНД</li>
                                        <li>РАСПАКОВКА ЛИЧНОСТИ</li>
                                        <li>СТОРИС И ЛИЧНЫЙ БРЕНД</li>
                                        <li>ПОИСК КЛИЕНТОВ ЧЕРЕЗ ЛИЧНЫЙ БРЕНД</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="item">
                                <div className="item__main gold">
                                    <p className="item__title">БОНУСЫ</p>
                                    <div className="id__box">
                                        <p className="flame" style={{ backgroundImage: `url(${flame})` }}></p>
                                    </div>
                                </div>
                                <div className="item__footer golder">
                                    <ul>
                                        <li>4 УРОКА С МАРАФОНА ПО ПОИСКУ КЛИЕНТОВ</li>
                                        <li>РАЗБОР ХОРОШИХ И ПЛОХИХ РЕКЛАМ</li>
                                        <li>РАЗБОР МОИХ КЕЙСОВ</li>
                                        <li>РЕКЛАМА В LINKEDIN</li>
                                        <li>ЧЕК-ЛИСТЫ И ГАЙДЫ</li>
                                        <li>ТРЕНДЫ 2021</li>
                                        <li>ПОШАГОВАЯ НАСТРОЙКА ТАРГЕТА ДЛЯ УСЛУГ</li>
                                        <li>ПОШАГОВАЯ НАСТРОЙКА ТАРГЕТА ДЛЯ ТОВАРНОГО БИЗНЕСА</li>
                                        <li>СТРАТЕГИЯ ТЕСТОВОЙ РЕКЛАМНОЙ КАМПАНИИ</li>
                                        <li>СПОСОБЫ МАСШТАБИРОВАНИЯ</li>
                                        <li>СТРАТЕГИЯ РАЗВИТИЯ ЛИЧНОГО БРЕНДА</li>
                                        <li>TAPLINK</li>
                                        <li>ТАЙМ-МЕНЕДЖМЕНТ</li>
                                        <li>ПОШАГОВЫЙ ПЛАН РАБОТЫ ТАРГЕТОЛОГА</li>
                                        <li>ПОШАГОВАЯ НАСТРОЙКА ТАРГЕТА НА ЛИЧНЫЙ БЛОГ</li>
                                        <li>КАКУЮ ЦЕЛЬ ВЫБИРАТЬ ДЛЯ РАЗЛИЧНЫХ ПРОЕКТОВ?</li>
                                        <li>ГДЕ ПОДСМОТРЕТЬ ЧУЖИЕ СТРАТЕГИИ?</li>
                                        <li>МОИ КЕЙСЫ ЧАСТЬ 1</li>
                                        <li>МОИ КЕЙСЫ ЧАСТЬ 2</li>
                                        <li>УРОК ПО КРЕАТИВУ</li>
                                        <li>РАЗБОР ЗАПУСКА ТАРГЕТА НА СВОИ УСЛУГИ</li>
                                        <li>СКРЫТЫЕ ИНТЕРЕСЫ В РЕКЛАМНОМ КАБИНЕТЕ</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePlan;