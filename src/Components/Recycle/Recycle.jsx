import React from "react";
import c from './Recycle.module.scss'

const Recycle = () => {
    const cls = [
        c['Recycle__link'],
        c['Recycle__link--blue']
    ]
    const link = cls.join(' ')

    return (
        <div className={c.Recycle}>
            <h2 className={c.Recycle__title}>Куда нести бутылку?</h2>

            <ul className={c.Recycle__list}>
                <li className={c.Recycle__item}>
                    <p className={c.Recycle__advice}><i className="fas fa-recycle"></i> В синий контейнер перед домом (он для вторсырья)</p>
                    <p className={c.Recycle__subtext}>О том, что еще можно выбрасывать в синий контейнер <i className="fas fa-arrow-right"></i> <a className={link} href="http://ec-line.ru/rso/">ec-line.ru</a>
                    </p>
                </li>
                <li className={c.Recycle__item}>
                    <p className={c.Recycle__advice}><i className="fas fa-recycle"></i> В пункт приема вторсырья Собиратор</p>
                    <p className={c.Recycle__subtext}>О том, что еще можно сдать им <i className="fas fa-arrow-right"></i> <a className={c.Recycle__link} href="https://sobirator.ru/spisok/">sobirator.ru</a>
                    </p>
                </li>
                <li className={c.Recycle__item}>
                <p className={c.Recycle__advice}><i className="fas fa-recycle"></i> В любой, понравившийся вам пункт</p>
                <p className={c.Recycle__subtext}>В Москве их много, легко нагуглить <i className="fas fa-leaf"></i></p>
                </li>
            </ul>
        </div>
    )
}

export default Recycle