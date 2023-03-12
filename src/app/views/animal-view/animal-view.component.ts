import { Component, OnInit } from "@angular/core";
import { Chien } from "src/app/models/chien";
import { Cheval } from "src/app/models/cheval";

@Component({
  selector: "app-animal-view",
  templateUrl: "./animal-view.component.html",
  styleUrls: ["./animal-view.component.css"]
})
export class AnimalViewComponent implements OnInit {
  monchien: Chien;
  moncontenu: string = "Toto fait du vélo";
  chiens: Chien[];
  monCheval: Cheval;
  chevaux: Cheval[];

  constructor() {
    this.monchien = new Chien("Nemo", 0);
    this.chiens = [];
    this.monCheval = new Cheval("", 0);
    this.chevaux = [];
  }

  changeText() {
    this.moncontenu = "Toto fait du skate";
    this.monchien.setName("Mia");
  }

  ngOnInit(): void {
    this.initChiens();
    this.initChevaux();
  }

  initChiens() {
    this.chiens = [];
    this.chiens.push(new Chien("Iris", 1));
    this.chiens.push(new Chien("Nouméa", 2));
    this.chiens.push(new Chien("Goofy", 3));
    this.chiens.push(new Chien("Rova", 4));
  }

  initChevaux() {
    this.chevaux = [];
    this.chevaux.push(new Cheval("Nemesis", 1));
    this.chevaux.push(new Cheval("Groot", 2));
    this.chevaux.push(new Cheval("Raiponce", 3));
    this.chevaux.push(new Cheval("Ratatouille", 4));
    this.chevaux.push(new Cheval("Bernard", 5));
  }

  timeLeft: number = 60;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    }, 1000);
  }
  stopTimer() {}

  runCourse() {}

  changeIndex() {
    for (let cheval of this.chevaux) {
      if (cheval._index < this.chevaux.length + 1) {
        cheval._index++;
      }
      if (cheval._index >= this.chevaux.length + 1) {
        cheval._index = 1;
      }
    }
  }
  getHTMLContent(e: any) {
    console.log(e.innerHTML);
  }
  changeNameOrder() {}
}
