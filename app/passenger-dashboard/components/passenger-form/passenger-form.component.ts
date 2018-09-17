import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
}
