import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KakaoLoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      console.log('인가 코드:', authorizationCode);

      // 백엔드로 POST 요청 (인가 코드 전달)
      axios
        .post('/api/auth/kakao', { authorizationCode }) // 프록시 설정 사용
        .then((response) => {
          console.log('로그인 성공:', response.data);

          const { accessToken } = response.data.data;
          localStorage.setItem('accessToken', accessToken);

          // BoogieMain 페이지로 이동
          navigate('/BoogieMain');
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
          alert('로그인에 실패했습니다.');
        });
    } else {
      console.error('Authorization code가 없습니다.');
      alert('로그인 정보가 올바르지 않습니다.');
    }
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>카카오 로그인 처리 중...</h2>
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
}

export default KakaoLoginCallback;
