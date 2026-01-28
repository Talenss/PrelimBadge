import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  hero = {
    title: 'About the Organization',
    description:
      'Learn how the team and committee leadership are shaping the world of conferences, get the latest conference news and updates on our blog, and contact us for guidance.',
    cta: 'Learn More'
  };

  onFreeGiftClick() {
    alert('Congratulations! You have received a FREE Gift! 🎁');
  }
}
