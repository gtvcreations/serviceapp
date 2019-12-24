import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input("aTitle") public appTitle:string;
  @Input("aDesc") public appDesc:string;

  constructor() { }

  ngOnInit() {
  }

}
