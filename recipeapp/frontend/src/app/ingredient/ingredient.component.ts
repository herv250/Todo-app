import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

}
