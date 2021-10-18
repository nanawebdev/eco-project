import React from "react";
import c from './Target.module.scss'

const Target = () => {
    return (
        <div className={c.Target}>
            <h2 className={c.Target__title}>Задача ёмкости для сбора</h2>
            <p className={c.Target__target}>Собирать пластиковые крышечки для проекта <span>Добрые крышечки</span></p>
            <p className={c.Target__text}>Узнать больше о проекте можно тут <i className="fas fa-arrow-right"></i> <a className={c.Target__link} href="https://xn----9sbifbsmb4avd9fl1be.xn--p1ai/">добрые-крышечки.рф</a>
            </p>
        <ul className={c.Target__list}>
            <li className={c.Target__item}>Кладите внутрь пластиковые крышечки</li>
            <li className={c.Target__item}>Позже они уедут в пункт приема вторсырья Собиратор</li>    
        </ul>

        <p className={c.Target__text}>Узнать больше о проекте можно тут <i className="fas fa-arrow-right"></i> <a className={c.Target__link} href="https://sobirator.ru/">sobirator.ru</a>
                    </p>
            
        </div>
    )
}

export default Target