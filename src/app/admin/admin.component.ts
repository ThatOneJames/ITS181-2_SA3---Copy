import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  dogs: Dog[] = [];
  selectedDog: Dog | null = null;

  constructor(private dogService: DogService) {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  selectDog(dog: Dog): void {
    this.selectedDog = { ...dog };
  }

  addDog(newDog: Dog): void {
    this.dogService.addDog(newDog);
    this.loadDogs();
  }

  updateDog(dog: Dog): void {
    this.dogService.updateDog(dog);
    this.loadDogs();
  }

  deleteDog(id: number): void {
    this.dogService.deleteDog(id);
    this.loadDogs();
  }
}
