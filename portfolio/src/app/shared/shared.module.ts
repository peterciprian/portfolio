import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { CardComponent } from '../components/card/card.component';
import { SocialIconComponent } from '../components/social-icon/social-icon.component';
import { FrameComponent } from '../components/frame/frame.component';
import { BoxComponent } from '../components/box/box.component';

/**
 * Components
 */
const sharedComponents: any[] = [
  ButtonComponent,
  CardComponent,
  SocialIconComponent,
  FrameComponent,
  BoxComponent
];

/**
 * Services
 */
const sharedServices: any[] = [
];

/**
 * Directives
 */
const sharedDirectives: any[] = [
];

/**
 * Modules
 */
const sharedModules: any[] = [
];


@NgModule({
  declarations: [sharedComponents, sharedDirectives],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [
    sharedComponents, sharedDirectives, sharedModules
  ],
  providers: [
    sharedServices
  ]
})
export class SharedModule { }
