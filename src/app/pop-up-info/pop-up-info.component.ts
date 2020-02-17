import { Component, Input } from '@angular/core';

@Component({
  selector: 'pop-app-info',
  templateUrl: './pop-up-info.component.html',
  styleUrls: ['pop-up-info.component.scss']
})
export class PopUpInfoComponent {
    @Input() numOfUsers: number;
    popUpOpen = false;
    openPopUp() {
        this.popUpOpen = true;
    }

    close() {
        this.popUpOpen = false;
    }
}
