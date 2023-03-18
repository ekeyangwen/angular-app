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
    this.monCheval = new Cheval("Lila", 0);
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

  startTimer() {}

  runCourse() {}

  timeLeft: number = 60;
  interval: any;
  a: number = 2;

  runRace() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft == 60;
      }
      for (let i = this.chevaux.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.chevaux[i], this.chevaux[j]] = [this.chevaux[j], this.chevaux[i]];
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval);
    }, 60000);
  }
  pauseTimer() {
    setTimeout(() => {
      clearInterval(this.interval);
    });
  }
  stopTimer() {
    setTimeout(() => {
      clearInterval(this.interval);
      this.timeLeft = 60;
    });
  }
}
