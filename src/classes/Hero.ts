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
}
