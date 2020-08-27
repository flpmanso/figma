import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {

  @Input() card3: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
