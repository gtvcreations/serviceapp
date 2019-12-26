import { Component, OnInit } from '@angular/core';
import { ListdataserviceService } from '../listdataservice.service';

@Component({
  selector: 'app-listerrors',
  templateUrl: './listerrors.component.html',
  styleUrls: ['./listerrors.component.scss']
})
export class ListerrorsComponent implements OnInit {

  public list:any;
  public errorX:any;

  constructor(private _listService: ListdataserviceService) { }

  ngOnInit() {
    this._listService.getList().subscribe(
      data => this.list = data,
      error => this.errorX = error
    );
  }

}
