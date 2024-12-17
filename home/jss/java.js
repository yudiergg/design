$(document).ready(function(){
    // 변수를 이용해서 사각형 만들기
    let width = 20;
    let height = 30;
    let wh = width * height;
    console.log(wh);

    //원주율구하기 파이값은 상수값으로 고정 변수는 레디우스로
    /*const PI = 3.14;
    let radius = prompt('반지름을 입력하세요'); 
    let ob = radius * radius * PI */

    //템플릿 리터럴로 문자열 연결하기 백틱 키는 맥은 옵션 + ~ ₩ 요키임 작은따옴표랑 다르므로 주의
    let name = 'kim';
    let room = 204;
    console.log(`${name}님 ${room}에 와서 밥드세요`);

    //배열형 하나의 변수에 여러명을 지정가능 배열안에 차례대로 순번이 부여됨 0,1,2,3 이런 순서대로 그래서 seson[0] 이러면 봄나옴
    let spring = '봄';
    let summer = '여름';
    let fall = '겨울';
    let winter = '겨울';
    let seson = ['봄', '여름', '가을', '겨울'];
    console.log(seson[0])

    input = prompt('숫자를입력하세요')
    // 문자열과 숫자열을 더하면 문자로 인식해서 더해주지만 뺄셈은 문자열을 숫자로 바꾸어서 계산함 자동변환 
    let one = 10
    let two = '12'
    let three = one + two
    console.log(three)

    let one1 = 10
    let two2 = '12'
    let three3 = one1 - two2
    console.log(three3)

    // 자료형 변환 함수
    Number() 문자열이나 논리형 값을 숫자로 변환
    parseInt() 문자열을 정수 숫자로 변환 소수점안나오고 깔끔하게 떨어질려면 이거
    parseFloat() 문자열을 실수 숫자로 변환 소수점도 다나오게 할려면 이거
    String() 숫자나 논리형을 문자열로 변환 
    Boolean() 괄호 안의 값을 논리형으로 변환
    
    //연산자 
    let number = 15 / 7 2
    let number = 15 % 7  14 + 1 15가 되므로 나머지 값인 1임
    
    
    y += x y=y+x
    y -= x y=y-x
    y *= x y=y*x
    y /= x y=y/x
    y %= x y=y%x


    3 == '3' 피연산자 값이 서로 같으면 true 이때 자료형을 자동변환해줌 문자열인 숫자를 숫자로 변환
    3 === '3' 피연산자 값도 같고 자료형도 같으면 true 자료형을 자동변환 안해줌
    3 != '3'  피연산자 값이 서로 같지 않으면 true 이때 자료형을 자동변환해줌
    3 !== '3' 피연산자 값이 같지 않거나 자료형이 같지 않으면 true 자료형 자동변환안해줌 
    3 < 4 왼쪽 피연산자 값이 오른쪼고 피연산자 값보다 작으면 true
    3 <= 4 왼쪽 피연산자 값이 오른쪽 피연산자 값보다 작거나 같으면 true
    3 > 4  왼쪽 피연산자 값이 오른쪽 피연산자 값보다 크면 true
    3 >= 4  왼쪽 피연산자 값이 오른쪽 피연산자 값보다 크거나 같으면 true
 
    //예제 3의 배수확인하기
    let number = parseInt(prompt('숫자를입력하세요'));
    if (number % 3 === 0)
        alert('3의 배수입니다')
    else
        alert('3의 배수가아닙니다')

    // 중첩시켜서 null 값이 아닐때 진행시키기
    let usenumber = prompt('숫자를 입력하세요') // 변수에 이름값을 지정해주고 프롬포트 기능을 실행한후 쓴 숫자가 변수 값임
        if(usenumber !== null) { // 만약 숫자 입력한값이 null과 같지 않거나 자료형이 같지 않을경우 트루 아니면 펄스
            if(usenumber % 3 === 0) //트루 일때 실행되는데 입력값이 0과 같고 자료형도 같으면 트루 아니면 펄스
            alert('3의 배수입니다.') // 맞으면 이거 실행
            else //아니면 이거샐행
            alert('3의 배수가아닙니다')
        }
        else // 위에 펄스인값이 이거 실행
        alert('입력이 취소되었습니다')
    
    //조건 연산자를 사용해 3의 배수 확인하기 트루일때 ? 펄스일때 :
    let useNumber = parseInt(prompt('번호를 입력해주세요'))
    if (useNumber !== null)
        (parseInt(useNumber) % 3 === 0) ? alert('3의배수입니다') : alert('3의배수가아닙니다');
    else
        alert('입력이 취소되었습니다')
    // 논리 연산자로 체크하기 조건을 2개이상 체크할경우 or 연산자를 사용 피연산자 2개중 하나라도 트루값이 있으면 트루임
    let il = parseInt(prompt('50 미만인 숫자를 입력하세요'))
    let li = parseInt(prompt('50 미만인 숫자를 입력하세요'))

        if (il < 10 || li < 10 )
            alert('숫자 2개 중에서 최소한 하나는 10')
        else
            alert('숫자 2개 중에서 10 미만인수는 없슴')

})
