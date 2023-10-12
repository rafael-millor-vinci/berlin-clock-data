export class BerlinCLock {

    
    minuteLine(time){
        if (time===0) {
            return "XXXX"
        }
        if (time===1) {
            return "JXXX"
        }
        if (time===2) {
            return "JJXX"
        }
        if (time===3) {
            return "JJJX"
        }
        if (time===4) {
            return "JJJJ"
        }

    }


}