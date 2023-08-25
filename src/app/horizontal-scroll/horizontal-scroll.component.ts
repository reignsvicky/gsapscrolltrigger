import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent implements AfterViewInit {
  cards: any[]=[
    {
      name: 'Angular',
      color: '#1835B8',
    },
    {
      name: 'React JS',
      color: '#1835B8',
    },
    {
      name: 'GSAP',
      color: '#1835B8',
    },
    {
      name: 'Tailwind',
      color: '#1835B8',
    },
    {
      name: 'Vue JS',
      color: '#1835B8',
    },
    {
      name: 'Angular',
      color: '#1835B8',
    },
    {
      name: 'Animation',
      color: '#1835B8',
    },
    {
      name: 'GSAP',
      color: '#1835B8',
    },
    {
      name: 'Scroll Trigger',
      color: '#1835B8',
    },
    {
      name: 'Smooth Scroll',
      color: '#1835B8',
    },
    {
      name: 'Angular',
      color: '#1835B8',
    },
    {
      name: 'React JS',
      color: '#1835B8',
    },
    {
      name: 'GSAP',
      color: '#1835B8',
    },
    {
      name: 'Tailwind',
      color: '#1835B8',
    },
    {
      name: 'Vue JS',
      color: '#1835B8',
    },
    {
      name: 'Angular',
      color: '#1835B8',
    },
    {
      name: 'Animation',
      color: '#1835B8',
    },
    {
      name: 'GSAP',
      color: '#1835B8',
    },
    {
      name: 'Scroll Trigger',
      color: '#1835B8',
    },
    {
      name: 'Smooth Scroll',
      color: '#1835B8',
    },
  ]

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    this.horizontalCardFakeScroll();
    this.horizontalTextFakeScroll();
  }


  horizontalCardFakeScroll(){
    const cardElements = this.el.nativeElement.querySelectorAll(
      '.card'
    );

    cardElements.forEach((card: HTMLElement) => {
      gsap.set(card, { scale: 0.95 });
      gsap.to(card, {
        x: '-200%',
        duration: 0.5,
        // delay: 1,
        scale: 1.15,
        scrollTrigger: {
          trigger: '.card-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });
    });
  }

  horizontalTextFakeScroll(){
    const letters = this.el.nativeElement.querySelector(
      '.letters'
    );
    gsap.set(letters, { scale: 0.5 });
    gsap.to(letters, {
      x: '10%',
      duration: 4,
      // delay: 1,
      scale: 1.15,
      scrollTrigger: {
        trigger: '.text-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }
}
