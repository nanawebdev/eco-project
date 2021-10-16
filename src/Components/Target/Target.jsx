import React from "react";
import c from './Target.module.scss'

const Target = () => {
    return (
        <div className={c.Target}>
            <h2 className={c.Target__title}>Моя задача</h2>
            <p className={c.Target__text}>Собирать пластиковые крышечки для проекта <span>Добрые крышечки</span></p>
            <p className={c.Target__text}>Узнать больше о проекте можно тут
                <a href="https://xn----9sbifbsmb4avd9fl1be.xn--p1ai/">добрые-крышечки.рф</a>
            </p>
            <p>Вы можете положить любые пластиковые крышечки</p>
            Примеры:
            можно нельзя
            <p>Затем они уедут в пункт приема вторсырья Собиратор</p>
            <p className={c.Target__text}>Узнать больше о проекте можно тут
                <a href="https://sobirator.ru/">sobirator.ru</a>
            </p>
            
        </div>
    )
}

export default Target