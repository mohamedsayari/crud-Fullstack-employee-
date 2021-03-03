import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { Observable } from 'rxjs';
import { DemandeService } from '../demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {

  demandes: Observable<Demande[]>;

  constructor(private demandeService: DemandeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.demandes = this.demandeService.getDemandesList();
  }

  deleteDemande(id: number) {
    this.demandeService.deleteDemande(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  demandeDetaile(id: number){
    this.router.navigate(['detaile', id]);
  }
  uppdateDemande(id: number){
    this.router.navigate(['uppdate', id]);
  }
}