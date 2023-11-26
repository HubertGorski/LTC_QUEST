export class States {
  state1: string;
  state2: string;
  state3: string;

  constructor(state1: string, state2: string, state3: string = "") {
    this.state1 = state1;
    this.state2 = state2;
    this.state3 = state3;
  }

  getNameStates() {
    const states = [this.state1, this.state2];
    if (this.state3) {
      states.push(this.state3);
    }
    return states;
  }
}
