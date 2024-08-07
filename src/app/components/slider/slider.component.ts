import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  title: string = 'Cuma Günü İndirimlerini Kaçırma';
  content: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, consequatur dicta dolorem ea eius exercitationem fugiat id impedit in maiores molestiae natus non numquam quia tempore temporibus veniam voluptatibus?';
  button : string = 'Alışverişe Başla';
}
