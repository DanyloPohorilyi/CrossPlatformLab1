import { Publishable } from "../interfaces/publishable.interface";
import { Readable } from "../interfaces/readable.interface";

export abstract class PrintedPublication implements Publishable, Readable {
  constructor(public title: string, public author: string, public pageCount: number) { }

  abstract read(): void;
  abstract publish(): void;
}
