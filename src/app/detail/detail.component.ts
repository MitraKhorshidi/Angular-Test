import { Component, Input ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input() detail: any = {};
  @Input() index: number = -1;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete():void{
    this.delete.emit(this.index);
  }


}
