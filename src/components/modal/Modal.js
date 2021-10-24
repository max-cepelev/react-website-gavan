import React, {useEffect} from 'react'
import './Modal.scss'
import {CSSTransition} from 'react-transition-group'

export default function Modal(props) {

    useEffect(() => {
        if (props.isOpened) {
            document.body.style.overflow = 'hidden'
        }
        if (!props.isOpened) {
            document.body.style.overflow = ''
        }
    }, [props.isOpened])

    return (
        <CSSTransition in={props.isOpened} classNames="modal" timeout={300} unmountOnExit>
            <div className='modal__wrapper'>
                {props.children}
            </div>
        </CSSTransition>
    )
}
