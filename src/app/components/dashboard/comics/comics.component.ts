import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagementService } from '../../../service/data-management.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent implements OnInit {


  constructor(private router: Router, protected dataMangamente: DataManagementService) { }

  comics: any[] = []

  public ngOnInit(): void {
    this.getComics();
  }

  public navegationToDetail() {
    this.router.navigate(['/detail'])
  }

  public getComics() {
    this.dataMangamente.getFindAll("");
  }

}
