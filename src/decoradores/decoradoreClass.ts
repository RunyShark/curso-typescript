const printToConsole = (constructor: Function) => {
  console.log(constructor);
};

const printoConsoleHolaMundo = (print: boolean = false): Function => {
  return print
    ? () => console.log("Hola mundo")
    : () => console.log("Adios Mundo");
};

const bloquear = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@bloquear
@printoConsoleHolaMundo(true)
export class DecoradorPokemon {
  public publickApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
}
//* Decorador funcion
// @printoConsoleHolaMundo(true)
// export class DecoradorPokemon {
//   public publickApi: string = "https://pokeapi.co";
//   constructor(public name: string) {}
// }

//*Decorador clase
// @printToConsole
// export class DecoradorPokemon {
//   public publickApi: string = "https://pokeapi.co";
//   constructor(public name: string) {}
// }
