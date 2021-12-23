import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  myGroup = new FormGroup({
    filterType: new FormControl('1'),
    battery: new FormControl(0),
  });
  @Output() filterArgs = new EventEmitter<{
    filterType: string;
    battery: number;
  }>();

  changeFilter() {
    this.filterArgs.emit({
      filterType: this.myGroup.controls['filterType'].value,
      battery: this.myGroup.controls['battery'].value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
