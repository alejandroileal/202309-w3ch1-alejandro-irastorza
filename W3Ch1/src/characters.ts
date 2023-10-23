export interface CharactersProperties {
  name: string;
  family: string;
  age: number;
  lifeStatus: boolean;
  emoji: string;
  dialogue?: string;
  yearsOfLeading?: number;
  weapon?: string;
  skillLevel?: number;
  charToAdvice?: string;
  servility?: number;
}

export class CharacterMaster implements CharactersProperties {
  constructor(name: string, family: string, age: number, lifeStatus: boolean) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.lifeStatus = lifeStatus;
  }
}
