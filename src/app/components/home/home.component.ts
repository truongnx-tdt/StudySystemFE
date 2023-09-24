import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  buttonText: string = 'Send code';
  counting: boolean = false;

  constructor() { }


  startCountdown() {
    this.counting = true;
    this.buttonText = 'Sending';

    var countdownDuration = 120; // Thời gian countdown (giây)
    
    const interval = setInterval(() => {
      countdownDuration--;

      if (countdownDuration === 0) {
        clearInterval(interval);
        this.counting = false;
        this.buttonText = 'Send again';
      } else {
        this.buttonText = `${countdownDuration}s`;
      }
    }, 1000);
  }
}
