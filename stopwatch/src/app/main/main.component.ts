import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public start:boolean = false;
  public initialDate:string = '00:00:00:000'
  public hours:number = 0;
  public min:number = 0;
  public sec:number = 0;
  public mil_sec:number = 0;
  public count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  double() {
    this.count++;
    if (this.count === 2) {
      this.start = false;
    }

    setTimeout(() => (this.count = 0), 500)
  }

  starting() {
    this.start = true;
    this.check();
  }

  stoping() {
    this.start = false;
    this.initialDate = '00:00:00:000';
    this.hours = 0;
    this.min = 0;
    this.sec = 0;
    this.mil_sec = 0;
  }

  reset() {
    this.initialDate = '00:00:00:000';
    this.hours = 0;
    this.min = 0;
    this.sec = 0;
    this.mil_sec = 0;
    this.start = true;
    this.check();
  }

  func_sec() {
    if (this.start) {
      this.mil_sec = this.mil_sec + 10;
        if (this.mil_sec >= 1000) {
          this.sec++;
          this.mil_sec = 0;
            if (this.sec >= 60) {
              this.min++;
              this.sec = 0;
                if (this.min >= 60) {
                  this.hours++;
                  this.min = 0;
                }
            }
        }

          this.initialDate = (this.hours < 10 ? '0' + this.hours : this.hours) + ':' +
                             (this.min < 10 ? '0' + this.min : this.min) + ':' +
                             (this.sec < 10 ? '0' + this.sec : this.sec) + ':' +
                             (this.mil_sec < 100 ? '0' + this.mil_sec : this.mil_sec);

          this.check();
      }
  }

  check() {
    setTimeout(() => {this.func_sec()}, 10);
  }

}
