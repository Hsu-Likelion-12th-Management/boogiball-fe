import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useParams로 paperId 가져오기
import Header from '../Components/Header';
import styled from 'styled-components';
import icon1 from '../Assets/message/icon1.svg';
import icon2 from '../Assets/message/icon2.svg';
import icon3 from '../Assets/message/icon3.svg';
import icon4 from '../Assets/message/icon4.svg';
import icon5 from '../Assets/message/icon5.svg';
import icon6 from '../Assets/message/icon6.svg';
import icon7 from '../Assets/message/icon7.svg';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MessageMain() {
  const [messages, setMessages] = useState([]);
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];
  const { paperId } = useParams(); // URL에서 paperId 가져오기
  const navigate = useNavigate();
  const name = localStorage.getItem('name');

  // 메시지 조회 API 호출 함수
  const fetchMessages = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await fetch(
        `https://bugi-ball.shop/api/paper/${paperId}/list`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log('Fetched messages:', responseData.data);
        setMessages(responseData.data || []);
      } else {
        console.error('Failed to fetch messages:', response.status);
        alert('본인 메세지만 볼 수 있습니다.');
        navigate("/BoogieMain");
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      alert('네트워크 에러가 발생했습니다.');
    }
  };

  // 컴포넌트가 처음 렌더링될 때 메시지 조회
  useEffect(() => {
    fetchMessages();
  }, [paperId]); // paperId 변경 시 다시 호출

  return (
    <>
      <Header title='나의 눈덩이' />

      <WholeContainer>
        <Wrapper>
          {messages.map((message, index) => {
            const randomIcon = icons[message.randomEmojiValue % icons.length]; // API의 randomEmojiValue에 따라 아이콘 선택
            return (
              <Content key={index}>
                <Icon src={randomIcon} alt={`icon-${index}`} />
                <MessageContent>{message.content}</MessageContent>
                <SenderName>- {message.name}</SenderName>
              </Content>
            );
          })}
        </Wrapper>
      </WholeContainer>
    </>
  );
}

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.62rem;
  justify-content: center;
  align-items: center;
  background: var(--gray-100, #f2f4f6);
  height: calc(100vh - 7vw);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: auto;
  max-height: calc(250px * 2 + 20px);
  overflow-y: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  padding: 30px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--gray-900, #242427);
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  border-radius: 10px;
  border: 1px solid var(--blue-200, #d6e6ff);
  background: var(--gray-white, #fff);
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const MessageContent = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--gray-900, #242427);
  font-family: Pretendard;
  text-align: center;
`;

const SenderName = styled.p`
  margin: 5px 0 0;
  font-size: 12px;
  color: var(--blue-300, #aec5e7);
  font-family: Pretendard;
  text-align: center;
`;
