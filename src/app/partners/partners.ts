import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  hero = {
    title: 'Our Partners',
    description:
      'You can achieve a very impressive effect by using our animated navbar, which is transparent on start, and change the color after the scroll.',
    cta: 'Become a Sponsor'
  };

  partnersSection = {
    title: 'Below are our Corporate Partners',
  };

  partners = [
    {
      name: 'Microsoft',
      logo: 'https://static.wikia.nocookie.net/windows/images/3/33/Microsoft-logo.png/revision/latest?cb=20231201023319',
      level: 'Platinum',
      website: 'https://www.microsoft.com',
    },
    {
      name: 'Apple Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      level: 'Gold',
      website: 'https://www.apple.com',
    },
    {
      name: 'Amazon',
      logo: 'https://m.media-amazon.com/images/I/31epF-8N9LL.png',
      level: 'Silver',
      website: 'https://www.amazon.com',
    },
    {
      name: 'Google Inc.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28Yb6U3AlNA5vIusLWEahuo87-kpKkkZefA&s',
      level: 'Bronze',
      website: 'https://www.google.com',
    },
  ];
}
