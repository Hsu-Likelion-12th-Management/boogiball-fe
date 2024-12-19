import Header from '../Components/Header';
import styled from 'styled-components';
import SendModal from './SendModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WriteMessage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (isModalOpen) {
        const timer = setTimeout(() => {
          navigate('/MessageMain');
        }, 2000);
  
        return () => clearTimeout(timer);
      }
    }, [isModalOpen, navigate]);

  return (
    <>
      <Header />

      <WholeContainer>
        <MessageContainer placeholder={`메세지를 남겨주세요!\n한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.`} />
        <Button onClick={() => setIsModalOpen(true)}>메시지 전달하기</Button>

        {isModalOpen && (
          <SendModal
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </WholeContainer>
    </>
  );
}

export default WriteMessage;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.62rem;
  justify-content: center;
  align-items: center;
  background: var(--gray-100, #f2f4f6);
  height: calc(100vh - 7vw);
`;

const MessageContainer = styled.textarea`
  display: flex;
  width: 35rem;
  height: 20rem;
  padding: 60px 2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid var(--blue-100, #AEC5E7);
  background: rgba(214, 230, 255, 0.30);
  color: var(--blue-100, #AEC5E7);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  resize: none;

  &::placeholder {
    color: var(--blue-100, #AEC5E7);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
  }

  &:focus {
    border: 1px solid var(--main-blue, #002E6E);
    color: black;
    outline: none;
  }
`;

const Button = styled.div`
  display: flex;
  width: 30rem;
  height: 2rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: var(--main-blue, #002E6E);
  color: var(--gray-white, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  cursor: pointer;
`;