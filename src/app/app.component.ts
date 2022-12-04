import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages:any[] = [
    {title: 'Shoeper Shoes', url: '/home', icon: 'home'},
    {title: 'About', url: '/about', icon: 'person'},
    {title: 'Shoe Collection', url: '/shoes', icon: 'footsteps'},
    {title: 'Holy Grails', url: '/holy', icon: 'diamond'},
    

 
  ];
  constructor() {}
}
