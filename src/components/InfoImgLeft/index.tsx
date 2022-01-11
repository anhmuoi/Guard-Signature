import React from 'react';
import './InfoImgLeft.scss';
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

const InfoImgLeft = (props: Props) => {
    return (
        <div className="infoImgLeft">
            <div className="container">
                <img className="infoImgLeft__img" alt="" src={props.infoProps.img} />
                <div className="infoImgLeft__content">
                    <div className="infoImgLeft__order">{props.infoProps.order}</div>
                    <div className="infoImgLeft__title">
                        <p>{props.infoProps.title1}</p>
                        <p>{props.infoProps.title2}</p>
                    </div>
                    <div className="infoImgLeft__text">
                        <p>{props.infoProps.text1}</p>
                        <p>{props.infoProps.text2}</p>
                        <p>{props.infoProps.text3}</p>
                        <p>{props.infoProps.text4}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoImgLeft;
