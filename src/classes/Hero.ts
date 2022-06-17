import powers, { Power } from "../data/powers";
interface B {
  name: string;
  powerId: number;
  age: number;
}

export class Hero implements B {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  get powers(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "not found"
    );
  }
}
