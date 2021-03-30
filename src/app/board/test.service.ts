import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})


export class TestService {
  counter = 0;

  incr() {
    this.counter++
  }

  decr() {
    this.counter--
  }
}
