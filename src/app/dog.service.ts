import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogs: Dog[] = [
    // Sample
    { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, description: 'Friendly and playful', isAvailable: true },
    { id: 2, name: 'Bella', breed: 'Golden Retriever', age: 2, description: 'Friendly and playful', isAvailable: true },
  ];

  getDogs(): Observable<Dog[]> {
    return of(this.dogs);
  }

  addDog(dog: Dog): void {
    this.dogs.push(dog);
  }

  updateDog(dog: Dog): void {
    const index = this.dogs.findIndex(d => d.id === dog.id);
    if (index !== -1) {
      this.dogs[index] = dog;
    }
  }

  deleteDog(id: number): void {
    this.dogs = this.dogs.filter(dog => dog.id !== id);
  }

  expressInterest(dogId: number): void {
    const dog = this.dogs.find(d => d.id === dogId);
    if (dog) {
      dog.isAvailable = false;
    }
  }
}
