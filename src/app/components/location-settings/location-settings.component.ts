import {Component} from '@angular/core';

export interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location-settings',
  templateUrl: './location-settings.component.html',
  styleUrls: ['./location-settings.component.css']
})

export class LocationSettingsComponent{
  locations: Location[] = [
    {value: 'Centurion-0', viewValue: 'Centurion'},
    {value: 'Midrand-1', viewValue: 'Midrand'},
    {value: 'Braamfontein-2', viewValue: 'Braamfontein'},
    {value: 'Pretoria-3', viewValue: 'Pretoria'},
    {value: 'Soweto-4', viewValue: 'Soweto'},
    {value: 'Rosebank-5', viewValue: 'Rosebank'},
    {value: 'Sandton-6', viewValue: 'Sandton'},
    {value: 'Tembisa-7', viewValue: 'Tembisa'}
  ];
  
}
