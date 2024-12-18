import backgroundImage from '../Assets/Images/img_bg_1.svg';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative; /* 부모 요소에 position 설정 */
`;

const LoginBtn = styled.button`
  position: absolute; /* 버튼의 위치를 절대값으로 설정 */
  bottom: 5%; /* 화면 하단에서 10% 위에 배치 */
  left: 50%;
  transform: translateX(-50%);
  width: 19vw;
  height: 3.1vw;
  border-radius: 0.5vw;
  background: #fee500;
  font-weight: 700;
  font-size: 1.2vw;
  color: #000;
  cursor: pointer;
`;

function Home() {
  const REST_API_KEY = 'bb1570fed92af8a563be875549491f3b';
  const REDIRECT_URI = 'localhost:3000/';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <HomeContainer>
      <LoginBtn onClick={loginHandler}>카카오 로그인</LoginBtn>
    </HomeContainer>
  );
}

export default Home;
