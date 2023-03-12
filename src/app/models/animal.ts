export abstract class Animal {
  public _name: string;
  public _index: number;

  public constructor(rname: string = "", rindex: number) {
    this._name = rname;
    this._index = rindex;
  }

  public getName(): string {
    return this._name;
  }
  public setName(rNewName: string): void {
    this._name = rNewName;
  }

  public getIndex(): number {
    return this._index;
  }

  public setIndex(rNewIndex: number): void {
    this._index = rNewIndex;
  }
}
