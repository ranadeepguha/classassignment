import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './apptodo.component.html',
  styleUrls: ['./apptodo.component.css']
})
export class ApptodoComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  counter = 0;

  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }
  constructor() { }

  ngOnInit() {
  }

}
