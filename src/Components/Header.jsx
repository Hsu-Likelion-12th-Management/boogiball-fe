import styled from 'styled-components';
import Home from '../Assets/Images/ic_home.svg';
import People from '../Assets/Images/ic_people_w.svg';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vw;
  background: var(--main-blue, #002e6e);
  padding-right: 18.5vw;
  padding-left: 18.5vw;
  align-items: center;
  box-sizing: border-box;
  justify-items: center;
`;

const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 19.7vw;
  align-items: center;
  width: 100%;
`;

const HomeImg = styled.img`
  width: 4vw;
  height: 3.5vw;
`;

const Title = styled.p`
  color: var(--gray-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
  white-space: nowrap;
`;

const PeopleImg = styled.img`
  width: 4vw;
  height: 4vw;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          <HomeImg src={Home} alt="Home" />
          <Title>부기볼명이 적히는 곳</Title>
          <PeopleImg src={People} alt="People" />
        </HeaderNav>
      </HeaderContainer>
    </>
  );
}

export default Header;
