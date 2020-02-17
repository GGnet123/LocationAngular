import { Component, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['pop-up.component.scss'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class PopUpComponent {
  @Input() isOpen = false;
}
