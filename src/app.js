export class BerlinCLock {


    minuteLine(time){
        if (time%5===0) {
            return "XXXX"
        }
        if (time%5===1) {
            return "JXXX"
        }
        if (time%5===2) {
            return "JJXX"
        }
        if (time%5===3) {
            return "JJJX"
        }
        if (time%5===4) {
            return "JJJJ"
        }

    }


}