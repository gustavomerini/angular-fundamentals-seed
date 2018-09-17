import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output
} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter();

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and Hold baggage'
    }
  ];

  handleSubmit(passenger: Passenger, valid: boolean) {
    if (valid) {
      this.update.emit(passenger);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  toggleCheckIn(checkedIn: Boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
