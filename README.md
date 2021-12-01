Section3 application 만들기 re

DB와 CRUD 간능한 페이지 제작 

CRUD (Create, Read, Update, Delete)

---

백엔드 MVC 작동 방식


<p align="center"><img src="report_images/crud.png" width="640"\></p>

출처 : [조코딩 유튜브](https://youtu.be/2CHkds265N8)

 1. Front-End (브라우저에서 http://~~/board 입력)
 2. Router (board 를 읽어 Controller 에 신호)
 3. Controller (Model을 통해 DB를 불러와서 정보를 View 를 통해서 화면으로 출력)

=> 사용 DB : 관계형 DB (RDB) : like 엑셀

---

과거 프로젝트에서 DBever 를 이용해 서버 연결을 시도 했으나 실패.
Mongo DB를 사용해 웹앱에 CRUD를 구현하려 함 (NoSQL)

---

필요 지식

Node.js
NoSQL Database (MongoDB)
DB에 CRUD
서버제작 (API)
+서버 배포, npm, bootstrap 등..

---
개념 정리 (쉽게 설명)

1. SERVER
 - 요구를 하면 가져다 줌 (식당 알바생)
 - 네이버 서버에 : "웹툰 주문" 하면 페이지를 가져다 줌
