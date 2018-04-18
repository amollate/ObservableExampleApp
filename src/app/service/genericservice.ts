import { Injectable } from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class genericService {

    private newInstance = new BehaviorSubject<string>('This is Sample String');

    newInstanceObservable = this.newInstance.asObservable();

    constructor(){    }

    InvokeServiceMethod(showlatestInstance){
        this.newInstance.next(showlatestInstance);
    }

}