import React from 'react';
import './FeatureImgLeft.scss';
interface Props {
    featureProps: FeatureProps;
}

interface FeatureProps {
    img: any;
    heading: string;
    titles: string[];
    texts: string[];
}

const FeatureImgLeft = ({ featureProps }: Props) => {
    return (
        <div className="featureLeft">
            <div className="container">
                <img className='featureLeft__img' alt="" src={featureProps.img}></img>
                <div className="featureLeft__content">
                    <h1 className="featureLeft__heading">{featureProps.heading}</h1>
                    {featureProps.titles.map((item: string, index) => (
                        <>
                            <p className="featureLeft__title" key={index}>
                                {item}
                            </p>
                            <p className="featureLeft__text">{featureProps.texts[index]}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureImgLeft;
