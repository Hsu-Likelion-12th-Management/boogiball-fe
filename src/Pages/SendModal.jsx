import React from 'react';
import styled from 'styled-components';
import snowman from '../Assets/Images/img_makeball.svg'
export default function SendModal({ onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Message>NOTICE</Message>
        <img src={snowman} style={{width: "270px", height:"200px"}}/>
        <Message>메세지 전달이 완료되었습니다!</Message>
      </ModalContent>
    </ModalOverlay>
  );
}


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
width: 100%;
height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
width: 400px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  background: white;
  border: 1px solid var(--blue-100, #AEC5E7);
  border-radius: 0.625rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Message = styled.div`
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 36px */
`;

