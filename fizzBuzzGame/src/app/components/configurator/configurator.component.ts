import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit
{

  seqLength: number = null;
  enableButtonStart = false;
  enableButtonStop = false;
  enableButtonSeq = false;

  test: boolean;

  constructor(private configSrvc: ConfigService)
  {

  }

  ngOnInit(): void {

  }



  SaveConfig()
  {
      try
      {
        if (!isNaN(this.seqLength * 1) && this.seqLength !== null && this.seqLength > 0)
        {
          this.configSrvc.ConfigurationLength(this.seqLength);
          this.enableButtonStart = true;
          this.configSrvc.ActivateButtonsGenStart(this.enableButtonStart);
        }
        else
        {
          throw new Error('no seria necesario try catch');
        }

      }
      catch (error)
      {
        this.enableButtonStart = false;
        this.configSrvc.ActivateButtonsGenStart(this.enableButtonStart);
        this.enableButtonStop = false;
        this.configSrvc.ActivateButtonsGenStop(this.enableButtonStop);
        this.enableButtonSeq = false;
        this.configSrvc.ActivateButtonsGenSeq(this.enableButtonSeq);
        alert('Error!! : Invalid Value');

        this.seqLength = null;
      }
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
