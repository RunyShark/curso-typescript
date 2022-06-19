export const printObject = (argument: any) => {
  console.log(`Generico 0`, argument);
};

export function generico<T>(argument: T): T {
  console.log(`Generic 1`, argument);
  return argument;
}

export const genericoArrow = <T>(argument: T): T => {
  console.log(`Generic 1`, argument);
  return argument;
};
