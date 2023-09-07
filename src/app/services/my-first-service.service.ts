import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstServiceService {


  messages : Array<any>=[];

  constructor() { 
    this.init();
  }
  init():void{
    this.insert({name:'Mitra',email:'mitra@mail.com',message:'message'});
    this.insert({name:'Hossain',email:'mitra@mail.com',message:'message'});
    this.insert({name:'Roya',email:'mitra@mail.com',message:'message'});
  }

  insert(message:{name:string , email:string , message:string}):void{
    this.messages.push(message);
  }

  getAll():any[]{
    return this.messages;
  }

  delete(index:number):void{
    this.messages.splice(index,1);
  }
}
