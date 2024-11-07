import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogs: Dog[] = [
    { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, description: 'Friendly and playful', isAvailable: true },
    { id: 2, name: 'Bella', breed: 'Golden Retriever', age: 2, description: 'Calm and gentle', isAvailable: true }
  ];
  private nextId = this.dogs.length + 1;

  getDogs(): Observable<Dog[]> {
    return of(this.dogs);
  }

  addDog(dog: Dog): void {
    dog.id = this.nextId++;
    this.dogs.push(dog);
  }

  updateDog(dog: Dog): Observable<void> {
    const index = this.dogs.findIndex(d => d.id === dog.id);
    if (index !== -1) {
      this.dogs[index] = dog;
    }
    return of();
  }

  deleteDog(id: number): Observable<void> {
    this.dogs = this.dogs.filter(dog => dog.id !== id);
    return of();
  }

  expressInterest(dogId: number): void {
    const dog = this.dogs.find(d => d.id === dogId);
    if (dog) {
      dog.isAvailable = false;
    }
  }
}
