import { Component } from "react";

export class Class extends Component {
  state = {
    ime: "ime",
    prezime: "prezime"
  };

  onSubmit = () => {
    alert(
      "Zdravo " +
        this.state.ime +
        " " +
        this.state.prezime +
        " uživaj u našoj stranici"
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="ime"
          value={this.state.ime}
          onChange={(e) => this.setState({ ime: e.target.value })}
        ></input>
        <input
          placeholder="prezime"
          value={this.state.prezime}
          onChange={(e) => this.setState({ prezime: e.target.value })}
        />
        <button onClick={(e) => this.onSubmit(e)}>Potvrdi</button>
      </form>
    );
  }
}
export default Class;
