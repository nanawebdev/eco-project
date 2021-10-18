import React from "react";
import c from './Greeting.module.scss'

const Greeting = () => {
    return (
        <div className={c.Greeting}>
            <span className={c.Greeting__greet}>Привет, соседи!</span>
            <h1 className={c.Greeting__title}>Тут про сбор крышечек на переработку</h1>
            <p className={c.Greeting__text}>Вы перешли сюда с QR кода на ёмкости для сбора крышечек и <strong>попали куда надо</strong>.</p>
            <p className={c.Greeting__text}>Это сайт пятилитровки из нашего подъезда. Нет, это не шутка, хотя согласитесь - выглядит забавно <i className="far fa-smile-wink"></i>
            </p>
        </div>
    )
}

export default Greeting