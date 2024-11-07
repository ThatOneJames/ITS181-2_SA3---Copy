import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  expressInterest(dogId: number): void {
    this.dogService.expressInterest(dogId);
    this.loadDogs();
  }
}
