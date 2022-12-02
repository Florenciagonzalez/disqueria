import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {

    @Input() quantity: number = 0;
    @Input() max: number = 0;

    @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: any){
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
