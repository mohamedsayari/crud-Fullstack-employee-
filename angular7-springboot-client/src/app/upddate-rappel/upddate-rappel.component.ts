import { Component, OnInit } from '@angular/core';
import { Rappel } from '../rappel';
import { ActivatedRoute, Router } from '@angular/router';
import { RappelService } from '../rappel.service';

@Component({
  selector: 'app-upddate-rappel',
  templateUrl: './upddate-rappel.component.html',
  styleUrls: ['./upddate-rappel.component.css']
})
export class UpddateRappelComponent implements OnInit {

  id: number;
  rappel: Rappel;
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private rappelService: RappelService) { }

  ngOnInit() {
    this.rappel = new Rappel();

    this.id = this.route.snapshot.params['id'];
    
    this.rappelService.getRappel(this.id)
      .subscribe(data => {
        console.log(data)
        this.rappel = data;
      }, error => console.log(error));
  }

  upddateRappel() {
    this.rappelService.upddateRappel(this.id, this.rappel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rappel = new Rappel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.upddateRappel();    
  }

  gotoList() {
    this.router.navigate(['/rappels']);
  }
}



