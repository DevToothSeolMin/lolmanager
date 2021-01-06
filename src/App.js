import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <b>Lol Manager History</b>
        </div>
        <div>
        <a
          className="link"
          href="https://www.fmkorea.com/3307275264"
          target="_blank"
          rel="noopener noreferrer"
        >
          롤 FM을 만들어보려는데 여러분의 도움이 필요합니다
        </a>
        </div>
        <div>
        <a
          className="link"
          href="https://www.fmkorea.com/3308701344"
          target="_blank"
          rel="noopener noreferrer"
        >
          롤 FM 제작하기 - 1
        </a>
        </div>
        <div>
          <b>스텟</b>
          피지컬 : 반응속도, CS수급, 타고난 체력, 지구력, 연습량*

          테크니컬 : 시야, 판단력, 속도, 집중력, 천재성*

          멘탈 : 소통, 적극성, 침착성, 대담성, 리더쉽*

          히든 : 야망*, 기복*, 승부욕*, 적응력*, 큰경기*
        </div>
        <div>
          <b>Todo List</b>

          1. 선수별 데이터베이스 입력페이지 개발 - Mongo DB 또는 MySQL 사용

          2. 무작위 데이터베이스로 게임엔진 및 시스템 개발 - 웹 서버 기반 Node.JS 사용

          3. 선수 데이터베이스로 게임엔진을 연결하여 작동 가능한 1차 프론트 페이지 개발 - React 및 Nginx 사용

          4. 웹 페이지 + 모바일 페이지 동시 사용 가능 프론트 페이지 개발 - React Native 사용

          5. 커스텀 데이터베이스 수정하여 게임 플레이 가능하도록 개발 및 UI 개선 - React 및 React Native

          6. 컨텐츠 추가 - 개인훈련, 팀 연습, 리그, 컵대회, 일정, 에이징커브 등등

        </div>
      </header>
    </div>
  );
}

export default App;
