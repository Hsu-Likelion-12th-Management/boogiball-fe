import styled from 'styled-components';
import { useState } from 'react';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-100, #f2f4f6);
  width: 100%;
  height: 100vh;
`;

const CreateText = styled.p`
  color: var(--main-blue, #002e6e);
  font-family: Pretendard;
  font-size: 2vw;
  font-weight: 700;
  margin-bottom: 5vw;
`;

const TextContainer = styled.div`
  margin-top: 4vw;
  width: 29vw;
`;

const BoogieName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4vw;
  font-weight: 700;
  margin-bottom: 0.8vw;
`;

const LinkField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.1vw;
  padding: 0.8vw 1vw;
  width: 100%;
  border-radius: 0.5vw;
  border: 1px solid var(--gray-400, #dcdfe3);
  background: var(--gray-white, #fff);
  font-size: 1vw;
  color: #333;
  box-sizing: border-box;
`;

const CompleteButton = styled.button`
  margin-top: 18vw;
  width: 100%;
  height: 3.1vw;
  border-radius: 0.5vw;
  background: var(--main-blue, #002e6e);
  color: var(--gray-white, #fff);
  font-family: Pretendard;
  font-size: 1.2vw;
  font-weight: 700;
  cursor: pointer;
`;

const CopyButton = styled.button`
  display: flex;
  width: 7.3vw;
  height: 2vw;
  justify-content: center;
  align-items: center;
  border-radius: 0.3vw;
  border: 1px solid var(--blue-100, #aec5e7);
  background: var(--gray-white, #fff);
  color: var(--blue-100, #aec5e7);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-weight: 700;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.8vw;
`;

const ModalMessage = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 1.8vw;
  padding: 0.5vw;
  border-radius: 8px;
  border: 1px solid var(--main-blue, #002e6e);
  background: var(--gray-white, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  color: var(--main-blue, #002e6e);
  font-family: Pretendard;
  font-size: 1vw;
  font-weight: 700;
  text-align: center;
  z-index: 1000;
  gap: 10px;
  flex-shrink: 0;
`;

function LinkBoogie() {
  const [link] = useState('https://your-backend-link.com');
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  return (
    <HomeContainer>
      <TextContainer>
        <CreateText>
          부기볼 링크가 <br />
          생성되었어요!
        </CreateText>
        <BoogieName>아래 링크를 복사해 부기볼을 공유하세요!</BoogieName>
        <LinkField>{link}</LinkField>
        <ButtonContainer>
          <CopyButton onClick={copyToClipboard}>링크 복사하기</CopyButton>
        </ButtonContainer>
        <CompleteButton>지금 생성한 부기볼 홈으로 바로가기</CompleteButton>
      </TextContainer>

      {isCopied && <ModalMessage>URL 복사가 완료되었습니다</ModalMessage>}
    </HomeContainer>
  );
}

export default LinkBoogie;
