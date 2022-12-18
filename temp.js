// --------------------------------------------
// --------------------------------------------
const arr1 = ['D', 'D', 'E', 'N', 'N']
// const arr2 = ['D', 'OF', 'D', 'D', 'E']
const newDuty1 = 'N' 
const newDuty2 = 'OF'  
const minOfCount = 7

class DutyCheck {
    constructor(preDutyArray5, newDuty, minOfCount, wholeDutyArray) {
        this.dutyArray = preDutyArray5
        this.dutyArray.push(newDuty) // 총 6개의 duty가 dutyArray 배열에 담기게 된다.
        this.newDutyArrayForCheck = []
        this.minOfCount = minOfCount
        this.wholeDutyArray = wholeDutyArray // ofCountRule 메소드를 위한 프로퍼티
    }

    fiveRule() {
        this.newDutyArrayForCheck = []
        this.newDutyArrayForCheck = this.dutyArray.filter(duty => {
            if (duty === 'D' || duty === 'E' || duty === 'MD') {
                return true
            } else {
                return false
            }
        })
        if (this.newDutyArrayForCheck.length > 5) {
            return false
        } else {
            return true
        }
    }

    nThreeRule() {
        let count = 0
        if (this.dutyArray[0] === 'N' && this.dutyArray[1] === 'N') count++;
        if (this.dutyArray[1] === 'N' && this.dutyArray[2] === 'N') {
            count ++
        } else count = 0;
        if (this.dutyArray[2] === 'N' && this.dutyArray[3] === 'N') count++;
        if (this.dutyArray[3] === 'N' && this.dutyArray[4] === 'N') {
            count ++
        } else {
            count = 0
        }
        if (this.dutyArray[4] === 'N' && this.dutyArray[5] === 'N') count++;
        if (count > 2) {
            return false
        } else {
            return true
        }
    }

    orderOfDutyRule() {
        let index = 0
        for (const duty of this.dutyArray) {
            if (duty === 'E') {
                if (this.dutyArray[index + 1] === 'D' || this.dutyArray[index + 1] === 'MD') {
                    return false
                }
            }
            if (duty === 'N') {
                if (this.dutyArray[index + 1] === 'D' || this.dutyArray[index + 1] === 'E' || this.dutyArray[index + 1] === 'MD') {
                    return false
                }
            }
            index ++
            if (index === (this.dutyArray.length - 1)) return true
        }
    }

    ofCountRule() {

    }
}
