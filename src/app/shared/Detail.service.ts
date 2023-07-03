import { BehaviorSubject } from "rxjs";
import { Data } from "./Data.model"


export class accordianService{
    private accoList : any = [] = [
        new Data('Section One','Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
        new Data('Section Two','Lorem Ipsum is simply dummy text of the printing and typesetting industry.')

    ];


    dataSub = new BehaviorSubject(this.accoList.slice());
    addNewObj(obj:any){
        this.accoList.push(obj);
        this.dataSub.next(this.accoList.slice())
    console.log(this.accoList)
    }
}