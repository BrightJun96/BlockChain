# 블록체인

## 블록체인이란?

### 블록체인

**블록체인**이란 검증된 거래 데이터를 **블록 단위**로 나누고 이 블록들을 **사슬**처럼 연결한 완전한 **하나의 데이터구조**이다.

블록체인에서 **블록**은 **거래 데이터가 기록**되는 장부와 같다. 즉 , **블록**은 **개인과 개인의 거래 데이터가 기록되는 장부**와 같다. **블록**은 금융 거래, 투표 결과, 의료 기록 등 **모든 유형의 데이터를 저장**할 수 있다. 각 **블록**에는 데이터뿐만 아니라 **타임 스탬프, 자체 해시값 및 이전 블록의 해시값도 저장**된다.

일반적인 블록체인은 개인이나 회사가 데이터를 제어하거나 소유하지 않기 때문에 **데이터가 분산**되어 있다. 거래정보를 특정 중앙 서버에 데이터를 보관하는 전통적인 방식과 달리 블록체인은 **P2P 네트워크**로 모든 유저에게 **데이터를 분산**해서 **기록**하고 **공동으로 관리(탈중앙화 방식)**한다.
네트워크의 각 노드들은 **데이터베이스를 공유하고 계속 동기화** 할 수 있다.

블록체인은 이러한 중앙 서버가 없는 **탈중앙화 방식을 추구**하는 장점 덕분에 **한 노드에 장애가 생긴다해도 큰 문제가 발생하지 않는다.**

**또한 블록체인내에서 거래 내역에 대한 수정이나 조작은 불가능**하다.
각 블록에는 모든 블록의 거래내역 데이터들이 저장되어있다. 때문에 이를 거래내역 데이터를 조작하기 위해서는 모든 블럭의 데이터를 위조해야한다. 이 때문에 위조하기 힘든 것이다.

암호화폐를 채굴하는 방법은 블록 정보에 **수학적 공식을 적용하여 해시 값으로 바꾸는 방법**을 사용한다. 블록체인 네크워크의 일부 노드가 수학 문제를 해결하면 새 블록을 추가하며 **이에 대한 보상으로 코인**을 얻게 된다.

블록체인 서비스는 여러 가지 서비스에서 쓰일 수 있지만 **현재 대부분 암호화폐에 대한 거래**를 중심으로 한 서비스들이 이루어지고 있다. 때문에 대부분 사람들은 블록체인과 암호화폐의 개념을 동일시 하는 경향이 있다.

### 암호화폐

암호화폐는 전통적인 화폐 대신 **디지털 플랫폼**에서 이루어지는 **결제 시스템**이다.
모든 거래는 암호화되어 제 **3자 기관의 개입 없이** 거래의 신뢰성을 확보할 수 있다.

블록체인에서 암호화폐가 발행되는 과정을 **채굴**이라한다.
모든 거래의 정확성을 확인하기 위해서는 누군가 이 계산을 수행하고 일정 기간마다 거래 승인을 해줘야한다. 이 시스템을 유지하는 **채굴자는 보상으로 블록체인(비트코인)**을 받는다.

위에서 말하는 **채굴**이란 **특정 해시값**을 찾기위해 수없이 많은 연산을 반복해 **해당 목표값을 얻는 것**을 말한다. 많은 채굴자들이 **유효한 해시값**을 생성하기 위해 경쟁하고 이 값을 **첫 번째**로 찾아낸 채굴자에게 **보상**으로 **비트코인**과 같은 암호화폐를 제공한다.

블록체인에 **블록을 추가**하기 위해서는 **작업 증명**이 필요한데 채굴자는 **컴퓨터 자원을 소비**하여 **작업 증명**을 얻는다. 새로운 블록은 다른 채굴자로부터 **승인**을 받아야하므로, 채굴자의 수가 **많을수록** 블록체인의 **안정성**도 높아진다.
즉, 암포화폐는 **블록체인 서비스를 유지시키기 위한 수단**이기도 하다.

### **해시함수**

해시함수는 **블록 거래 정보를 암호화**하기 위해 **블록체인 암호화**에 사용된다.
암호용 해시 함수는 맵핑된 해싱 값만을 가지고 원래 입력 값을 알아내기 힘들다.

해시함수는 단방향 통신으로 복호화할 수 없다. 즉, 암호화는 가능하지만 복호화는 불가능하다.

블록체인의 **블록은 해시값으로 표시**되며, 동일한 해시를 생성하지 않아서 **블록을 대체하지 못하게 하는 것이 중요**하다.

블록체이은 충돌 방지를 위해 **해시 알고리즘**을 사용하는데 그 중 하나가 **SHA-256**이다.(Secure Hash Algorithm)
**SHA-256**은 어떤 길이의 값을 입력하더라도 고정 길이가 256비트인 데이터를 반환하며 **길이가 64자리인 16진수로 표시**된다.

# 블록체인 관련 개념

### NFT(Non Fungible Token)

**NFT**는 **대체 불가능한 토큰**으로써 각각의 **고유한 속성과 희소성**을 갖추고 있다. **가상자산**은 **매수나 매도**량에 따라 가격이 달라지거나 **채굴**을 통한 공급 환경 등 **시장에 영향**을 받는다. 이와 달리 **NFT**는 발행하는 주체의 **상징성**이나 NFT의 **희소성** 혹은 **지적재산권**(IP)의 가치에 따라 가격이 달라진다.

**NFT**는 가상자산뿐만 아니라 **실물자산에 대해서도 디지털 증서와 같은 역할**을 하기 때문에 가산자산을 포함한 자산이라고 하는 것이 맞다. 즉, **NFT**는 **가상자산, 가상 자산 및 실물 자산에 대한 디지털 증서, 증권 등**과 같은 여러 유형의 자산이 될 수 있다.
NFT거래는 대부분 **가상자산으로 거래**가 이루어진다. 즉, **가상화폐로 NFT를 구매 및 판매**를 할 수 있다.

### Ethereum

비트코인과 더불어 대표적인 암호화폐로 널리 알려져있지만, 이더리움의 가장 큰 차이는 **적용 범위**에 있다. 비트코인이 결제나 거래 관련 시스템, 즉 화폐로서의 기능에 집중하는 반면, 이더리움은 핵심 기술인 **블록체인을 기반으로 거래나 결제뿐 아니라** 계약서, SNS, 이메일, 전자투표 등 **다양한 애플리케이션**을 투명하게 운영할 수 있게 확장성을 제공한다.

이더리움의 목적은 **분산 애플리케이션 제작을 위한 대체 프로토콜**을 만드는 것이다. 즉 화폐로서뿐 아니라 다른 용도, 줄여서 dApp이라고 부르는 **분산 애플리케이션(Decentralized Application)**을 누구나 만들고 사용할 수 있게끔 하는 플랫폼이다.

이더리움은 **Solidity**라는 프로그래밍 언어를 내장하고 있는 블록체인이라는 필수적이고 근본적인 기반을 제공함으로써 이 목적을 이루고자 한다.
누구든지 이 언어를 사용해 스**마트 컨트랙트, 분산 애플리케이션**을 작성하고 소유권에 대한 임의의 규칙, 트랜잭션 형식, 상태 변환 함수 등을 생성 할 수 있다.
어떤 값을 저장하고, **특정한 조건들을 만족했을 때만 그 값을 얻을 수 있게** 하는 일종의 암호 상자인 **스마트 컨트랙트**를 이 플랫폼 위에 만들 수 있다.

### Smart Contract

스마트 컨트랙트란 **블록체인을 기반으로 금융거래, 부동산 계약, 공증 등 다양한 형태의 계약을 체결**하고 이행하는 것을 말한다.

서면으로 이루어지던 계약을 코드로 구현하고 특정 조건이 충족되었을 때 해당 계약이 이행되도록 한다. 스마트 컨트랙트는 조건에 맞는 정확한 작동을 수행하는 능력을 가지고 있다.

### Solidity

**Solidity**는 이더리움등 블록체인 플랫폼에서 **스마트 계약 작성과 구현에 사용되는 계약 지향 프로그래밍 언어**이다.
솔리디티는 이더리움 핵심 기여자들에 의해 이더리움과 같은 **블록체인 플랫폼상에 스마트 계약을 작성할 수 있도록 개발**되었다. 개발자는 솔리디티를 통해서 스스로 실행되는 **비즈니스 로직을 스마트 계약에 담아서 구현**할 수 있다.
 솔리디티를 통해 다양한 앱을 구현할 수 있지만 블록체인 특성상 스마트 계약이 블록체인에 **한번 올라가면 수정할 수 없으며** 누구나 확인할 수 있기 때문에 신중하게 작성을 해야 한다.

### Slippage

슬리피지란 **내가 주문한 가격과 실제 체결된 가격의 차이**를 의미한다.

## 참고 자료

- [https://www.ajunews.com/view/20211012094002828](https://www.ajunews.com/view/20211012094002828)
- [https://www.docdocdoc.co.kr/news/articleView.html?idxno=2010583](https://www.docdocdoc.co.kr/news/articleView.html?idxno=2010583)
- [https://www.banksalad.com/contents/블록체인-개념-완벽-정리-dh1do](https://www.banksalad.com/contents/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EA%B0%9C%EB%85%90-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC-dh1do)
- [https://namu.wiki/w/이더리움](https://namu.wiki/w/%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80)
- [http://wiki.hash.kr/index.php/솔리디티](http://wiki.hash.kr/index.php/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0)
