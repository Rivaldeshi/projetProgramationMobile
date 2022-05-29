import { Component, OnInit } from '@angular/core';
const ERROR = 'ERROR';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public opera = '';

  constructor() { }

  ngOnInit() {
  }

  effacer(): void {
    this.opera = '';
  }


  egale(): void {
    try {

      // eslint-disable-next-line no-eval
      this.opera = eval(this.opera);
    } catch {
      this.opera = ERROR;
    }
  }

  saisir(n: any): void {
    if (typeof this.opera === 'number') {
      this.opera = '';
    }

    if (this.opera === ERROR) {
      this.opera = '';
    }
    this.opera += n;
  }



}
