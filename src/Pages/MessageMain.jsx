import React, { useState } from 'react';
import Header from '../Components/Header';
import styled from 'styled-components';
import icon1 from '../Assets/message/icon1.svg';
import icon2 from '../Assets/message/icon2.svg';
import icon3 from '../Assets/message/icon3.svg';
import icon4 from '../Assets/message/icon4.svg';


export default function MessageMain() {
    const [cnt, setCnt] = useState(9);
    const icons = [icon1, icon2, icon3, icon4]; // 아이콘 배열
  
    const contents = Array(cnt).fill(
      '메세지를 남겨주세요! 한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요. 메세지를 남겨주세요! 한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요. 메세지를 남겨주세요! 한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.메세지를 남겨주세요! 한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.메세지를 남겨주세요! 한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.메세지를 남겨주세요!한  번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.메세지를 남겨주세요! 한 번 업로드하면 수정할 수 없으니 신중하게 작성해주세요.'
    );
  
    return (
      <>
        <Header />
  
        <WholeContainer>
          <Wrapper>
            {contents.map((item, index) => {
              const randomIcon = icons[Math.floor(Math.random() * icons.length)]; // 랜덤 아이콘 선택
              return (
                <Content key={index}>
                  <Icon src={randomIcon} alt={`icon-${index}`} />
                  {item}
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
  line-height: 150%; /* 18px */
  border-radius: 10px;
  border: 1px solid var(--blue-200, #D6E6FF);
  background: var(--gray-white, #FFF);
`;

const Icon = styled.img`
  width: 40px; /* 아이콘 크기 */
  height: 40px;
  margin-bottom: 10px; /* 텍스트와 간격 */
`;