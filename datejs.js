class MyDate{
    constructor(day,month,year) {
        this.day=day;
        this.month=month;
        this.year=year;
    }
    getDay(){
        return this.day;

    }
    setDay(day){
        this.day=day;
    }
    getMonth(){
         return this.month
    }
    setMonth(month){
        this.month=month;
    }
    getYear() {
        return this.year;
    }
    setYear(year){
        this.year=year;
    }
    setDate(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
}
let day=new MyDate(23,3,2021);
document.write(" day "+day.getDay());
document.write(" month "+day.getMonth());
document.write(" year "+day.getYear());
day.setDay(24);
day.setMonth(4);
day.setYear(2022);
alert("day"+day.getDay()+" month "+day.getMonth()+" year "+day.getYear())
