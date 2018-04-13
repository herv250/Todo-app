export enum UnitType {
    None,
    Liter,
    Gram,
    Tbsp
}

export class IngredientUnit {
    constructor(private _amount: number,
    private _unit: UnitType){        
    }

    get amount(): number {
        return this._amount;
    }

    get unit(): UnitType {
        return this._unit;
    }
}

export class Ingredient {
    private _id: string;
    private _name: string;
    private _ingredientunit: IngredientUnit;

    constructor(name: string, amount?: number, unit?: UnitType){
        this._name = name;
        this._ingredientunit = 
            new IngredientUnit(amount || 1, unit || UnitType.None);
    }

    public get id(): string {
		return this._id;
	}
    

    public get name(): string {
		return this._name;
	}
        
    public get unit(): UnitType {
		return this._ingredientunit.unit;
    }

    get amount(): Number {
        return this._ingredientunit.amount;
    }
    

    toJSON(){
        return {
          _id: this._id,
          name: this._name,
          amount: this._ingredientunit.amount,
          unit: this._ingredientunit.unit
        };
      }
    
      static fromJSON(json: any): Ingredient{
        const ing = new Ingredient(json.name, json.amount, json.unit);
        ing._id = json._id;
        return ing;
      }
}