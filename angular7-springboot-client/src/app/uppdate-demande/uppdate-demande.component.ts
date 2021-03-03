import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-uppdate-demande',
  templateUrl: './uppdate-demande.component.html',
  styleUrls: ['./uppdate-demande.component.css']
})
export class UppdateDemandeComponent implements OnInit {
  id: number;
  demande: Demande;
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private demandeService: DemandeService) { }

  ngOnInit() {
    this.demande = new Demande();

    this.id = this.route.snapshot.params['id'];
    
    this.demandeService.getDemande(this.id)
      .subscribe(data => {
        console.log(data)
        this.demande = data;
      }, error => console.log(error));
  }

  uppdateDemande() {
    this.demandeService.uppdateDemande(this.id, this.demande)
      .subscribe(data => console.log(data), error => console.log(error));
    this.demande = new Demande();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.uppdateDemande();    
  }

  gotoList() {
    this.router.navigate(['/demandes']);
  }
}
