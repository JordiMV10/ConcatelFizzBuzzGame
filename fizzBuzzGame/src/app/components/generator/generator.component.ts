import { Component, OnInit,  } from '@angular/core';
import { ConfigService } from './../../services/config.service';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

export class GeneratorComponent implements OnInit
{

  randomNumber: number;

  myStartNumber: number;
  enableButtons = false;
  enableButtonGenSeq = false;
  enableButtonStop = false;
  test: boolean;

  constructor(public configSrvc: ConfigService)
  {

  }

  ngOnInit(): void
  {
  }

  MyRandomNumber()  // Llama al método GeneratorNumber cada 50 ms
  {
    setInterval(() => { this.GeneratorNumber(); }, 50);

    this.enableButtonStop = true;
    this.configSrvc.ActivateButtonsGenStop(this.enableButtonStop)

  }

  GeneratorNumber()
  {
    for ( let i = 1 ; i < 1000; i++)
      {
        this.randomNumber = Math.floor(Math.random() * 1000);
        return this.randomNumber;
      }
  }

  GetRandomNumber()
  {
    this.myStartNumber = this.randomNumber;
    this.configSrvc.StartNumber(this.myStartNumber);
    this.enableButtonGenSeq = true;
    this.configSrvc.ActivateButtonsGenSeq(this.enableButtonGenSeq);
    return this.myStartNumber;
  }

  StartSequenceNumber()
  {
    this.myStartNumber = this.configSrvc.StartSequence();
  }


  activarTesting() {
    this.test = true;
  }

  desactivarTesting() {
    this.test = false;
  }
  verificarTesting() {
    return this.test ? 'Testing activado' : 'Testing desactivado';
  }

}
