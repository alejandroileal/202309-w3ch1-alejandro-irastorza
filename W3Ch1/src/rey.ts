import { CharacterMaster } from './personaje';

export class King extends CharacterMaster {
  dialogue = 'Vais a morir todos';

  constructor(
    name: string,
    family: string,
    age: number,
    lifeStatus: boolean,
    emoji: string,
    yearsOfLeading: number
  ) {
    super(name, family, age, lifeStatus, emoji);
    this.yearsOfLeading = yearsOfLeading;
  }
}
