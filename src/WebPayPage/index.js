import style from './style.module.scss';

const WebPayPage = () => {
    return (
        <div className={style.root}>
            <div className={style.webpay__flex}>
                <p>Правила оплаты: Нажмите кнопку "купить" – введите данные клиента – выберите способ оплаты – нажмите "Подтвердить" - введите свои данные для оплаты.</p>
                <p>Доступ придет вам на указанную электронную почту.</p>
                <p>Безопасный сервер <a className={style.webpaylink} href="https://webpay.by/" target="_blank">WEBPAY</a> устанавливает шифрованное соединение по защищенному протоколу TLS и конфиденциально принимает от клиента данные его платёжной карты (номер карты, имя держателя, дату окончания действия, и контрольный номер банковской карточке CVC/CVC2).</p>
                <p>После совершения оплаты с использованием банковской карты необходимо сохранять полученные карт-чеки (подтверждения об оплате) для сверки с выпиской из карт-счёта (с целью подтверждения совершённых операций в случае возникновения спорных ситуаций).</p>
                <p>В случае, если Вы не получили заказ (не оказана услуга либо не понравилось качество), Вам необходимо обратиться (в службу технической поддержки) по телефону +375299283086 или e-mail kseniya.pasmurtseva@mail.ru . Менеджеры Вас проконсультируют.</p>
                <p>При оплате банковской платежной картой возврат денежных средств осуществляется на карточку, с которой была произведена оплата.</p>
            </div>
        </div>
    )
}

export default WebPayPage;