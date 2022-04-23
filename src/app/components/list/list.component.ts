import { Component, OnInit, Input } from '@angular/core';
import data from '../../data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  events = data().events;
  //eventsData [] =
  // data.events;
  constructor() {}

  ngOnInit(): void {}
}
