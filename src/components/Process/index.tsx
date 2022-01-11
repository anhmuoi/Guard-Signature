import React from 'react';
import './Process.scss';
import process1 from '../../images/process1.png';
import process2 from '../../images/process2.png';
import process3 from '../../images/process3.png';
import process4 from '../../images/process4.png';
interface Props {}

export const Process = (props: Props) => {
    return (
        <div className="process">
            <div className="container">
                <div className="process__top">
                    <div className="process__title">간단하게 끝내는 계약과정</div>
                    <div className="process__text">
                        <p>계약서 파일을 업로드하여 서명을 요청해 보세요.</p>
                        <p>상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.</p>
                        <p>언제 어디서든 5분만에 계약을 체결해 보세요.</p>
                    </div>
                </div>
                <div className="process__list">
                    <div className="process__list-item">
                        <img className="process__list-img" alt="" src={process1} />
                        <div className="process__content">
                            <div className="process__list-title">업로드하기</div>
                            <div className="process__list-text">
                                <p>필요한 계약서 파일을</p>
                                <p>업로드합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process__list-item">
                        <img className="process__list-img" alt="" src={process2} />
                        <div className="process__content">
                            <div className="process__list-title">서명 요청하기</div>
                            <div className="process__list-text">
                                <p>업로드한 계약서 파일에</p>
                                <p>서명 요청을 하세요.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process__list-item">
                        <img className="process__list-img" alt="" src={process3} />
                        <div className="process__content">
                            <div className="process__list-title">서명 입력하기</div>
                            <div className="process__list-text">
                                <p>상대방이 간단한 절차를 통해</p>
                                <p>서명할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process__list-item">
                        <img className="process__list-img" alt="" src={process4} />
                        <div className="process__content">
                            <div className="process__list-title">계약 완료</div>
                            <div className="process__list-text">
                                <p>언제 어디서든</p>
                                <p>5분 만에 계약 완료!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
