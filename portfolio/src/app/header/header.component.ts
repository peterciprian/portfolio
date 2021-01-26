import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faEmail = faAt;
  faFacebook = faFacebookF;

  colorLinkedin = '#2867B2';
  colorGithub = '#24292e';
  colorEmail = '#D44638';
  colorFacebook = '#4267B2';

  constructor() { }

  ngOnInit() {
  }

}
