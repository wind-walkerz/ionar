import { Component } from '@angular/core';
import {
  bounce_in_down_trigger,
  bounce_in_trigger,
  bounce_out_up_trigger, fade_in_down_trigger, fade_in_trigger, fade_out_up_trigger,
  rubber_band_trigger
} from '@ionar/animations';

@Component({
  selector: 'ionar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    rubber_band_trigger,

    bounce_in_trigger, bounce_in_down_trigger, bounce_out_up_trigger,

    fade_in_trigger,
    fade_in_down_trigger, fade_out_up_trigger,
  ]
})
export class AppComponent {
  animated: Boolean = false;

  startAnimated = () => {
    this.animated = !this.animated;
  };
}
