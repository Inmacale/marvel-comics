import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent {


  constructor(private router: Router) { }

  comics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  public navegationToDetail() {
    this.router.navigate(['/detail'])
  }


}
