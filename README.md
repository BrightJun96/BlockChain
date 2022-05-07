# BlockChain Project

### 개요

**프로젝트 컨셉**  
송금자와 수신자의 코인에 대한 **거래 내역**을 **채굴자**가 골라서 **해시값에 알맞는 논스값**을 형성하여 **블록을 생성**하고 **블록체인에 추가**한다.

**사용법**

1. 채굴자의 이름을 입력한다.
2. 코인에 대한 송금자와 수금자의 이름을 각각 입력한다.
3. 거래 내역인 pending transactions으로 이동한다.
4. Confirm 버튼을 누르면 채굴을 시작하며 블록을 생성한다.

### 기획

- 가상화폐를 규정 | **제브코인**이라고 지칭하며 이는 거래단위이다.
  **코인**을 통해서 거래를 할 수 있다.
  (예 : A가 B에게 제브코인 2개를 보내면 거래내역이 형성이 되며 보류중인 거래내역에 해당 거래가 추가가 된다.)

- 처음 코인의 시세는 **1000원**이다.
  코인의 시세는 **매수**할 때마다 **5원씩 증가** **매도**할 때마다 **5원씩 감소**한다.
  또한 채굴자에게 **코인이 지급**될 때마다 **2원씩 감소**한다.

- **코인 거래가 성사되면 새로운 블록이 생기고** 채굴자들은 새로운 블록에 대한 **해시값**을 맞춰야하고 **맞춘 채굴자**에게는 **코인**이 지급된다.
  즉, 블록을 생성한 채굴자는 해당 **블록에 대한 서명**이 있다.
- 모든 **블럭**에는 **코인 거래에 대한 정보**가 기입이 되어있다.

  **블럭에 들어가야할 정보**

  - 해시값
  - 이전 해시값

  - 해시값을 형성한 채굴자(작업 증명)
  - 블록이 형성된 시각
  - 거래내역
  - 논스값
  - 총 거래내역(양이 많을 수 있으니 따로 누르면 볼 수 있도록 하게 하기)

    **거래내역** | 거래가 성사된 시각, Sender& Reciever , 코인의 양 등등..

- **수수료**를 고려해야한다.
- 해당토큰을 **현금으로 전환**할 수도 있고 **특정 금융상품**에 이용할 수도 있다.
- 각 블록에 대한 채굴이 진행될 때 채굴중이라는 **로딩 UI** 만들기
- 여러 명의 채굴자들은 **보류중인 거래 내역** 중에서 골라서 채굴한다.
- 블록체인의 정보가 지워지지않도록 localStorage에 담는다.  
  (추후 데이터를 저장하기 위하여 MongoDB를 사용할 예정)

- 채굴자가 블록을 생성하면 최상단에서 알림이 나오도록 UI생성(알림 UI 3초동안 나와있다가 없어져야한다.)

- **여러 사용자**가 이용할 수 있도록 **WebSocket** 사용

- 채굴자에 대하여 **회원가입/로그인 페이지** 구성

### 해시값과 논스값

### 개발 순서

1. UI 구성
2. 상태값 분류(리덕스 사용)

### 사용 기술

- React
- TypeScript
- RTK(Redux Toolkit)

### Styling

스타일링은 **styledComponents**를 사용하여 styling할 예정이다.

- styledComponents

### 컴포넌트

다음은 각 컴포넌트에 **들어갈 내용 및 UI**에 대한 설명이다.

- 헤더 컴포넌트(Header.tsx)

  - 프로젝트 제목
  - 앱 조작에 대한 간략 설명
  - 보유중인 코인의 수 => **우측에 표시**

  - 코인시세(JevCoin Rate) => **우측에 표시**

  - 채굴자 이름

- 채굴자 입력란(Miner.tsx)
  Miner(채굴자)의 이름 입력란(따로 컴포넌트 만들 것)
  입력하면 **우측 상단**에(예 | Minor : 누구누구) 표시

- 거래 추가(AddTransaction.tsx)
  - 코인 송신자
  - 코인 수신자
  - 보낼 코인의 양
  - 코인 전송 버튼
- 보류중인 거래(PendingTransaction.tsx)  
  거래 추가 컴포넌트에서 생성된 **거래가 보류**될 장소
  - 블록 생성 버튼
- 블록체인(BlockChain.tsx)  
  각 블록들이 생성될 **블록체인**

  - 블록(Block.tsx)

    - (블록이 생성중일 때 로딩 UI 만들기)

전송 버튼과 블록 생성 버튼은 하나의 스타일드 컴포넌트로 만들 것

### 설치 라이브러리

### 추후에 추가할 기능

- 블록을 생성한 채굴자를 표시할 수 있도록 최상단에 알림 UI만들기(3초동안 나타났다가 없애지게 해야함.)
- 웹소켓을 사용하여 여러명의 채굴자가 이용할 수 있게 하기

# Getting Started with CRA,TypeScript,RTK

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
