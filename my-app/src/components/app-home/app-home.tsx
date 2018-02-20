import { Component, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  sentence: string = "";
  @State() words: string[] = ["one", "two", "three"];
  @State() word: string = "";

  showWord(w): any {
    this.word = w;
    this.shuffle();
  }
  shuffle() {
    this.words = ["three", "two", "one"];
  }

  render() {
    let b = this.words
    .map(word => (<button  onClick={() => {this.showWord(word)}}>{word}</button>
    ));
    return [<p>{this.word}</p>, b];
  }
}
