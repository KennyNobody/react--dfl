import classNames from 'classnames';
import cls from './Informer.module.scss';
import Icon from '6_shared/assets/icons/icon-informer.svg';
import React, {useEffect, useRef, useState} from 'react';
import { usePopper } from 'react-popper';
import {data} from '6_shared/data/informers';
import {info} from "sass";

interface InformerProps {
    className?: string;
    informerId: number;
}

export const Informer = ({className, informerId}: InformerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    const toggleMenu = () => setIsOpen(!isOpen);
    const content = data[informerId];

    return (
        <>
            <button
                type="button"
                onClick={toggleMenu}
                className={classNames(cls.block, className)}
                ref={setReferenceElement}
            >
                <Icon className={classNames(cls.icon)}/>
            </button>

            {isOpen &&
                <div
                    ref={setPopperElement}
                    style={styles.popper}
                    className={classNames(cls.popper)}
                    {...attributes.popper}
                >
                    {<div dangerouslySetInnerHTML={{ __html:content }} />}
                    <div ref={setArrowElement} style={styles.arrow} />
                </div>
            }
        </>
    );
};
