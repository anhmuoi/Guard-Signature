import React from 'react';
import './Footer.scss';
import icon1 from '../../images/sns_icon_1.svg';
import icon2 from '../../images/sns_icon_3.svg';
import icon3 from '../../images/sns_icon_2.svg';
interface Props {}

const Footer = (props: Props) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__left">
                    <div className="footer__title">
                        <p>이용약관</p>
                        <p>개인정보처리방침</p>
                        <p>고객센터</p>
                    </div>
                    <div className="footer__text">
                        <p>(주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000</p>
                        <p>이메일 : test0101@guardsignature.co.kr｜ FAX :070-0000-0000</p>
                        <p>서울특별시 강남구 도산대로 8길 17 3층</p>
                        <p className='footer__lastText'>Copyright© GUARDSIGNATURE All rights reserved.</p>
                    </div>
                </div>
                <div className='footer__right'>
                    <div className='footer__icon'>
                        <img alt='' src={icon1} />
                        <img alt='' src={icon2} />
                        <img alt='' src={icon3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
