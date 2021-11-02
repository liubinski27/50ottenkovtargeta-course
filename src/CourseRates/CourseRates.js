import './style.scss';

function CourseRates() {
    return (
        <div className="courseRates">
            <div className="container">
                <div className="title">
                    <h2 className="title__text">Тарифы курса</h2>
                    <p className="title__info">Выбери свой вариант</p>
                </div>
                <div className="boxes">
                    <div className="box">
                        <h3 className="box__title">НУ ПОКАЖИ, ЧТО У ТЕБЯ ТАМ</h3>
                        <ul className="prices">
                            <li><span>$</span>250</li>
                            <li><span>BYN</span>605</li>
                            <li><span>RUB</span>17600</li>
                            {/* <li className="line"><span></span></li> */}
                        </ul>
                        {/* <ul className="prices">
                            <li><span>$</span>200</li>
                            <li><span>BYN</span>485</li>
                            <li><span>RUB</span>14000</li>
                        </ul> */}
                        <ul className="plan__content">
                            <li><span>100+ уроков</span></li>
                            <li><span>2 общих созвона в течение курса</span></li>
                            <li><span>Чат общения в тг</span></li>
                            {/* <li className="line__through"><span>Проверка домашек</span></li>
                            <li className="line__through"><span>Сертификат о прохождении курса</span></li>
                            <li className="line__through"><span>Бесплатные клиенты</span></li>
                            <li className="line__through"><span>5 созвонов в течение курса в группе до 5 человек</span></li>
                            <li className="line__through"><span>Менторство до результата</span></li> */}
                        </ul>
                        <div className="buy__btn">
                            <a className="button" href="https://billing.webpay.by/?mElWEnDyyFpKl3tngPji0ynmZzQ12pJlWfKUWFRN02I%3D">
                                <p>Купить</p>
                            </a>
                            <a className="button" href="https://billing.webpay.by/?zfxseqma%2ByRPOVcEyttGeWc%2Bt7StZaKiui7352i%2B83E%3D">
                                <p>Купить в рассрочку</p>
                            </a>
                            <a className="button" href="https://billing.webpay.by/?XvEsivLFVhTQpl5CURam06aIutO%2Bj41KkaN7PSdwnZk%3D">
                                <p>Забронировать место</p>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="box__title">ОГО, КАК ТЫ УМЕЕШЬ</h3>
                        <ul className="prices">
                            <li><span>$</span>300</li>
                            <li><span>BYN</span>727</li>
                            <li><span>RUB</span>21100</li>
                            {/* <li className="line"><span></span></li> */}
                        </ul>
                        {/* <ul className="prices">
                            <li><span>$</span>255</li>
                            <li><span>BYN</span>620</li>
                            <li><span>RUB</span>17900</li>
                        </ul> */}
                        <ul className="plan__content">
                            <li><span>100+ уроков</span></li>
                            <li><span>Чат общения в тг</span></li>
                            <li><span>Проверка домашек</span></li>
                            <li><span>Сертификат о прохождении курса</span></li>
                            <li><span>Бесплатные клиенты</span></li>
                            <li><span>3 общих созвона в течение курса</span></li>
                            {/* <li className="line__through"><span>5 созвонов в течение курса в группе до 5 человек</span></li>
                            <li className="line__through"><span>Менторство до результата</span></li>
                            <li className="line__through"><span>Индивидуальное сопровождение</span></li> */}
                        </ul>
                        <div className="buy__btn">
                            <a className="button" href="https://billing.webpay.by/?PNIej5pCjL8hDD1%2FEK%2BWRcNINNYhBPFQCcwTphBJUgQ%3D">
                                <p>Купить</p>
                            </a>
                            <a className="button" href="https://billing.webpay.by/?uV8e99fVlRP827lTLHawZrd8%2FvEieaXM9fKfi2PXXK8%3D">
                                <p>Купить в рассрочку</p>
                            </a>
                            <a className="button" href="https://billing.webpay.by/?nJr3GWMKiF7MTTpyzIAYXIrFcw8vREZKuO58J3s8Y8k%3D">
                                <p>Забронировать место</p>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="box__title">ПРИВАТ</h3>
                        <ul className="prices">
                            <li><span>$</span>450</li>
                            <li><span>BYN</span>1090</li>
                            <li><span>RUB</span>31600</li>
                            {/* <li className="line"><span></span></li> */}
                        </ul>
                        {/* <ul className="prices">
                            <li><span>$</span>360</li>
                            <li><span>BYN</span>875</li>
                            <li><span>RUB</span>25300</li>
                        </ul> */}
                        <ul className="plan__content">
                            <li><span>100+ уроков</span></li>
                            <li><span>2 общих созвона в течение курса</span></li>
                            <li><span>Чат общения в тг</span></li>
                            <li><span>Проверка домашек</span></li>
                            <li><span>Сертификат о прохождении курса</span></li>
                            <li><span>Бесплатные клиенты</span></li>
                            <li><span>Менторство до результата</span></li>
                            <li><span>Индивидуальное сопровождение</span></li>
                        </ul>
                        <h3 className="box__title" style={{marginTop: "80px", color: "#f5443b"}}>SOLD OUT</h3>
                        {/* <div className="buy__btn">
                            <a className="button" href="https://billing.webpay.by/?ZZSBHRR91v91TJ5UGtHAcEN9H%2FGF0n4xBc2A6wn4sTA%3D">
                                <p>Купить</p>
                            </a>
                            <a className="button" href="https://billing.webpay.by/?PNIej5pCjL8hDD1%2FEK%2BWRcNINNYhBPFQCcwTphBJUgQ%3D">
                                <p>Купить в рассрочку</p>
                            </a>
                            <a className="button" href="https://billing.webpay.by/?PNIej5pCjL8hDD1%2FEK%2BWRcNINNYhBPFQCcwTphBJUgQ%3D">
                                <p>Забронировать место</p>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseRates;