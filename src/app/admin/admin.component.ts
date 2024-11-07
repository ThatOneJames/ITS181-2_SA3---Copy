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

  newDog: Dog = {
    id: 0,
    name: '',
    breed: '',
    age: 0,
    description: '',
    isAvailable: true
  };

  constructor(private dogService: DogService) {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe(dogs => this.dogs = dogs);
  }

  selectDog(dog: Dog): void {
    this.selectedDog = { ...dog };
  }

  addDog(): void {
    this.newDog.id = Date.now();
    this.dogService.addDog(this.newDog);
    this.newDog = { id: 0, name: '', breed: '', age: 0, description: '', isAvailable: true };
    this.loadDogs();
  }

  updateDog(dog: Dog): void {
    this.dogService.updateDog(dog).subscribe(() => this.loadDogs());
  }

  deleteDog(id: number): void {
    this.dogService.deleteDog(id).subscribe(() => this.loadDogs());
  }
}
