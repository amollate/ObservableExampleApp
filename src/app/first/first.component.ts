import { Component, OnInit } from '@angular/core';
import { genericService } from '../service/genericservice';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  localfirstCmp : string;
  newInstanceFirstCmp: string;
  constructor(private GenericService: genericService) { }

  ngOnInit() {
    this.GenericService.newInstanceObservable.subscribe(temp => this.localfirstCmp = temp);
  }

  editTheInstance(){
    this.GenericService.InvokeServiceMethod(this.newInstanceFirstCmp);
  }

}
