import styled from 'styled-components';
import backgroundImage from '../Assets/Images/img_bg_gra.png';
import snowball from '../Assets/Images/img_bg.svg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체 높이 */
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 54vw;
  background: linear-gradient(180deg, #dfecff 0%, #adceff 100%);
`;

const SnowBack = styled.div`
  background-image: url(${snowball});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vw;
  max-height: 100vh;
  position: fixed;
  bottom: 15%;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 15.9vw;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10; /* 다른 요소 위에 표시 */
`;

function BoogieHome() {
  return (
    <PageContainer>
      <HomeContainer>
        <SnowBack></SnowBack>
      </HomeContainer>
      <BottomSection></BottomSection>
    </PageContainer>
  );
}

export default BoogieHome;
