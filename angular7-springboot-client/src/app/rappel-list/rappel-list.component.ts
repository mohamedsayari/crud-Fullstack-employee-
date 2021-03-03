import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rappel } from '../rappel';
import { RappelService } from '../rappel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rappel-list',
  templateUrl: './rappel-list.component.html',
  styleUrls: ['./rappel-list.component.css']
})
export class RappelListComponent implements OnInit {

  rappels: Observable<Rappel[]>;

  constructor(private rappelService: RappelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rappels = this.rappelService.getRappelsList();
  }

  deleteRappel(id: number) {
    this.rappelService.deleteRappel(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  rappelDetaille(id: number){
    this.router.navigate(['detaille', id]);
  }
  upddateRappel(id: number){
    this.router.navigate(['upddate', id]);
  }
}

