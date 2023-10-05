let elDate = document.getElementById("birthday");
let elResult = document.getElementById("result");
let elSubmit =  document.getElementById("submit");

const today = new Date();



// console.log(today);
// console.log(Date(elDate.value));


function calculateAge() {
    // let birthDate = new Date('2008-12-21');
    let birthDate = new Date(elDate.value);
    let age;
    // let ageMonth;
    // ageMonth = today.getMonth() - birthDate.getMonth();


    // 생일이 지난 경우
    if (today.getMonth() > birthDate.getMonth() ||
        today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate()
    ){
        age = today.getFullYear() - birthDate.getFullYear();

    // 생일이 안지난 경우
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;
    return age;
}

elSubmit.addEventListener('click',calculateAge);