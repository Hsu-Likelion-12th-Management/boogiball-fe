import React from 'react';
import styled from 'styled-components';
import SnowMan from '../Assets/Images/img_makeball.svg';
import YellowMan from '../Assets/Images/Frame 18.svg';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 29vw;
  height: 24.2vw;
  border-radius: 0.8vw;
  background: var(--gray-white, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  color: var(--gray-900, #242427);
`;

const ModalTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const SnowManImg = styled.img`
  width: 20vw;
  height: 17vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
  margin-top: 2vw;
`;

const YesBtn = styled.button`
  display: flex;
  width: 12.25vw;
  height: 3.1vw;
  padding: 0.5vw;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0.5vw;
  background: var(--gray-900, #242427);
  color: var(--gray-white, #fff);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;

const NoBtn = styled.button`
  display: flex;
  width: 12.25vw;
  height: 3.1vw;
  padding: 0.5vw;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0.5vw;
  background: var(--gray-600, #adb3ba);
  color: var(--gray-white, #fff);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  border: none;
`;
const EndModal = ({ isOpen, onClose, name, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ColumnContainer>
          <ModalTitle>Notice</ModalTitle>
          <SnowManImg src={YellowMan} />
        </ColumnContainer>
        <RowContainer>
          <NoBtn onClick={onClose}>아니오</NoBtn>
          <YesBtn onClick={onConfirm}>예</YesBtn>
        </RowContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EndModal;
