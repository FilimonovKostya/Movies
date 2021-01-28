import React, {useState} from 'react';
import style from './ErrorMessage.module.css'

type ErrorMessagePropsType = {
    isError:string | null
}

const ErrorMessage = (props:ErrorMessagePropsType) => {

    const [open, setOpen] = useState<boolean>(!!props.isError)

    return open ? <div className={style.container}>
            <div id="error-box" className={style.errorBox}>
                <div className={style.face2}>
                    <div className={style.eye}/>
                    <div className={`${style.eye} ${style.right}`}/>
                    <div className={`${style.mouth} ${style.sad}`}/>
                </div>
                <div className={`${style.shadow} ${style.move}`}/>
                <div className={style.message}><h1 className={style.alert}>{props.isError}</h1></div>
                <button className={style.buttonBox} onClick={() => setOpen(false)}><h1 className={style.red}>Close</h1></button>
            </div>
        </div>
        : null
};

export default ErrorMessage;