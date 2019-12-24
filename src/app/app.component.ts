import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'Service Application';
  public desc:string = 'Service Application Description goes here...';

  public copyright:{} = {
    name: "XYZ Pvt Ltd",
    year: new Date().getFullYear()
  };

  public navlinks:{}[] = [
    {
      title: "Link1",
      url: "#link1",
      target: "_blank"
    },
    {
      title: "Link2",
      url: "#link2",
      target: "_self"
    },
    {
      title: "Link3",
      url: "#link3",
      target: "_parent"
    },
    {
      title: "Link4",
      url: "#link4"
    },
    {
      title: "Link5",
      url: "#link5"
    }
  ];
}
