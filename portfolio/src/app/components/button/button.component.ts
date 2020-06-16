import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() link: any;
  @Input() content: string;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.link);
    console.log(this.content);
  }

  navigate() {
    console.log(this.link);
    this.router.navigate([this.link]);
  }
}
