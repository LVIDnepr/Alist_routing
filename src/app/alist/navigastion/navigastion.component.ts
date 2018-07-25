import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigastion',
  templateUrl: './navigastion.component.html',
  styleUrls: ['./navigastion.component.css']
})
export class NavigastionComponent  {
  @Input() selectPage: string
  @Output() pageChange = new EventEmitter<string>()
  
  constructor() { }  
  
  isActivePage(pageToCheck: string): boolean{
    return this.selectPage === pageToCheck;
  }

  changePage(pageToGo: string): void{
    this.pageChange.emit(pageToGo);
  }
}
