import { Component, OnInit } from '@angular/core';
const ERROR = 'ERROR';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public opera = '';
  public resultat = '';

  constructor() { }

  ngOnInit() {
  }

  effacer(): void {
    this.opera = '';
    this.resultat = '';
  }

  effacer1(): void {

    if (this.opera === ERROR) {
      this.opera = '';
    }

    try {
      // eslint-disable-next-line no-eval
      this.opera = this.opera.slice(0, -1);
    } catch {
      this.opera = ERROR;
    }
  }

  egale(): void {
    try {

      // eslint-disable-next-line no-eval
      this.opera = eval(this.opera);
    } catch {
      this.opera = ERROR;
    }
    this.resultat = '';
  }

  saisir(n: any): void {
    if (typeof this.opera === 'number') {
      this.opera = '';
    }

    if (this.opera === ERROR) {
      this.opera = '';
    }
    this.opera += n;

    try {

      // eslint-disable-next-line no-eval
      this.resultat = eval(this.opera);
    } catch {
      this.resultat = '';
    }
  }



}
