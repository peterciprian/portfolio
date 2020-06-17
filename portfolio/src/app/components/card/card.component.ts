import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() imageSrc: string;
  @Input() title: string;
  @Input() text: string;
  @Input() link: string;
  @Input() list: string[];
  @Input() buttonText: string;

  constructor() { }

}
