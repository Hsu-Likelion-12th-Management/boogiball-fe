import Header from '../Components/Header';
import styled from 'styled-components';
import Add from '../Assets/Images/ic_addball_32.svg';
import EmptyBall from '../Assets/Images/img_emptyball.svg';
import Modal from '../Components/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import SnowBall from '../Assets/Images/img_madeball.svg';
import { useNavigate } from 'react-router-dom';
import YellowBall from '../Assets/Images/img_madeball (1).svg';
import EndModal from '../Components/EndModal';
import { useLocation } from 'react-router-dom';

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
  background: ${({ isFinished }) =>
    isFinished ? 'var(--gray-600, #ADB3BA)' : 'var(--main-blue, #002e6e)'};
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
  cursor: ${({ isFinished }) => (isFinished ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ isFinished }) => (isFinished ? 'none' : 'auto')};
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  const [modalData, setModalData] = useState(null);
  const [isPageCreated, setIsPageCreated] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [selectedPaperName, setSelectedPaperName] = useState('');
  const [selectedPaperId, setSelectedPaperId] = useState(null);
  const location = useLocation(); // state 가져오기
  const { name } = location.state || {}; // location.state에서 name 추출

  const getCreatedUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch(`https://bugi-ball.shop/api/paper/check`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      console.log(data.data);
      if(data.data.isExit) {
        setIsPageCreated(true);
      }
    } catch(e) {
      console.error(e);
    }
  }
  
  const fetchFinishStatus = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch('https://bugi-ball.shop/api/paper/finish', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      console.log(data.data);
      console.log(data.data.isFinish);

      if (data.data.isFinish) {
        setIsFinished(true); // 200 응답 시 회색 버튼 상태로 전환
      } else {
        setIsFinished(false); // 응답이 200이 아니면 파란색으로 유지
      }
    } catch (error) {
      console.error('Error fetching finish status:', error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const handleSnowBallClick = async (paperId, name, isFinished, isMine) => {
    if (isMine) {
      // 자신의 눈덩이인 경우 MessageMain으로 이동
      localStorage.setItem('name', name);
      const name = localStorage.getItem('name');
      console.log("name", name);
      setSelectedPaperId(paperId);
      navigate(`/MessageMain/${paperId}`); // 자신의 메시지 보기
      return;
    }

    if (isFinished) {
      // 남의 눈덩이인 경우 EndModal 표시
      setSelectedPaperId(paperId);
      setSelectedPaperName(name);
      setIsEndModalOpen(true);
      return;
    }

    const { isWritable, message } = await checkWritePermission(paperId);

    if (!isWritable) {
      alert(message || '이 눈덩이에는 이미 메시지를 작성했습니다.');
      return;
    }

    navigate(`/WriteMessage/${paperId}`, { state: { name } });
  };

  const checkWritePermission = async (paperId) => {
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
          message: responseData.message || '작성할 수 없습니다.',
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
        const responseData = await response.json();
        setPapers(
          responseData.data.map((paper) => ({
            ...paper,
            isFinished: paper.isFinish || false, // API 응답에 따라 초기 상태 설정
            isMine: paper.isMine || false, // 내 눈사람 여부 추가
          }))
        );
      } else {
        console.error('Failed to fetch paper list:', response.status);
      }
    } catch (error) {
      console.error('Error fetching paper list:', error);
    }
  };

  useEffect(() => {
    fetchFinishStatus();
    fetchPaperList();
    getCreatedUser();
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

        setModalData(data.data); // 모달에 사용할 데이터 저장
        setIsModalOpen(true); // 모달 열기
        // setIsPageCreated(true); // 생성 성공 상태 변경
        fetchPaperList(); // 페이지 목록 갱신
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

  const handlePageClose = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await fetch('https://bugi-ball.shop/api/paper/finish', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json(); // 응답 데이터 활용
        const currentPaperId = data?.paperId; // 작성 종료된 paperId 가져오기

        setPapers((prevPapers) =>
          prevPapers.map((paper) =>
            paper.paperId === currentPaperId
              ? { ...paper, isFinished: true } // 해당 paper만 isFinished 업데이트
              : paper
          )
        );
        setIsFinished(true); // 작성 종료 상태 업데이트
        setModalData({
          name: modalData?.name || '알 수 없는 사용자',
          type: 'finished', // 작성 종료 모달로 구분
        });
        setIsModalOpen(true); // 모달 열기
      } else {
        alert('작성 종료에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error finishing snowball page:', error);
      alert('네트워크 에러가 발생했습니다.');
    }
  };

  const paperRows = chunkArray(papers, 5);

  return (
    <>
      {/* <Header title='멋쟁이 사자처럼 12기' /> */}
      <Header title={`${name}님의 눈덩이`} />

      <WholeContainer>
        <ContentContainer>
          <RowContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Snow>
                <HighlightedText>멋쟁이사자처럼 12기</HighlightedText>에 생성된
                눈덩이들이에요
              </Snow>
              <ExplainText>눈덩이를 클릭하여 메세지를 남겨보세요!</ExplainText>
            </div>
            <CreateBtn
              isFinished={isFinished}
              onClick={
                isFinished
                  ? undefined
                  : isPageCreated
                  ? handlePageClose
                  : createSnowballPage
              }
            >
              {!isPageCreated && !isFinished && <PlusBtn src={Add} />}
              {isFinished
                ? '작성 종료됨'
                : isPageCreated
                ? '내 눈덩이 작성 종료'
                : '내 눈덩이 페이지 생성하기'}
            </CreateBtn>
          </RowContainer>

          {papers.length === 0 ? (
            <BallImageContainer>
              <BallImg src={EmptyBall} />
              <Yet>아직 부기볼에 눈덩이 메세지가 없어요</Yet>
            </BallImageContainer>
          ) : (
            <SnowBallCon>
              {/* {paperRows.map((row, rowIndex) => (
                <SnowBallRow key={rowIndex}>
                  {row.map((paper) => (
                    <SnowBallWrapper key={paper.paperId}>
                      <SnowBalls
                        src={paper.isFinished ? YellowBall : SnowBall}
                        alt={paper.name || 'Snowball'}
                        onClick={() =>
                          handleSnowBallClick(
                            paper.paperId,
                            paper.name,
                            paper.isFinished,
                            paper.isMine
                          )
                        }
                      />

                      <SnowBallName>{paper.name}</SnowBallName>
                    </SnowBallWrapper>
                  ))}
                </SnowBallRow>
              ))} */}
              {papers.map((item, index) => {
                return (
                  <SnowBallWrapper key={index}>
                    <SnowBalls
                      src={item.isFinished ? YellowBall : SnowBall}
                      alt={item.name || 'Snowball'}
                      onClick={() =>
                        handleSnowBallClick(
                          item.paperId,
                          item.name,
                          item.isFinished,
                          item.isMine
                        )
                      }
                    />
                    <SnowBallName>{item.name}</SnowBallName>
                  </SnowBallWrapper>
                )
              })}
            </SnowBallCon>
          )}
        </ContentContainer>
      </WholeContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={modalData?.name || '알 수 없는 사용자'}
        type={modalData?.type || 'created'} // type에 따라 텍스트 변경
      />

      <EndModal
        isOpen={isEndModalOpen}
        onClose={() => setIsEndModalOpen(false)}
        name={selectedPaperName}
        onConfirm={() => {
          setIsEndModalOpen(false);
          if (selectedPaperId) {
            navigate(`/MessageMain/${selectedPaperId}`);
          }
        }}
      />
    </>
  );
}

export default BoogieMain;
