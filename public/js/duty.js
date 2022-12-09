/* 
할일 목록
일단 needDutyFull 배열을 더미 데이터로 입력 했으나, 추후 DB 작업이 완료되면
getNeedDuty 함수를 통해 needDutyFull 배열을 채워야 하며,
trigger 함수는 needDutyFull 배열이 완성되지 않은 상태에서는 오류를 발생시켜야 한다.



let dayOfMonth = 31
더미데이터임... 추후 동적으로 데이터를 조작하도록 수정 해야함.
trigger() 함수 내부에서 이용하고 있으므로, 삭제해서는 안됨

*/



// 이하  wrapper wide mode로 설정
document.querySelector('#wrapper').className = 'boilerplate-wrapper-for-wide'
// 이상 wrapper wide mode로 설정


// 이하 더미 데이터

const membersArray = ['박현숙', '안보라', '임현지', '박지은', '최종서', '손주영', '이주영', '김정훈', '황주희', '정소연', '정진영', '전소현', '김연진', '문가연', '류지송', '유진아', '조윤빈']
const membersGroup = {
    UM: ['박현숙'],
    CN: ['안보라'],
    RN: {
        A: ['임현지', '박지은', '최종서', '손주영'],
        B: ['이주영', '김정훈', '황주희', '정소연', '정진영', '전소현'],
        C: ['김연진', '문가연', '류지송', '유진아', '조윤빈']
    }
}


// dutyType = ['D', 'E', 'N', 'OF', '연', 'MD']

// 이상 더미 데이터

let dayOfMonth = 31

let needDutyFull = [  //아직 사용 안하고 있음. 삭제해도 됨
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N', 'MD'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
    ['D', 'D', 'D', 'E', 'E', 'E', 'N', 'N', 'N'],
 ]


let dutyResult = []



function dutyResultInit() { 
    for (let i = 0; i < dayOfMonth; i++) {
        const tempDutyForOneDay = {date: i + 1, duty: []}
        for (let ix = 0; ix < membersArray.length; ix++) {
            tempDutyForOneDay.duty.push('X')
        }
        dutyResult.push(tempDutyForOneDay)
    }
}

function customDuty(name, date, duty) {
    const nameIndex = membersArray.indexOf(`${name}`)
    dutyResult[date - 1].duty[nameIndex] = duty
}


function random(limit) { //수정금지
    return Math.trunc(Math.random() * limit)
}


function selectIdAndSetTextContent(id, text) {  //수정금지. 단, dutyWrite에서 사용중
    const $element = document.querySelector(`#${id}`)
    $element.textContent = text
}


function dutyWrite(name, date, duty) {   // name, date, duty를 입력받아 결과화면.ejs에 출력해줌. 아직 이용되지 않고 있음. 
    const nameIndex = membersArray.indexOf(name)    // 수정금지. dutyResultToEJS에서 사용중
    const boxIdString = `_${date}_${nameIndex + 1}`
    const id = `${boxIdString}`
    selectIdAndSetTextContent(id, duty)
}


function dutyReturn(name, date) {  // 아마 사용할 듯... 나중에라도... 결과화면.ejs에서 끌어오는 것임. 아마 필요 없긴 할듯....
    const nameIndex = membersArray.indexOf(name)
    const boxIdString = `_${date}_${nameIndex + 1}`
    return document.querySelector(`#${boxIdString}`).textContent
}

function randomSelectorByGroup(group, number) {  //그룹과 숫자를 입력하면 해당 그룹의 멤버를 숫자만큼 랜덤하게 '배열'로 리턴해준다
    const umNumberCount = membersGroup.UM.length
    const cnNumberCount = membersGroup.CN.length
    const rnANumberCount = membersGroup.RN.A.length
    const rnBNumberCount = membersGroup.RN.B.length
    const rnCNumberCount = membersGroup.RN.C.length
    let grp = ''
    let groupMemberCount = 0
    let resultMemberArray = []
    let realResult = []
    if (group === 'UM' || group === 'CN') {
        grp = group
    } else {
        grp = `RN.${group}`
    }

    switch(grp) {
        case 'UM':
            groupMemberCount = umNumberCount
            resultMemberArray = membersGroup.UM
            break
        case 'CN':
            groupMemberCount = cnNumberCount
            resultMemberArray = membersGroup.CN
            break
        case 'RN.A':
            groupMemberCount = rnANumberCount
            resultMemberArray = membersGroup.RN.A
            break
        case 'RN.B':
            groupMemberCount = rnBNumberCount
            resultMemberArray = membersGroup.RN.B
            break
        default:
            groupMemberCount = rnCNumberCount
            resultMemberArray = membersGroup.RN.C
    }

    if (groupMemberCount < number) {
        alert('입력한 숫자보다 그룹 멤버의 수가 적습니다')
    } else {
        for(let i = 0; i < number; i++) {
            let randomIndex = random(resultMemberArray.length - 1)
            realResult.push(resultMemberArray[randomIndex])
            resultMemberArray.splice(randomIndex, 1)
        }
        return realResult
    }
}


function dutyResultToEJS() {   // 일단 테스트 위해 사용하고 있는 상태임
    for (let i = 0; i < dayOfMonth; i++) {
        for (let ix = 0; ix < membersArray.length; ix ++) {
            dutyWrite(membersArray[ix], i, dutyResult[i].duty[ix])
        }
    }
} 










dutyResultInit()
customDuty('최종서', 1, 'OF')


dutyResultToEJS()