import React from "react";
import c from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={c.Footer}>
            <div>
                <h3>Спасибо за участие в сборе крышечек!</h3>

                <ul className={c.Footer__list}>
                    <li className={c.Footer__item}>
                        <a className={c.Footer__link} href="mailto:anna.web.dev1@gmail.com" area-label="ссылка на почту">
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li className={c.Footer__item}>
                        <a className={c.Footer__link} href="https://www.instagram.com/anna.web.dev/" area-label="ссылка на инстаграм">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <span className={c.Footer__copyright}>Copyright © 2021 Серова Анна All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer