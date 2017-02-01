export class Event {

  name: string;
  startAt: Date;
  endAt: Date;

  constructor(name: string, startAt: Date, endAt: Date) {
    this.name = name;
    this.startAt = startAt;
    this.endAt = endAt;
  }
}
