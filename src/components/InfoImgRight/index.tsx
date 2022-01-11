import React from 'react';
import './InfoImgRight.scss';
interface Props {
    infoProps: InfoProps;
}
interface InfoProps {
    img: any;
    order: string;
    title1: string;
    title2: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

const InfoImgRight = (props: Props) => {
    return (
        <div className="infoImgRight">
            <div className="container">
                <div className="infoImgRight__content">
                    <div className="infoImgRight__order">{props.infoProps.order}</div>
                    <div className="infoImgRight__title">
                        <p>{props.infoProps.title1}</p>
                        <p>{props.infoProps.title2}</p>
                    </div>
                    <div className="infoImgRight__text">
                        <p>{props.infoProps.text1}</p>
                        <p>{props.infoProps.text2}</p>
                        <p>{props.infoProps.text3}</p>
                        <p>{props.infoProps.text4}</p>
                    </div>
                </div>
                <img className="infoImgRight__img" alt="" src={props.infoProps.img} />
            </div>
        </div>
    );
};

export default InfoImgRight;
