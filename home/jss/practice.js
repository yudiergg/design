$(document).ready(function(){
    // or 연산자 두개의 피연산자 값이 있을때 사용하며 둘중에 한개라도 트루가 있으면 트루값임 둘중에 하나여도 상관없을때 사용하는게 좋아보임
    let numberone = parseInt(prompt('10 미만인 숫자를 입력해주세요'))
    let numbertwo = parseInt(prompt('10 미만인 숫자를 입력해주세요'))
        if (numberone < 10 || numbertwo < 10)
            alert ('두개의 입력값중 최소한 한개는 10인 미만입니다')
        else
            alert ('두개의 입력값중 10 미만인 수가 없습니다.')
    // && 연산자 두개의 피연산자 값이 한개라도 펄스면 펄스임 무조건 조건을 맞춰야할때 사용해야할거같음
    let number1 = parseInt(prompt('50 미만인 숫자를 입력해주세요'))
    let number2 = parseInt(prompt('50 미만인 숫자를 입력해주세요'))
        if (number1 < 50 && number2 < 50)
            alert('두개의 입력값이 모두 50미만입니다')
        else
            alert('조건에 맞지 않는 숫자가 있습니다')
    // switch ans 조건을 단계별로 걸어놓고 맞는걸로 값이나감 아니면 펄스값으로 바로감
    let session = prompt('관심 세션을 선택해주세요 1-마케팅, 2-개발, 3-디자인');
    switch(session) {
        case '1': document.write('<p>선택한게 맞는지 다시 한번 확인해주세요</P>')
            break;
        case '2': document.write('<p>선택</p>')
            break;
        case '3': document.write('선택')
            break;
        default: alert('잘못입력했습니다.')
    }
    //지금까지 배운거를 토대로 자리 배치 만들기 여기서 변수는 관광객의 수 , 한줄에 몇명앉는지 깔끔하게 나눠지면 좋지만 나머지가생기면 + 1한줄을 생각해야함
    let person = parseInt(prompt('입장객은 몇명입니까?'))
    let colum = parseInt(prompt('한줄에 몇명씩 앉습니까?'))

        if(person % colum === 0) { /* 나머지가 안남으면 0 이니까 조건이 맞으면 저렇게 쓰고 */
            row = person / colum;
        }
        else {
            row = parseInt(person / colum) + 1 /* 나머지가 남은경우니까 1을 더해라 */
        }
        document.write(`모두 ${row}개의 줄이 필요합니다.`) /* 이렇게 쓸려면 물결 이용한 따옴표 */
    // for문 사용하기 초깃값 조건 증가식
    let sum = 0
        for (let i = 1; i <6; i++)
            sum += 1;
        document.write(`1부터 5까지 더하면 ${sum}`)

})