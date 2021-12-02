// 첨부한 라이브러리 사용
const express = require('express');

// 첨부한 라이브러리 사용해 객체 만들기
const app = express();

//서버 열기 - 8080 포트로 서버 열기
// 터미널에  node server.js 입력
// 브라우저 - localhost:8080 입력
app.listen(8080, function(){
    console.log('listening on 8080')
});

// 누군가가 /pet 으로 방문하면 - pet 관련된 안내문을 띄워 줌
//http://localhost:8080/pet
app.get('/pet', function(req, res){
// .get('/pet', funcions(요청, 응답){
    res.send('펫 쇼핑할 수 있는 사이트 입니다.')
});

// http://localhost:8080/buauty 
app.get('/buauty', function(req, res){
    res.send('뷰티용품 페이지 입니다.')
});

// 코드 수정 하려면 ctrl + c 이후 다시 해야 하는데, 자동화 가능
// npm install -g nodemon (여기서 -g 는 글로벌 - 다른 폴더에서 사용 가능)
// nodemon server.js  실행  (starting 'node server.js')
// (보안 오류시 파워쉘 관리자 권한 실행 - excutionplicy unrestricted - y - 엔터)

// html 파일 보내기
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

