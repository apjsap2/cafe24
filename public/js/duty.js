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

// const membersArray = ['박현숙', '안보라', '임현지', '박지은', '최종서', '손주영', '이주영', '김정훈', '황주희', '정소연', '정진영', '전소현', '김연진', '문가연', '류지송', '유진아', '조윤빈']
// const membersGroup = {
//     UM: ['박현숙'],
//     CN: ['안보라'],
//     RN: {
//         A: ['임현지', '박지은', '최종서', '손주영'],
//         B: ['이주영', '김정훈', '황주희', '정소연', '정진영', '전소현'],
//         C: ['김연진', '문가연', '류지송', '유진아', '조윤빈']
//     }
// }

const members = [
    {id: 0, name: '박현숙', group: 'UM', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 1, name: '안보라', group: 'CN', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 2, name: '임현지', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 3, name: '박지은', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 4, name: '최종서', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 5, name: '손주영', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 6, name: '이주영', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 7, name: '김정훈', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 8, name: '황주희', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 9, name: '정소연', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 10, name: '정진영', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 11, name: '전소현', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 12, name: '김연진', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 13, name: '문가연', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 14, name: '류지송', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 15, name: '유진아', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 16, name: '조윤빈', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: '11', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
]

function findMemberIndex(name) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name) {
            return i
        }
    }
}

function findDuty(name, date) {
    let index = findMemberIndex(name)
    return members[index].duty[date]
}

// dutyType = ['D', 'E', 'N', 'OF', '연', 'MD']

// 이상 더미 데이터

let dayOfMonth = 31

let needDutyFull = [
    {date: 1, D: 1, E: 3, N: 3, MD: 1},
    {date: 2, D: 3, E: 3, N: 3, MD: 0},
    {date: 3, D: 3, E: 3, N: 3, MD: 0},
    {date: 4, D: 3, E: 3, N: 3, MD: 0},
    {date: 5, D: 3, E: 3, N: 3, MD: 0},
    {date: 6, D: 3, E: 3, N: 3, MD: 0},
    {date: 7, D: 3, E: 3, N: 3, MD: 0},
    {date: 8, D: 3, E: 3, N: 3, MD: 0},
    {date: 9, D: 3, E: 3, N: 3, MD: 0},
    {date: 10, D: 3, E: 3, N: 3, MD: 0},
    {date: 11, D: 3, E: 3, N: 3, MD: 0},
    {date: 12, D: 3, E: 3, N: 3, MD: 0},
    {date: 13, D: 3, E: 3, N: 3, MD: 0},
    {date: 14, D: 3, E: 3, N: 3, MD: 0},
    {date: 15, D: 3, E: 3, N: 3, MD: 0},
    {date: 16, D: 3, E: 3, N: 3, MD: 0},
    {date: 17, D: 3, E: 3, N: 3, MD: 0},
    {date: 18, D: 3, E: 3, N: 3, MD: 0},
    {date: 19, D: 3, E: 3, N: 3, MD: 0},
    {date: 20, D: 3, E: 3, N: 3, MD: 0},
    {date: 21, D: 3, E: 3, N: 3, MD: 0},
    {date: 22, D: 3, E: 3, N: 3, MD: 0},
    {date: 23, D: 3, E: 3, N: 3, MD: 0},
    {date: 24, D: 3, E: 3, N: 3, MD: 0},
    {date: 25, D: 3, E: 3, N: 3, MD: 0},
    {date: 26, D: 3, E: 3, N: 3, MD: 0},
    {date: 27, D: 3, E: 3, N: 3, MD: 0},
    {date: 28, D: 3, E: 3, N: 3, MD: 0},
    {date: 29, D: 3, E: 3, N: 3, MD: 0},
    {date: 30, D: 3, E: 3, N: 3, MD: 0},
    {date: 31, D: 3, E: 3, N: 3, MD: 0},
]


// let dutyResult = []



// function dutyResultInit() { 
//     for (let i = 0; i < dayOfMonth; i++) {
//         const tempDutyForOneDay = {date: i + 1, duty: []}
//         for (let ix = 0; ix < members.length; ix++) {
//             tempDutyForOneDay.duty.push('X')
//         }
//         dutyResult.push(tempDutyForOneDay)
//     }
// }

function customDuty(name, date, duty) {
    const nameIndex = findMemberIndex(name)
    members[nameIndex].duty[date] = duty
}


function random(limit) { //수정금지
    return Math.trunc(Math.random() * limit)
}



// 이하 프론트엔드
// 이하 프론트엔드

function selectIdAndSetTextContent(id, text) {  //수정금지. 단, dutyWrite에서 사용중
    const $element = document.querySelector(`#${id}`)
    $element.textContent = text
}


function dutyWrite(name, date, duty) {   // name, date, duty를 입력받아 결과화면.ejs에 출력해줌. 아직 이용되지 않고 있음. 
    const nameIndex = findMemberIndex(name)    // 수정금지. dutyResultToEJS에서 사용중
    const boxIdString = `_${date}_${nameIndex + 1}`
    const id = `${boxIdString}`
    selectIdAndSetTextContent(id, duty)
}


function dutyReturn(name, date) {  // 아마 사용할 듯... 나중에라도... 결과화면.ejs에서 끌어오는 것임. 아마 필요 없긴 할듯....
    const nameIndex = findMemberIndex(name)
    const boxIdString = `_${date}_${nameIndex + 1}`
    return document.querySelector(`#${boxIdString}`).textContent
}

function memberListToEJS() {
    for (let i = 0; i < members.length; i++) {
        let index = findMemberIndex(members[i].name)
        let text = members[index].name
        selectIdAndSetTextContent(index, text)
    }
}

function dutyResultToEJS() {   
    for (let i = 0; i < dayOfMonth; i++) {
        for (let ix = 0; ix < members.length; ix ++) {
            dutyWrite(members[ix].name, i, members[ix].duty[i])
        }
    }
} 


// 이상 프론트엔드
// 이상 프론트엔드


// function randomSelectorByGroup(group, number) {  //그룹과 숫자를 입력하면 해당 그룹의 멤버를 숫자만큼 랜덤하게 '배열'로 리턴해준다
//     const umNumberCount = membersGroup.UM.length
//     const cnNumberCount = membersGroup.CN.length
//     const rnANumberCount = membersGroup.RN.A.length
//     const rnBNumberCount = membersGroup.RN.B.length
//     const rnCNumberCount = membersGroup.RN.C.length
//     let grp = ''
//     let groupMemberCount = 0
//     let resultMemberArray = []
//     let realResult = []
//     if (group === 'UM' || group === 'CN') {
//         grp = group
//     } else {
//         grp = `RN.${group}`
//     }

//     switch(grp) {
//         case 'UM':
//             groupMemberCount = umNumberCount
//             resultMemberArray = membersGroup.UM
//             break
//         case 'CN':
//             groupMemberCount = cnNumberCount
//             resultMemberArray = membersGroup.CN
//             break
//         case 'RN.A':
//             groupMemberCount = rnANumberCount
//             resultMemberArray = membersGroup.RN.A
//             break
//         case 'RN.B':
//             groupMemberCount = rnBNumberCount
//             resultMemberArray = membersGroup.RN.B
//             break
//         default:
//             groupMemberCount = rnCNumberCount
//             resultMemberArray = membersGroup.RN.C
//     }

//     if (groupMemberCount < number) {
//         alert('입력한 숫자보다 그룹 멤버의 수가 적습니다')
//     } else {
//         for(let i = 0; i < number; i++) {
//             let randomIndex = random(resultMemberArray.length - 1)
//             realResult.push(resultMemberArray[randomIndex])
//             resultMemberArray.splice(randomIndex, 1)
//         }
//         return realResult
//     }
// }




function isDone(date, name) {
    if (members[findMemberIndex(name)].duty[date] === 'X') {
        return false
    } else {
        return true
    }

}

// function isDone(date, duty) {  // 만일 사용하려면 수정 필요. 특히 객체가 포함된 배열에서는 인덱스를 직접 사용하면 안된다.
//     const index = date - 1
//     const needDayCount = needDutyFull[index].D
//     const needEveningCount = needDutyFull[index].E
//     const needNightCount = needDutyFull[index].N
//     const needMidDayCount = needDutyFull[index].MD
//     const dC = dutyResult[index].duty.filter(element => 'D' === element).length
//     const eC = dutyResult[index].duty.filter(element => 'E' === element).length
//     const nC = dutyResult[index].duty.filter(element => 'N' === element).length
//     const mdC = dutyResult[index].duty.filter(element => 'MD' === element).length
//     switch (duty) {
//         case 'D':
//             if (needDayCount === dC) {
//                 return true
//             } else {
//                 return false
//             }
//             break ;
//         case 'E':
//             if (needEveningCount === eC) {
//                 return true
//             } else {
//                 return false
//             }
//             break ;
//         case 'N':
//             if (needNightCount === nC) {
//                 return true
//             } else {
//                 return false
//             }
//             break ;
//         case 'MD':
//             if (needMidDayCount === mdC) {
//                 return true
//             } else {
//                 return false
//             }
//             break ;
//         default:
//             console.log('isDone 함수의 switch 문에 예상치 못한 파라메터가 입력되었습니다')
//     }
// }









customDuty('최종서', 1, 'D')
customDuty('박현숙', 1, 'N')




memberListToEJS()
dutyResultToEJS()
