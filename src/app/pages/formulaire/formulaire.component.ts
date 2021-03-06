import { Component, OnInit } from '@angular/core';
import {PizzaModel} from "../../models/pizza.model";
import {PizzaService} from "../../services/pizza.service";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  pizza:PizzaModel = null;
  constructor(private pizzaService:PizzaService, private loggerService:LoggerService) {
    this.loggerService.logger("formulaire ","info");
  }

  public ngOnInit():void {
    this.pizza = (this.pizzaService.getPizzaPrecedente() !== null )? this.pizzaService.getPizzaPrecedente() : new PizzaModel();
  }

  public handleClickCommander():void{
    this.pizzaService.setPizzaCommande(this.pizza);
  }

  public validateForm():boolean{
    let pizza = this.pizza;
    return !pizza.base || !pizza.pate || !(pizza.anchois || pizza.magret || pizza.miel || pizza.jambon);
  }

}
