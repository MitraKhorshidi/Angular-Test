import { Component ,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private router :Router = inject(Router)
  // constructor(private router : Router ){}

  onClick():void{
    this.router.navigate(['about']);
  }
}
