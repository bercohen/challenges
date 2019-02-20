import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],


})
export class ListComponent implements OnInit {

  public selectedProviders = JSON.parse(localStorage.getItem('selectedProviders')) || [];
  public unselectedProviders = JSON.parse(localStorage.getItem('unselectedProviders')) || [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {}

  saveProvider(provider){
    let index = this.unselectedProviders.indexOf(provider);
    this.selectedProviders.push(provider);
    this.unselectedProviders.splice(index, 1);
    this.store();
  }

  unsaveProvider(provider){
    let index = this.selectedProviders.indexOf(provider);
    this.unselectedProviders.push(provider);
    this.selectedProviders.splice(index, 1);
    this.store();
  }

  store(){
    localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
    localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
  }

  ngOnInit() {}

}
