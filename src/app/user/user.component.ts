import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {
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
