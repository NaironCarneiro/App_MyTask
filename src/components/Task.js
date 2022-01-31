export class Task {
  constructor({ description = "", data, hour }) {
    this.description = description;
    this.data = data;
    this.hour = hour;
  }
}
