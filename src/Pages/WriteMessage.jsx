import Header from '../Components/Header';
import styled from 'styled-components';
import SendModal from './SendModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WriteMessage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageContent, setMessageContent] = useState(''); // messageContent 상태 추가
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    const accessToken = localStorage.getItem('authToken'); // AccessToken 불러오기

    if (!accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!messageContent.trim()) {
      alert('메세지를 입력해주세요.');
      return;
    }

    const requestBody = {
      paperId: 1, // 요청에 필요한 paperId
      content: messageContent, // messageContent를 보내기
    };

    try {
      const response = await axios.post('https://bugi-ball.shop/api/message', requestBody, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
    
      if (response.status === 200) {
        setIsModalOpen(true); // 성공 시 모달 열기
      } else {
        alert('메세지 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('메세지 전송 중 오류 발생:', error);
      alert('메세지 전송에 실패했습니다. 다시 시도해주세요.');
    }
    
  };

  
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
        <MessageContainer placeholder={`메세지를 남겨주세요!\n한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.`} 
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)} />
        <Button onClick={handleSendMessage}>메시지 전달하기</Button>

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