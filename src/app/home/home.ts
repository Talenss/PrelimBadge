import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  // Hero text
  title = 'Research Conferences';
  description = 'Join our online events this 2026!';
  image = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80';
  // Stats section
  value = 'Join our Research Conferences around the globe';

  // Featured products
  products = [
    { id: 1, title: 'France', img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", description: "The largest country in Western Europe, has long been a gateway between the continent's northern and southern regions", features: ['Architecture and Fine Arts', 'Cultural Events', 'Safety and Security']},
    { id: 2, title: 'Seoul', img: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80', description: "Korean Soul, formally Soul-t'ükpyõlsi ('Special City of Seoul'), city and capital of South Korea (the Republic of Korea).", features: ['Humanities and Arts', 'Cultural Events', 'Safety and Security']},
    { id: 3, title: 'San Francisco', img: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800&q=80', description: "It is a cultural and financial centre of the western United States and one of the country's most cosmopolitan cities.",features: ['Science and Technology', 'Cultural Events', 'Safety and Security']},
    { id: 4, title: 'Boston', img: 'https://images.unsplash.com/photo-1467951591042-f388365db261?w=800&q=80', description: 'Best known for its famous baked beans, Fenway Park, The Boston Marathon, and of course for the bar from Cheers. Engineering and Tech Cultural Events', features: ['Engineering and Tech', 'Cultural Events', 'Safety and Security']}
  ];

  // href link
  linkseoul = 'https://en.wikipedia.org/wiki/Seoul';
  linkboston = 'https://en.wikipedia.org/wiki/Boston';
  linksanfrancisco = 'https://en.wikipedia.org/wiki/San_Francisco';
  linkfrance = 'https://en.wikipedia.org/wiki/France';

  ngAfterViewInit(): void {
    try {
      const v = this.heroVideo.nativeElement;
      v.muted = true;
      v.volume = 0;
      // attempt to play muted video to satisfy autoplay policy
      v.play().catch(() => {});
    } catch (e) {
      // ignore if element not found
    }
  }

}
