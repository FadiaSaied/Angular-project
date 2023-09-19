import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  counter !: number
  constructor(private counterService: CounterService){}

  ngOnInit(){
    this.counterService.getCounterVal().subscribe((val) => this.counter = val)

}

}