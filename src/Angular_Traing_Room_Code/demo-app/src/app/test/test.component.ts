import { EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnChanges,OnDestroy {

  @Input('parentData') public inputData: any;

  @Output() public event=new EventEmitter();

  constructor() { }
  ngOnDestroy(): void {
    console.log("inside ngOnDestroy(): void")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("inside  ngOnChanges(changes: SimpleChanges): void")
  }

  ngOnInit(): void {
    console.log("inside  ngOnInit(): void ")
    window.onbeforeunload = () => this.ngOnDestroy();
  }


  sendEvent(){
    this.event.emit('Hello Zensar !!!!');
  }

}
