import React, {useState} from 'react';
import style from './ErrorMessage.module.css'

type ErrorMessagePropsType = {
    isError:boolean
}

const ErrorMessage = (props:ErrorMessagePropsType) => {

    const [close, setClose] = useState<boolean>(props.isError)

    return close ? <div className={style.container}>
            <div id="error-box" className={style.errorBox}>
                <div className={style.face2}>
                    <div className={style.eye}/>
                    <div className={`${style.eye} ${style.right}`}/>
                    <div className={`${style.mouth} ${style.sad}`}/>
                </div>
                <div className={`${style.shadow} ${style.move}`}/>
                <div className={style.message}><h1 className={style.alert}>Error!</h1></div>
                <button className={style.buttonBox} onClick={() => setClose(true)}><h1 className={style.red}>try again</h1></button>
            </div>
        </div>
        : null
};

export default ErrorMessage;