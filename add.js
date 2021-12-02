const add = (a, b) => {
    return a + b;
}

// 다른 파일에서 add 모듈을 사용 할 수 있게 함
module.exports = add;

// 이 모든 코드를 한줄로
// module.exports = (a, b) => a + b; 