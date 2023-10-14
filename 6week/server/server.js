// require node.js의 내장 함수로, node를 활용하기 위한 프레임워크인 'express'를 변수 express에 require
const express = require('express');

// 편리함을 위해  app변수에 express 인스턴스
const app = express();

// 서버 열때 사용할 port 번호
const port = 8080;

// __dirname 바로 상위 폴더 접근하면 오류나서 쓰는 node.js 내장모듈 "파일시스템" (파일 관련)
// 이걸로 __dirname을 문자열마냥 쓸 예정
const fs = require("fs")

// "path" 내장 모듈을 path 에 저장 (경로 관련) 
const path = require("path");

// app.use 는 Express의 미들웨어 함수를 사용하기 위해 적는 일종의 활성화? 등록?
// express.static으로 정적 파일을 서버>>클라이언트로 제공 여기서는 __dirname(현재 파일 디렉토리)
app.use(express.static(__dirname));

// 별도의 URL 없이 포트번호만 맞으면 btnhtml 제공하는 함수 실행
app.get('/', BTNHtml);

// URL hi 가 붙은 URL 받으면 hi함수 실행
app.get('/hi', hi);

// port로 서버시작 시작하면 onlistenstart 함수 실행
app.listen(port,onlistenstrat);


function onlistenstrat() {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
}

function BTNHtml(req, res) {
    // 'index.html' 파일을 읽은 후 클라이언트에게 전송합니다.
    const btnPath = path.join(__dirname, '../client/btn.html');

    // 파일 읽어오기 (path, 언어형식, 콜백함수) 오류없으면 res.send로 보내기
    fs.readFile(btnPath, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('서버 오류');
        } else {
            res.send(data);
        }
    })
}

// URL hi일때 보낼 함수
function hi(req,res)
{
    res.end('아..... 디게오래걸렸ㄴㅔ');
}


