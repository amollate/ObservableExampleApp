import { Component, OnInit } from '@angular/core';
import { genericService } from '../service/genericservice';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  localInstance: string;
  constructor(private GenericService: genericService) { }

  ngOnInit() {

    this.GenericService.newInstanceObservable.subscribe(t => this.localInstance = t);
  }

}
