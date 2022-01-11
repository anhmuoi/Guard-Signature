import React from 'react';
import arrow from '../../images/arrow-icon.png';
import './StartNow.scss'
interface Props {}

export const StartNow = (props: Props) => {
    return (
        <div className="start">
            <div className="container">
                <div className="start__content">
                    <div className="start__title">지금 바로 시작하세요!</div>
                    <div className="start__text">설명이 필요 없는 간단한 계약 과정,</div>
                    <div className="start__text">직접 경험해보세요!</div>
                    <div className="start__btn">
                        <div className="start__btn-text">더 살펴보기</div>
                        <img className='start__btn-img' alt="" src={arrow} />
                    </div>
                </div>
            </div>
        </div>
    );
};
