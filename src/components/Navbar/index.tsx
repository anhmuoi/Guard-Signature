import React, { useState } from 'react';
import './Navbar.scss';
interface Props {}

const Navbar = (props: Props) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__logo">Guard Signature</div>
                <div className="nav__links">
                    <div className="nav__link">서비스 소개</div>
                    <div className="nav__link">법적효력·보안</div>
                    <div className="nav__link">활용 분야</div>
                    <div className="nav__link">이용 혜택</div>
                    <div className="nav__link">요금 안내</div>
                    <div className="nav__link">고객센터</div>
                </div>
                <div className="nav__btn">
                    <div className="nav__btn-text">로그인</div>
                    <div className="nav__btn-text">회원가입</div>
                </div>

                <div className="nav__menu">
                    <div onClick={() => setShowMenu(true)}>
                        <i className="fas fa-bars" style={{ color: 'white' }}></i>
                    </div>

                    <ul className={`menu ${showMenu ? 'menu__is-show' : ''}`}>
                        <div onClick={() => setShowMenu(false)}>
                            <i className=" fas fa-times menu__close"></i>
                        </div>
                        <li className="menu-item">
                            <a href="/#" className="menu__link">
                                서비스 소개{' '}
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu__link">
                                법적효력·보안{' '}
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu__link">
                                활용 분야
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu__link">
                                이용 혜택
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu__link">
                                요금 안내
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu__link">
                                고객센터
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
