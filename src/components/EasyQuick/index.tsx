import React from 'react';
import './EasyQuick.scss';
interface Props {}

const EasyQuick = (props: Props) => {
    return (
        <div className="easyQuick">
            <div className="container">
                <div className="easyQuick__title">Easy and quick</div>
                <div className="easyQuick__text">
                    <p>
                        가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을 진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고,
                        서명을 요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이 서명이 가능합니다.
                    </p>
                    <p className="easyQuick__text-1">
                        계약이 진행되는 모든 과정을 효과적으로 체크할 수 있고, 언제 어디서든 5분이면 계약이 완료됩니다.
                    </p>
                    <div className="easyQuick__text-2">가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고 관리하세요.</div>
                </div>
            </div>
        </div>
    );
};

export default EasyQuick;
