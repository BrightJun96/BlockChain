# BlockChain Project

## **프로젝트 컨셉**

블록체인 시스템에 기반하여 일정 코인을 유치하여 채굴할 수 있도록 하며 코인을 이용하여 NFT 상품을 거래할 수 있다.

## 페이지 구성

- **Miner Page**  
  **코인을 채굴**할 수 있는 페이지이다.  
  **채굴자**는 **코인거래 내역**을 골라서 **해시값에 알맞는 논스값**을 형성하여 **블록을 생성**하고 **블록체인에 추가**한다.

- **Wallet Page**  
  **코인을 구매**할 수 있는 페이지이다.  
   일정 코인을 플랫폼에 유치하여 코인을 채굴을 할 수 있다.

- **NFT Page**  
  **NFT 상품을 판매**하는 페이지이다.  
  보유한 코인으로 NFT 상품을 살 수 있다.  
  **NFT 상품 테마** | **미정**

- **Auth Page**  
  **회원가입 및 로그인**을 할 수 있는 페이지이다.

- (추가 기획 예정)...

## 해시 생성

[**SubtleCrypto API**](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)를 사용하여 해시 생성 및 crypto 관련 기능을 사용한다.

## 채굴 페이지(MinerPage) 사용법

1. 채굴자의 이름을 입력한다.

2. 매도자 , 매수자 , 보낼 코인의 양을 각각 입력하고 Register버튼을 누른다.

3. Register버튼을 누르면 해당 거래는 거래내역인 pending transactions으로 이동한다.

4. 채굴자는 pending transactions중 원하는 거래내역을 선택하여 Generate 버튼을 눌러 채굴을 시작하고 블록을 생성한다.

## 기획

- 가상화폐 규정  
  **제브코인**이라고 지칭하며 이는 거래단위이며 **해당 코인**을 통해서 거래를 할 수 있다.  
  (예 : A가 B에게 제브코인 2개를 보내면 거래내역이 형성이 되며 보류중인 거래내역에 해당 거래가 추가가 된다.)

- 임의의 시간마다 거래가 이루어지게 한다.  
  (30초에서 60초사이에 랜덤으로 거래가 이루어지게 한다. **SetInterval** 활용)

- 처음 코인의 시세는 **1000원**이다.
  코인의 시세는 **거래될 때마다 3원씩 증가하며** **채굴될 때마다** **2원씩 감소**한다.

- 채굴자가 해당 거래를 채굴하기 시작하면 새로운 블록에 대한 **해시값**을 맞춰야하고 **맞춘 채굴자**에게는 **코인**이 지급된다.  
  생성된 블럭에는 **채굴자의 서명**이 있다.
- 모든 **블럭**에는 **코인 거래에 대한 정보**가 기입이 되어있다.  
  블럭에 들어가야할 정보는 다음과 같다.

- **블럭에 들어가야할 정보**

  - 해시값
  - 이전 해시값

  - 해시값을 형성한 채굴자(작업 증명)
  - 블록이 형성된 시각
  - 거래내역(매도자 , 매수자 , 보낸 코인의 양 , 거래 시각)
  - 논스값

- **수수료**를 고려해야한다.
- 해당 토큰을 **NFT 상품에 이용**할 수 있다.
- 각 블록에 대한 채굴이 진행될 때 채굴중이라는 **로딩 UI** 만든다.
- 여러 명의 채굴자들은 **보류중인 거래 내역** 중에서 골라서 채굴한다.
- 블록체인의 정보가 지워지지않도록 localStorage나 데이터베이스에 담는다.

- 채굴자가 블록을 생성하면 최상단에서 알림이 나오도록 UI생성(알림 UI 3초동안 나와있다가 없어져야한다.)

- **여러 사용자**가 이용할 수 있도록 **WebSocket**을 사용한다.

- **회원가입/로그인 페이지** 구성한다.

- (추가 기획 예정)...

### 사용 기술

- React
- TypeScript
- RTK(Redux Toolkit)
- ReactQuery
- express
- MongoDB
- AWS
- styled-components(styling)

## MinerPage 컴포넌트

다음은 MinerPage에서 각 컴포넌트에 **들어갈 내용 및 UI**에 대한 설명이다.

- **헤더 컴포넌트(Header.tsx)**

  - 프로젝트 제목
  - 앱 조작에 대한 간략 설명
  - 보유중인 코인의 수

  - 코인시세(JevCoin Rate)

  - 채굴자 이름

- **채굴자 입력란(MinerInput.tsx)**  
  Miner(채굴자)의 이름을 입력하면 **헤더 컴포넌트의 우측 상단**에 표시

- **거래 추가(AddTransaction.tsx)**

  - 코인 송신자
  - 코인 수신자
  - 보낼 코인의 양
  - 코인 전송 버튼(Register)

- **보류중인 거래(PendingTransaction.tsx)**  
  거래 추가 컴포넌트에서 생성된 **거래가 보류**될 장소  
  AddTransaction 컴포넌트의 거래 내역이 해당 컴포넌트로 전송되며 AddTransaction의 상태값을 사용하면 된다.  
  **Generate 버튼을 누르면 채굴을 시작**한다.

- 블록체인(BlockChain.tsx)  
  각 블록들이 생성될 **블록체인** 컴포넌트이다.  
  블록(Block.tsx)은 여러 컴포넌트에서 사용한 상태값들을 가져와서 사용한다.  
  블록이 생성중일 때 로딩 UI를 만든다.

### 상태값

다음은 **프로젝트에서 사용할 상태값**들을 정리한 것이다.  
상태관리도구는 관리해야할 **상태값이 다양하며 전역적으로 사용해야할 상태값도 많기 때문에** **redux**를 사용한다.

**Header.tsx**

- **코인 시세**  
  코인을 매수,매도,채굴할 때마다 유동적으로 코인시세가 바뀌어야하기 때문에 상태값으로 사용해야한다.

- **보유중인 코인의 수**  
  채굴함에 따라 코인의 수가 유동적으로 바뀌어야하기 때문에 상태값으로 사용해야한다.

**MinerInput.tsx**

- **채굴자 이름**  
   다른 컴포넌트에서의 입력값을 가져오며 유동적으로 바뀌어야하기 때문에 상태값으로 사용해야한다.  
  MinerInput 컴포넌트의 입력값으로 사용한다.

**AddTransaction**

- AddTransaction 컴포넌트의 **Sender,Recipient,Amount**를 상태값으로 사용해야한다.  
  PendingTransaction 컴포넌트와 Block 컴포넌트로 전달해줘야하기 때문이다.
  3개의 인풋을 관리할 것이므로 **하나의 객체인 상태로 관리**한다.

**Block.tsx**

- 해시값
- 이전 해시값
- 논스값
- ...

#### 상태값 Slice 분류

- coinSlice  
  코인에 관련한 상태값을 관리하는 Slice

- minerSlice  
  채굴자명을 관리하는 상태값을 관리하는 Slice

- hashSlice  
  해시값과 논스값에 대한 상태값을 관리하는 Slice

- ...

### 설치 라이브러리

- react-router-dom
- styled-components

### 추후에 추가할 기능

- 블록을 생성한 채굴자를 표시할 수 있도록 최상단에 알림 UI만들기(3초동안 나타났다가 없애지게 해야함.)

- 웹소켓을 사용하여 여러명의 채굴자가 이용할 수 있게 하기

- Wallet Page

- Auth Page

- NFT Page

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
