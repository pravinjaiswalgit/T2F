import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-child1',
  templateUrl: './lazy-child1.component.html',
  styleUrls: ['./lazy-child1.component.css']
})
export class LazyChild1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
