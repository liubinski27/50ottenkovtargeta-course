import './style.scss';

function WhatWillBe() {
    return (
        <div className="whatWillBe">
            <div className="container">
                <h2 className="title">Что будет на курсе?</h2>
                <div className="boxes">
                    <div className="box__flex">
                        <div className="box">
                            <div className="content">
                                <div className="id">01</div>
                                <div className="box__title">Обратная связь от автора курса - Ксении Пасмурцевой.</div>
                                <div className="box__info">Никаких кураторов, только реальный практик с большим опытом, у которого вы приобрели курс.</div>
                            </div>
                        </div>
                    </div>
                    <div className="box__flex">
                        <div className="box">
                            <div className="content">
                                <div className="id">02</div>
                                <div className="box__title">Подробный разбор темы.</div>
                                <div className="box__info">Более 70 практических уроков, которые постоянно пополняются, поддерживающие зум-созвоны и вебенары.</div>
                            </div>
                        </div>
                    </div>
                    <div className="box__flex">
                        <div className="box">
                            <div className="content">
                                <div className="id">03</div>
                                <div className="box__title">Отдельный блок по поиску клиентов. </div>
                                <div className="box__info">Курс начнет окупаться на 5-ой неделе после его старта.</div>
                            </div>
                        </div>
                    </div>
                    <div className="box__flex">
                        <div className="box">
                            <div className="content">
                                <div className="id">04</div>
                                <div className="box__title">По окончании курса каждого ждет внутренний экзамен. </div>
                                <div className="box__info">Это сделано для того, чтобы мы ещё раз убедились в том , что вы готовы покорять рынок digital.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWillBe