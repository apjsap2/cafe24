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


// const membersArrayAndObject = [
//     {name: '박현숙', group: 'UM'},
//     {name: '안보라', group: 'CN'},
//     {name: '임현지', group: 'A'},
//     {name: '박지은', group: 'A'},
//     {name: '최종서', group: 'A'},
//     {name: '손주영', group: 'A'},
//     {name: '이주영', group: 'B'},
//     {name: '김정훈', group: 'B'},
//     {name: '황주희', group: 'B'},
//     {name: '정소연', group: 'B'},
//     {name: '정진영', group: 'B'},
//     {name: '전소현', group: 'B'},
//     {name: '김연진', group: 'C'},
//     {name: '문가연', group: 'C'},
//     {name: '류지송', group: 'C'},
//     {name: '유진아', group: 'C'},
//     {name: '조윤빈', group: 'C'}
// ]

// dutyType = ['D', 'E', 'N', 'OF', '연', 'MD']

// 이상 더미 데이터

function random(limit) { //수정금지
    return Math.trunc(Math.random() * limit)
}


function selectIdAndSetTextContent(id, text) {  //수정금지. 단, dutyWrite에서 삭제될 경우 수정 또는 삭제 가능
    const $element = document.querySelector(`#${id}`)
    $element.textContent = text
}


function dutyWrite(name, date, duty) {   // 수정, 삭제 가능.   아직 이용되지 않고 있음.
    const nameIndex = membersArray.indexOf(name)
    const boxIdString = `_${date}_${nameIndex + 1}`
    const id = `${boxIdString}`
    selectIdAndSetTextContent(id, duty)
}

function dutyReturn(name, date) {  // 아마 사용할 듯... 나중에라도
    const nameIndex = membersArray.indexOf(name)
    const boxIdString = `_${date}_${nameIndex + 1}`
    return document.querySelector(`#${boxIdString}`).textContent
}

function randomSelectorByGroup(group, number) {
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

