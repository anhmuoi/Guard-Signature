import React from 'react';
import EasyQuick from './components/EasyQuick';
import FeatureImgLeft from './components/FeatureImgLeft';
import FeatureImgRight from './components/FeatureImgRight';
import { Hero } from './components/Hero';
import InfoImgLeft from './components/InfoImgLeft';
import InfoImgRight from './components/InfoImgRight';
import Navbar from './components/Navbar';
import { Process } from './components/Process';
import { StartNow } from './components/StartNow';
import './styles/app.scss';
import infoImg1 from './images/service.png';
import infoImg2 from './images/service-02.png';
import infoImg3 from './images/service-03.png';
import infoImg4 from './images/service-04.png';
import feature1 from './images/feature1.png';
import feature2 from './images/feature2.png';
import feature3 from './images/feature3.png';
import Reason from './components/Reason';
import Footer from './components/Footer';
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

interface FeatureProps {
  img: any;
    heading: string;
    titles: string[];
    texts: string[];
}

const fistInfo: InfoProps = {
    img: infoImg1,
    order: 'First',
    title1: '한 눈에 확인하는',
    title2: '계약 상태',
    text1: '문서에 텍스트 박스와 체크박스를 입력해 보세요.',
    text2: '진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료,',
    text3: '취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로',
    text4: '문서를 나열하고 관리할 수도 있습니다.',
};
const secondInfo: InfoProps = {
    img: infoImg2,
    order: 'Second',
    title1: '사용하던 서명',
    title2: '그대로',
    text1: '서명을 하는 동안 서명 중인 문서를 자유롭게 수정할 수 있습니다',
    text2: '사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수 있습니다',
    text3: '실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게 보정되며',
    text4: '가드 시그니처에서 만든 사인과 도장을 계약서에 바로 사용할 수 있습니다',
};
const thirdInfo: InfoProps = {
    img: infoImg3,
    order: 'Third',
    title1: '간편한',
    title2: '본인인증',
    text1: '공인인증서와 OTP, Active X 등을 요구하지 않습니다.',
    text2: '간단하고 빠른 휴대폰 인증과 접근 암호 설정으로 본인인증을 요청할',
    text3: '수 있습니다. 본인인증 요청은 법적효력과 상관없이',
    text4: '선택적으로 이용 가능합니다.',
};
const fourthInfo: InfoProps = {
    img: infoImg4,
    order: 'Fourth',
    title1: '텍스트 및',
    title2: '체크박스 입력',
    text1: '문서에 텍스트 박스와 체크박스를 입력해 보세요.',
    text2: '입력 위치, 크기, 글자체를 자유롭게 지정하고',
    text3: '필수입력 여부를 설정할 수 있습니다.',
    text4: '상대방에게 텍스트 입력을 요청할 수도 있습니다.',
};

const fistFeature: FeatureProps = {
    img: feature1,
    heading: '모두 시그니처만의 효과적인 기능',
    titles: ['템플릿 저장 및 불러오기', '폴더 설정', '텍스트 및 체크박스 입력', '다양한 파일형식 지원'],
    texts: [
        '자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 불러와 빠르게 작업할 수 있습니다.',
        '별도로 관리가 필요한 문서들은 폴더 설정을 통해 보다 체계적으로 관리할 수 있습니다.',
        '텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게 입력하고 상대방의 동의 여부를 확인할 수 있습니다.',
        '한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG,GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고 사용할 수 있습니다.',
    ],
};
const secondFeature: FeatureProps = {
    img: feature2,
    heading: '계약을 쉽고 빠르게 체결하는 방법!',
    titles: ['공인인증서 없는 본인인증', '폴더 설정카카오톡으로 서명 요청하기', '계약 체결과 보안', '가입 없이 즉시 서명'],
    texts: [
        '공인인증서와 ActiveX가 필요 없습니다. 이메일 인증, 휴대폰 인증, 암호인증 설정으로 간편하게 본인인증 해 보세요.',
        '카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은 PC, 모바일 언제 어디에서나 계약서에 서명할 수 있습니다.',
        '누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게 계약을 체결하고, 이후에도 지속적으로 관리할 수 있습니다.',
        '한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG,GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고 사용할 수 있습니다.계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후 즉시 서명할 수 있습니다.',
    ],
};
const thirdFeature: FeatureProps = {
    img: feature3,
    heading: '수월하게 계약을 완료하세요',
    titles: ['감사추적인증서를 통한 증명', '혼자 서명하기', '다양한 드라이브 업로드 지원', '계약 문서 관리'],
    texts: [
        '계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약 당사자의 행위를 쉽게 증명할 수 있습니다.',
        '동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게 서명할 수 있습니다.',
        'Google Drive, Dropbox, Box, One Drive에 저장되어 있 문서를 변환 없이 바로 업로드하여 이용하세요.',
        '내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드,공유하기, 삭제하기가 가능합니다.',
    ],
};

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Process />
            <StartNow />
            <InfoImgLeft infoProps={fistInfo} />
            <InfoImgRight infoProps={secondInfo} />
            <InfoImgLeft infoProps={thirdInfo} />
            <InfoImgRight infoProps={fourthInfo} />
            <EasyQuick />
            <FeatureImgRight featureProps={fistFeature} />
            <FeatureImgLeft featureProps={secondFeature} />
            <FeatureImgRight featureProps={thirdFeature} />
            <Reason />
            <Footer />
        </div>
    );
}

export default App;
