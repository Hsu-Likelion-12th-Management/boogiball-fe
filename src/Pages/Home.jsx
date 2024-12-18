import backgroundImage from '../Assets/Images/img_bg_1.svg';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const LoginBtn = styled.button`
  position: absolute;
  bottom: 5%;
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
  border: none;
`;

function Home() {
  const handleLogin = () => {
    const clientId = '9d19218f8e200ee0986f321c7a5843e3'; // 카카오 REST API 키
    // const redirectUri = 'http://localhost:8080/api/auth/kakao/callback'; // 로컬용
    const redirectUri = 'https://bugi-ball.shop/api/auth/kakao/callback'; // 배포용
    const responseType = 'code'; // OAuth 인증 코드 요청
    const scope = 'profile_nickname,profile_image'; // 요청할 동의항목

    // 카카오 OAuth 인증 URL 생성
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    // 브라우저를 카카오 인증 URL로 리다이렉트
    window.location.href = kakaoAuthUrl;
  };

  return (
    <HomeContainer>
      <LoginBtn onClick={handleLogin}>카카오 로그인</LoginBtn>
    </HomeContainer>
  );
}

export default Home;
