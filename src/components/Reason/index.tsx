import React from 'react';
import './Reason.scss';
import reasonImg from '../../images/reason.png';
import arrow from '../../images/arrow-icon.png';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/reason_icon_2.svg';
import icon3 from '../../images/reason_icon_3.svg';
import icon4 from '../../images/reason_icon_4.svg';
import icon5 from '../../images/reason_icon_5.svg';
import icon6 from '../../images/reason_icon_6.svg';

const reasonLeft = [
    {
        icon: icon1,
        title: '쉽고 편리하게',
        text1: '번거로운 절차 없이 누구나',
        text2: '빠르게 계약을 체결할 수 있습니다.',
    },
    {
        icon: icon3,
        title: '안전한 보안',
        text1: '데이터는 암호화되어 전송되고',
        text2: '안전한 곳에 저장됩니다.',
    },
    {
        icon: icon5,
        title: '다양한 파일형식',
        text1: '한글, 오피스부터 PDF, JPG와',
        text2: '같은 이미지 파일도 변환없이 지원',
    },
];

const reasonRight = [
    {
        icon: icon2,
        title: '간단한 본인인증',
        text1: '공인인증서와 ActiveX없이도',
        text2: '본인인증을 할 수 있습니다.',
    },
    {
        icon: icon4,
        title: '효율적인 작업',
        text1: '자주 사용하는 문서들을 저장하고',
        text2: '불러와 작업할 수 있습니다.',
    },
    {
        icon: icon6,
        title: '계약서 관리',
        text1: '관리가 필요한 문서를 한 눈에 보고',
        text2: '체계적으로 관리할 수 있습니다.',
    },
];

interface Props {}

const Reason = (props: Props) => {
    return (
        <div className="reason">
            <div className="container">
                <h1 className="reason__heading">가드 시그니처를 선택하는 이유</h1>
                <div className="reason__title">
                    <div className="reason__title-text1">많은 기업들이 가드 시그니처를 선택하는 이유,</div>
                    <div className="reason__title-text2">아래 버튼을 눌러 상세한 정보를 알아보세요.</div>
                </div>
                <div className="reason__content">
                    <div className="reason__contentLeft">
                        {reasonLeft.map((item, index) => (
                            <>
                                <img key={index} className={`reason__contentRight-icon indexLeft${index}`} alt="" src={item.icon}></img>
                                <p className={`reason__contentRight-title indexLeft${index}`}>{item.title}</p>
                                <p className={`reason__contentRight-text1 indexLeft${index}`}>{item.text1}</p>
                                <p className={`reason__contentRight-text2 indexLeft${index}`}>{item.text2}</p>
                            </>
                        ))}
                    </div>
                    <img className="reason__content-img" alt="" src={reasonImg}></img>
                    <div className="reason__contentRight">
                        {reasonRight.map((item, index) => (
                            <>
                                <img key={index} className={`reason__contentRight-icon indexRight${index}`} alt="" src={item.icon}></img>
                                <p className="reason__contentRight-title">{item.title}</p>
                                <p className="reason__contentRight-text1">{item.text1}</p>
                                <p className="reason__contentRight-text2">{item.text2}</p>
                            </>
                        ))}
                    </div>
                </div>
                <div className="reason__btn">
                        <div className="reason__btn-text">가이드 다운로드</div>
                        <img className='reason__btn-img' alt="" src={arrow} />
                    </div>
            </div>
        </div>
    );
};

export default Reason;
