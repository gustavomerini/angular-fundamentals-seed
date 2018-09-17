import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: './passenger-viewer.component.html'
})
export class PassenverViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => (this.passenger = data));
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe(
        (data: Passenger) =>
          (this.passenger = Object.assign({}, this.passenger, event))
      );
  }
}
