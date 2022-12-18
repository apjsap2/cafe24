// 이하  wrapper wide mode로 설정
document.querySelector('#wrapper').className = 'boilerplate-wrapper-for-wide'
// 이상 wrapper wide mode로 설정


// 이하 더미 데이터
// 이하 더미 데이터
// 이하 더미 데이터
const members = [
    {id: 0, name: '박현숙', group: 'UM', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 1, name: '안보라', group: 'CN', duty: {1: 'OF', 2: 'D', 3: 'D', 4: 'OF', 5: 'D', 6: 'D', 7: 'D', 8: 'OF', 9: 'D', 10: 'D', 11: '연', 12: 'OF', 13: 'D', 14: 'D', 15: 'D', 16: 'D', 17: 'D', 18: 'OF', 19: 'D', 20: 'D', 21: 'D', 22: 'OF', 23: 'D', 24: 'D', 25: 'D', 26: 'OF', 27: 'D', 28: 'D', 29: 'D', 30: 'OF', 31: 'OF'}},
    {id: 2, name: '임현지', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 3, name: '박지은', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 4, name: '최종서', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 5, name: '손주영', group: 'A', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 6, name: '이주영', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 7, name: '김정훈', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 8, name: '황주희', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 9, name: '정소연', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 10, name: '정진영', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 11, name: '전소현', group: 'B', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 12, name: '김연진', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 13, name: '문가연', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 14, name: '류지송', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 15, name: '유진아', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
    {id: 16, name: '조윤빈', group: 'C', duty: {1: 'X', 2: 'X', 3: 'X', 4: 'X', 5: 'X', 6: 'X', 7: 'X', 8: 'X', 9: 'X', 10: 'X', 11: 'X', 12: 'X', 13: 'X', 14: 'X', 15: 'X', 16: 'X', 17: 'X', 18: 'X', 19: 'X', 20: 'X', 21: 'X', 22: 'X', 23: 'X', 24: 'X', 25: 'X', 26: 'X', 27: 'X', 28: 'X', 29: 'X', 30: 'X', 31: 'X'}},
]

//cnName 변수는 members 배열에서 두 번째 인덱스의 이름을 참조하도록 하드코딩 되어있다.

let dayOfMonth = 31

let needDutyFull = [
    {date: 1, D: 3, E: 3, N: 3, MD: 1},
    {date: 2, D: 3, E: 3, N: 3, MD: 1},
    {date: 3, D: 3, E: 3, N: 3, MD: 1},
    {date: 4, D: 3, E: 3, N: 3, MD: 0},
    {date: 5, D: 3, E: 3, N: 3, MD: 1},
    {date: 6, D: 3, E: 3, N: 3, MD: 1},
    {date: 7, D: 3, E: 3, N: 3, MD: 1},
    {date: 8, D: 3, E: 3, N: 3, MD: 1},
    {date: 9, D: 3, E: 3, N: 3, MD: 1},
    {date: 10, D: 3, E: 3, N: 3, MD: 1},
    {date: 11, D: 3, E: 3, N: 3, MD: 0},
    {date: 12, D: 3, E: 3, N: 3, MD: 1},
    {date: 13, D: 3, E: 3, N: 3, MD: 1}, // 4430 구현 후 4430 으로 고쳐서 테스트 해볼 것. 13일
    {date: 14, D: 3, E: 3, N: 3, MD: 0}, // 4430 구현 후 4430 으로 고쳐서 테스트 해볼 것. 14일
    {date: 15, D: 3, E: 3, N: 3, MD: 0}, // 4430 구현 후 4430 으로 고쳐서 테스트 해볼 것. 15일
    {date: 16, D: 3, E: 3, N: 3, MD: 1},
    {date: 17, D: 3, E: 3, N: 3, MD: 0},
    {date: 18, D: 3, E: 3, N: 3, MD: 0},
    {date: 19, D: 3, E: 3, N: 3, MD: 1},
    {date: 20, D: 3, E: 3, N: 3, MD: 1},
    {date: 21, D: 3, E: 3, N: 3, MD: 0}, // 4430 구현 후 4430 으로 고쳐서 테스트 해볼 것. 21일
    {date: 22, D: 3, E: 3, N: 3, MD: 0}, // 4430 구현 후 4430 으로 고쳐서 테스트 해볼 것. 22일
    {date: 23, D: 3, E: 3, N: 3, MD: 0}, // 4430 구현 후 4430 으로 고쳐서 테스트 해볼 것. 23일
    {date: 24, D: 3, E: 3, N: 3, MD: 0},
    {date: 25, D: 3, E: 3, N: 3, MD: 0},
    {date: 26, D: 3, E: 3, N: 3, MD: 1},
    {date: 27, D: 3, E: 3, N: 3, MD: 1},
    {date: 28, D: 3, E: 3, N: 3, MD: 1},
    {date: 29, D: 3, E: 3, N: 3, MD: 1},
    {date: 30, D: 3, E: 3, N: 3, MD: 1},
    {date: 31, D: 3, E: 3, N: 3, MD: 0},
]
// 이상 더미 데이터
// 이상 더미 데이터
// 이상 더미 데이터


// 이하 프론트엔드
// 이하 프론트엔드
// 이하 프론트엔드
function dutyReturn(name, date) {  // 아마 사용할 듯... 나중에라도... 결과화면.ejs에서 끌어오는 것임. 아마 필요 없긴 할듯....
    const nameIndex = findMemberIndex(name)
    const boxIdString = `_${date}_${nameIndex + 1}`
    return document.querySelector(`#${boxIdString}`).textContent
}
function memberListToEJS() {
    for (let i = 0; i < members.length; i++) {
        const memberID = findMemberIndex(members[i].name)
        const memberName = members[memberID].name
        const idString = `#_0_${memberID + 1}`
        const $element = document.querySelector(`${idString}`)
        $element.textContent = memberName
    }
}
function dutyResultToEJS() {   
    for (let date = 1; date < dayOfMonth + 1; date++) {
        for (let memberIndex = 0; memberIndex < members.length; memberIndex++) {
            const name = members[memberIndex].name
            const nameIndex = findMemberIndex(name)    
            const boxIdString = `_${date}_${nameIndex + 1}`
            const $element = document.querySelector(`#${boxIdString}`)
            $element.textContent = members[memberIndex].duty[date]
        }
    }
}
// 이상 프론트엔드
// 이상 프론트엔드
// 이상 프론트엔드

function findMemberIndex(name) {
    for (let i = 0; i < members.letemngth; i++) {
        if (members[i].name === name) {
            return i
        }
    }
}
function findDuty(name, date) {              // 현재 참조 없음. 
    let index = findMemberIndex(name)
    return members[index].duty[date]
}
function customDuty(name, date, duty) {      // 현재 참조 없음.
    const nameIndex = findMemberIndex(name)
    members[nameIndex].duty[date] = duty
}
function random(limit) { //수정금지
    return Math.trunc(Math.random() * limit)
}
function isDone(date, name) {
    if (members[findMemberIndex(name)].duty[date] === 'X') {
        return false
    } else {
        return true
    }
}
function selectMembersToReturnObject(date, membersArray, dutyStyle) {
    let resultObject = {D: [], E: [], N: [], MD: []}
    let membersA = []
    let membersB = []
    let membersC = []
    for (let i = 0; i < membersArray.length; i++) {
        if (membersArray[i].group === 'A') {
            membersA.push(membersArray[i].name)
        }
    }
    for (let i = 0; i < membersArray.length; i++) {
        if (membersArray[i].group === 'B') {
            membersB.push(membersArray[i].name)
        }
    }
    for (let i = 0; i < membersArray.length; i++) {
        if (membersArray[i].group === 'C') {
            membersC.push(membersArray[i].name)
        }
    }
    if (dutyStyle === 3330) {
        for (let i = 0; i < 3; i++) {
            const indexA = random(membersA.length - 1)
            const indexB = random(membersB.length -1)
            const indexC = random(membersC.length - 1)
            if (i === 0) {
                resultObject.D.push(membersA[indexA])
                membersA.splice(indexA, 1)
                resultObject.D.push(membersB[indexB])
                membersB.splice(indexB, 1)
                resultObject.D.push(membersC[indexC])
                membersC.splice(indexC, 1)
            } else if (i === 1) {
                resultObject.E.push(membersA[indexA])
                membersA.splice(indexA, 1)
                resultObject.E.push(membersB[indexB])
                membersB.splice(indexB, 1)
                resultObject.E.push(membersC[indexC])
                membersC.splice(indexC, 1)
            } else if (i === 2) {
                resultObject.N.push(membersA[indexA])
                membersA.splice(indexA, 1)
                resultObject.N.push(membersB[indexB])
                membersB.splice(indexB, 1)
                resultObject.N.push(membersC[indexC])
                membersC.splice(indexC, 1)
            }
        }
    } else if (dutyStyle === 4430) {
        console.log('현재 4430 dutyStyle을 지원하지 않음. B 그룹 6명을 하루 근무를 돌려야 하는데, 현재 B 그룹이 6명이 최대라서..... 추후 수정 필요함. 예를 들면 A그룹에서 2명을 뽑는다던지 하는 식으로... selectMembersToReturnArray 함수 수정하면 됨.')
    } else if (dutyStyle === 3331) {
        for (let i = 0; i < 4; i++) {
            const indexA = random(membersA.length - 1)
            const indexB = random(membersB.length -1)
            const indexC = random(membersC.length - 1)
            if (i === 0) {
                resultObject.D.push(membersA[indexA])
                membersA.splice(indexA, 1)
                resultObject.D.push(membersB[indexB])
                membersB.splice(indexB, 1)
                resultObject.D.push(membersC[indexC])
                membersC.splice(indexC, 1)
            } else if (i === 1) {
                resultObject.E.push(membersA[indexA])
                membersA.splice(indexA, 1)
                resultObject.E.push(membersB[indexB])
                membersB.splice(indexB, 1)
                resultObject.E.push(membersC[indexC])
                membersC.splice(indexC, 1)
            } else if (i === 2) {
                resultObject.N.push(membersA[indexA])
                membersA.splice(indexA, 1)
                resultObject.N.push(membersB[indexB])
                membersB.splice(indexB, 1)
                resultObject.N.push(membersC[indexC])
                membersC.splice(indexC, 1)
            } else if (i === 3) {
                resultObject.MD.push(membersC[indexC])
                membersC.splice(indexC, 1)
            }
        }
    }
    let forDeleteMembers = []
    for (member of members) {
        if (member.duty[date] === 'D' || member.duty[date] === 'E' || member.duty[date] === 'N' || member.duty[date] === 'MD') {
            const obj = {name: member.name, group: member.group, duty: member.duty[date]}
            forDeleteMembers.push(obj)
        }
    }
    if (forDeleteMembers.length !== 0) {
        for (member of forDeleteMembers) {
            if (member.group === 'CN' || member.group === 'A') {
                if (member.duty === 'D') {
                    resultObject.D.splice(0, 1)
                } else if (member.duty === 'E') {
                    resultObject.E.splice(0, 1)
                } else if (member.duty === 'N') {
                    resultObject.N.splice(0, 1)
                } else if (member.duty === 'MD') {
                    resultObject.MD.splice(0, 1)
                } else {
                    console.log('selectMembersToReturnObject의 "forDeleteMembers.length !==0..." 에서 오류가 발생했습니다.')
                }
            }
            if (member.group === 'B') {
                if (member.duty === 'D') {
                    resultObject.D.splice(1, 1)
                } else if (member.duty === 'E') {
                    resultObject.E.splice(1, 1)
                } else if (member.duty === 'N') {
                    resultObject.N.splice(1, 1)
                } else if (member.duty === 'MD') {
                    resultObject.MD.splice(0, 1)
                } else {
                    console.log('selectMembersToReturnObject의 "forDeleteMembers.length !==0..." 에서 오류가 발생했습니다.')
                }
            }
            if (member.group === 'C') {
                if (member.duty === 'D') {
                    resultObject.D.pop
                } else if (member.duty === 'E') {
                    resultObject.E.pop
                } else if (member.duty === 'N') {
                    resultObject.N.pop
                } else if (member.duty === 'MD') {
                    resultObject.MD.pop
                } else {
                    console.log('selectMembersToReturnObject의 "forDeleteMembers.length !==0..." 에서 오류가 발생했습니다.')
                }
            }
        }
    }
    return resultObject
}
function dutyMakerForOneDate(date) {
    let membersForOneDay = []
    let tempDutyForOneDay = {}  
    members.forEach(function(member) {
        const id = member.id
        const name = member.name
        const duty = member.duty[date]
        const group = member.group
        if (isDone(date, name) === false) {
            membersForOneDay.push({id: id, name: name, group: group, duty: duty})
        }
    })
    const needDay = needDutyFull[date - 1].D
    const needEvening = needDutyFull[date - 1].E
    const needNight = needDutyFull[date - 1].N
    const needMidday = needDutyFull[date - 1].MD
    let dutyStyle = 0
    if (needDay === 3 && needEvening === 3 && needNight === 3 && needMidday === 0) {
        dutyStyle = 3330
        tempDutyForOneDay = selectMembersToReturnObject(date, membersForOneDay, dutyStyle)
    } else if (needDay === 4 && needEvening === 4 && needNight === 3 && needMidday === 0) {
        dutyStyle = 4430
        tempDutyForOneDay = selectMembersToReturnObject(date, membersForOneDay, dutyStyle)
    } else if (needDay === 3 && needEvening === 3 && needNight === 3 && needMidday === 1) {
        dutyStyle = 3331
        tempDutyForOneDay = selectMembersToReturnObject(date, membersForOneDay, dutyStyle)
    } else {
        console.log('근무 형태는 3331, 4430, 3330 세 가지만 가능합니다. 기타 근무 형태는 추가 개발이 필요합니다. dutyMakerForOneDate 함수의 dutyStyle 변수를 확인하세요')
    }


    console.log(tempDutyForOneDay) // 테스트를 위한 코드. 삭제할것
}






// 이름과 듀티를 화면에 출력하기 위한 코드
memberListToEJS()
dutyResultToEJS()



// 테스트 할 코드를 아래에 작성하세요
dutyMakerForOneDate(10)
