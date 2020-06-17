import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() link: any;
  @Input() content: string;

  constructor(private router: Router) { }

  navigate() {
    if (this.link.startsWith('/')) {
      this.router.navigate([this.link]);
    } else {
      window.open(this.link, '_blank');
    }
  }
}
