import Header from '../Components/Header';
import styled from 'styled-components';
import Add from '../Assets/Images/ic_addball_32.svg';
import EmptyBall from '../Assets/Images/img_emptyball.svg';
import Modal from '../Components/Modal';
import { useState } from 'react';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gray-100, #f2f4f6);
  height: 100vh;
`;

const ContentContainer = styled.div`
  padding: 4.5vw 18.5vw 4.5vw 18.5vw;
`;

const Snow = styled.p`
  color: var(--gray-900, #242427);
  font-family: Pretendard;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const HighlightedText = styled.span`
  color: var(--main-blue, #002e6e);
  font-family: Pretendard;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const ExplainText = styled.p`
  color: var(--blue-100, #aec5e7);
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CreateBtn = styled.button`
  width: 19vw;
  height: 3.1vw;
  flex-shrink: 0;
  border-radius: 0.5vw;
  background: var(--main-blue, #002e6e);
  color: var(--gray-white, #fff);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.5vw;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const PlusBtn = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  width: 1.6vw;
  height: 1.6vw;
  display: inline-block;
  vertical-align: middle;
`;

const BallImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
  justify-content: center;
  align-items: center;
`;

const BallImg = styled.img`
  width: 35vw;
  height: 25vw;
`;

const Yet = styled.p`
  color: var(--blue-100, #aec5e7);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

function BoogieMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />

      <WholeContainer>
        <ContentContainer>
          <RowContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Snow>
                <HighlightedText>부기볼명</HighlightedText> 에 생성된
                눈덩이들이에요
              </Snow>
              <ExplainText>눈덩이를 클릭하여 메세지를 남겨보세요!</ExplainText>
            </div>
            <CreateBtn onClick={openModal}>
              <PlusBtn src={Add} />내 눈덩이 페이지 생성하기
            </CreateBtn>
          </RowContainer>

          <BallImageContainer>
            <BallImg src={EmptyBall} />
            <Yet>아직 부기볼에 눈덩이 메세지가 없어요</Yet>
          </BallImageContainer>
        </ContentContainer>
      </WholeContainer>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default BoogieMain;
