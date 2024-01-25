import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing-pge',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './landing-pge.component.html',
  styleUrl: './landing-pge.component.css'
})


export class LandingPgeComponent {
  create:boolean=false;
  title:string=" ";
  view:boolean=false;
  index:number=1;
  i:number=0;
  new: string[]=[];
  pushNewChapter:string[]=[];   


addNewChapter()
{
  
  this.pushNewChapter.push("newChapter");
  this.addI();
  this.title="chapter" ;
  this.new.push("addNew");
}
addI()
{
  this.i++;
}





showOrHideMenu()
{
  if(this.view==false)
  {
    this.view=true;
  }
  else
  {
    this.view=false;
  }
}

}
