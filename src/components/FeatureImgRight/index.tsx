import React from 'react'
import './FeatureImgRight.scss'
interface Props {
    featureProps: FeatureProps;
}

interface FeatureProps {
    img: any;
    heading: string;
    titles: string[];
    texts: string[];
}

const FeatureImgRight = ({ featureProps }: Props) => {
    return (
        <div className="featureRight">
            <div className="container">
               
                <div className="featureRight__content">
                    <h1 className="featureRight__heading">{featureProps.heading}</h1>
                    {featureProps.titles.map((item: string, index) => (
                        <>
                            <p className="featureRight__title" key={index}>
                                {item}
                            </p>
                            <p className="featureRight__text">{featureProps.texts[index]}</p>
                        </>
                    ))}
                </div>
                <img className='featureRight__img' alt="" src={featureProps.img}></img>
            </div>
        </div>
    )
}

export default FeatureImgRight
