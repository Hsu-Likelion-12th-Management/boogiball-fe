import Header from '../Components/Header';
import styled from 'styled-components';
import Add from '../Assets/Images/ic_addball_32.svg';
import EmptyBall from '../Assets/Images/img_emptyball.svg';
import Modal from '../Components/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import SnowBall from '../Assets/Images/img_madeball.svg';
import { useNavigate } from 'react-router-dom';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gray-100, #f2f4f6);
  height: calc(100vh - 7vw);
`;

const ContentContainer = styled.div`
  padding: 4.5vw 18.5vw 4.5vw 18.5vw;
`;

const Snow = styled.p`
  color: var(--gray-900, #242427);
  font-family: Pretendard;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const HighlightedText = styled.span`
  color: var(--main-blue, #002e6e);
  font-family: Pretendard;
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const ExplainText = styled.p`
  color: var(--blue-100, #aec5e7);
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CreateBtn = styled.button`
  width: 19vw;
  height: 3.1vw;
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
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.5vw;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const PlusBtn = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  display: inline-block;
  vertical-align: middle;
`;

const BallImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
  justify-content: center;
  align-items: center;
`;

const BallImg = styled.img`
  width: 35vw;
  height: 25vw;
`;

const Yet = styled.p`
  color: var(--blue-100, #aec5e7);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

const SnowBallWrapper = styled.div`
  position: relative;
  width: 12.5vw;
  height: 15.7vw;
`;

const SnowBalls = styled.img`
  width: 100%;
  height: 100%;
`;

const SnowBallName = styled.div`
  position: absolute;
  bottom: 20%;
  left: 47%;
  transform: translateX(-50%);
  color: var(--main-blue, #002e6e);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const SnowBallCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
`;

const SnowBallRow = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
`;

function BoogieMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [papers, setPapers] = useState([]);
  const accessToken = localStorage.getItem('accessToken');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const handleSnowBallClick = async (paperId, name) => {
    const result = await checkWritePermission(paperId);

    if (result.isWritable) {
      navigate(`/WriteMessage/${paperId}`, { state: { name } });
    } else {
      alert(result.message);
    }
  };

  const checkWritePermission = async (paperId) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await fetch(
        `https://bugi-ball.shop/api/paper/${paperId}/check`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        return { isWritable: true }; // 작성 가능
      } else {
        const responseData = await response.json();
        return {
          isWritable: false,
          message: responseData.message || '작성할 수 없습니다.', // 응답 메시지
          code: responseData.code, // 에러 코드
        };
      }
    } catch (error) {
      console.error('Error checking write permission:', error);
      return {
        isWritable: false,
        message: '네트워크 오류가 발생했습니다. 다시 시도해주세요.',
      };
    }
  };

  const fetchPaperList = async () => {
    try {
      const response = await fetch('https://bugi-ball.shop/api/paper/list', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json(); // 응답 데이터 전체
        console.log('Fetched paper list:', responseData);

        setPapers(responseData.data || []);
      } else {
        console.error('Failed to fetch paper list:', response.status);
        alert('리스트를 불러오지 못했습니다.');
        setPapers([]);
      }
    } catch (error) {
      console.error('Error fetching paper list:', error);
      alert('네트워크 에러가 발생했습니다.');
      setPapers([]);
    }
  };

  useEffect(() => {
    fetchPaperList();
  }, []);

  const createSnowballPage = async () => {
    try {
      const response = await fetch('https://bugi-ball.shop/api/paper', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Snowball page created successfully:', data);

        setIsModalOpen(true);
        fetchPaperList();
      } else {
        console.error('Failed to create snowball page:', response.status);
        alert('페이지 생성에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error creating snowball page:', error);
      alert('에러가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const chunkArray = (array = [], size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const paperRows = chunkArray(papers, 5);

  return (
    <>
      <Header title="부기볼명이 적히는 곳" />

      <WholeContainer>
        <ContentContainer>
          <RowContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Snow>
                <HighlightedText>부기볼명</HighlightedText> 에 생성된
                눈덩이들이에요
              </Snow>
              <ExplainText>눈덩이를 클릭하여 메세지를 남겨보세요!</ExplainText>
            </div>
            <CreateBtn onClick={createSnowballPage}>
              <PlusBtn src={Add} />내 눈덩이 페이지 생성하기
            </CreateBtn>
          </RowContainer>

          {papers.length === 0 ? (
            <BallImageContainer>
              <BallImg src={EmptyBall} />
              <Yet>아직 부기볼에 눈덩이 메세지가 없어요</Yet>
            </BallImageContainer>
          ) : (
            <SnowBallCon>
              {paperRows.map((row, rowIndex) => (
                <SnowBallRow key={rowIndex}>
                  {row.map((paper) => (
                    <SnowBallWrapper key={paper.paperId}>
                      <SnowBalls
                        src={SnowBall}
                        alt={paper.name || 'Snowball'}
                        onClick={() =>
                          handleSnowBallClick(paper.paperId, paper.name)
                        }
                      />
                      <SnowBallName>{paper.name}</SnowBallName>
                    </SnowBallWrapper>
                  ))}
                </SnowBallRow>
              ))}
            </SnowBallCon>
          )}
        </ContentContainer>
      </WholeContainer>

      {/* 모달 컴포넌트 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default BoogieMain;
