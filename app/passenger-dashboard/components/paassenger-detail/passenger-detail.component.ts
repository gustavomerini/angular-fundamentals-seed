import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      console.log(
        'mgOnChange is assinging a copy to "this.detail" ',
        changes.detail.currentValue
      );
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  toggleEdit() {
    if (this.editing) {
      console.log('Event notified');
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onNameChange(value: string) {
    console.log('OnNameChange is updating this.detail.fullname with: ', value);
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
