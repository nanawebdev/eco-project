import React from "react";
import c from './Specification.module.scss'
import rules from './../../img/rules.png'

const Specification = () => {
    return (
        <div className={c.Specification}>
            <h2 className={c.Specification__title}>Правила для сдаваемых крышечек</h2>
            <img src={rules} alt="Правила" className={c.Specification__img}></img>
            <p className={c.Specification__rule}><i className="fas fa-times"></i> Не уверен - не сдавай! <i className="fas fa-times"></i></p>
        </div>
    )
}

export default Specification