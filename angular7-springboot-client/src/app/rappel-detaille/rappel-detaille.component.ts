import { Component, OnInit } from '@angular/core';
import { Rappel } from '../rappel';
import { ActivatedRoute, Router } from '@angular/router';
import { RappelService } from '../rappel.service';

@Component({
  selector: 'app-rappel-detaille',
  templateUrl: './rappel-detaille.component.html',
  styleUrls: ['./rappel-detaille.component.css']
})
export class RappelDetailleComponent implements OnInit {
  id: number;
  rappel: Rappel;

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

  list(){
    this.router.navigate(['rappels']);
  }

}
