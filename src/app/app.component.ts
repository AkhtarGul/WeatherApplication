import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router:Router){

  }
  title = 'WeatherApplication';

  cityControl!: FormControl;
  cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.cityControl= new FormControl("");

    this.cityControl.valueChanges.subscribe(value=>{
      this.router.navigate([value]);
    })
  }


}
