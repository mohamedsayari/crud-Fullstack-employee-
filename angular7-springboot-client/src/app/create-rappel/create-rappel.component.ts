import { Component, OnInit } from '@angular/core';
import { Rappel } from '../rappel';
import { RappelService } from '../rappel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rappel',
  templateUrl: './create-rappel.component.html',
  styleUrls: ['./create-rappel.component.css']
})
export class CreateRappelComponent implements OnInit {

  rappel: Rappel = new Rappel();
  submitted = false;

  constructor(private rappelService: RappelService,
    private router: Router) { }

  ngOnInit() {
  }

  newRappel(): void {
    this.submitted = false;
    this.rappel = new Rappel();
  }

  save() {
    this.rappelService.createRappel(this.rappel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rappel = new Rappel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/rappels']);
  }
}

