import React from 'react';
import arrow from '../../images/arrow-button.png';
import './Hero.scss';
interface Props {}

export const Hero = (props: Props) => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__title">
                        <p>모든 계약을 쉽고</p>
                        <p>간단하게, 빠르게 처리하세요.</p>
                    </div>
                    <div className="hero__text">
                        <p>가드 시그니처를 이용하면 어떤 계약이든</p>
                        <p>복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,</p>
                        <p>문서 처리 및 관리까지 편리하게 이용할 수 있습니다.</p>
                    </div>
                    <div className="hero__btn">
                        <div className="hero__btn-text">시작하기</div>
                        <img className="hero__btn-img" alt="" src={arrow}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
