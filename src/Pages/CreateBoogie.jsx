import styled from 'styled-components';

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
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
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
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 0.8vw;
`;

const NameField = styled.input`
  display: flex;
  height: 3.1vw;
  padding: 0.8vw 1vw;
  align-items: center;
  gap: 0.5vw;
  align-self: stretch;
  width: 100%;
  border-radius: 0.5vw;
  border: 1px solid var(--gray-400, #dcdfe3);
  background: var(--gray-white, #fff);
  box-sizing: border-box;
`;

const CompleteButton = styled.button`
  margin-top: 13.9vw;
  display: flex;
  width: 100%;
  height: 3.1vw;
  padding: 0.5vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
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
`;

function CreateBoogie() {
  return (
    <>
      <HomeContainer>
        <TextContainer>
          <CreateText>
            부기볼을 <br />
            생성해주세요!
          </CreateText>
          <BoogieName>부기볼 이름</BoogieName>
          <NameField placeholder="생성할 부기볼의 이름을 입력해주세요."></NameField>
          <BoogieName style={{ marginTop: '2vw' }}>부기볼 참여 인원</BoogieName>
          <NameField placeholder="부기볼의 참여인원을 입력해주세요."></NameField>
          <CompleteButton>완료</CompleteButton>
        </TextContainer>
      </HomeContainer>
    </>
  );
}

export default CreateBoogie;
