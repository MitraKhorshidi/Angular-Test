import { Component ,inject ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  private activatedRout : ActivatedRoute = inject(ActivatedRoute);
  param:any;
  lastName:string='';

  ngOnInit(): void {
    console.log(this.activatedRout);
    this.param = this.activatedRout.snapshot.params['username'];
    this.lastName = this.activatedRout.snapshot.queryParams['lastname'];
  }

}
