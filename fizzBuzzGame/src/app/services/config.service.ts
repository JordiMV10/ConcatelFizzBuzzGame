import { DataModel } from './../Model/data-model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  confLength: number;
  startSequence: number;
  public sequences: DataModel[];
  activateButtonStart: boolean;
  activateButtonStop: boolean;
  activateButtonsGenSeq: boolean;
  constructor()
  {
    this.sequences = [];
  }

  ActivateButtonsGenStart(enableButtonsStart)
  {
    this.activateButtonStart = enableButtonsStart;
    return this.activateButtonStart;
  }

  EnableButtonsGenStart()
  {
    let enableButtonsStart = this.ActivateButtonsGenStart(this.activateButtonStart);
    return enableButtonsStart;
  }

  ActivateButtonsGenStop(enableButtonsStop)
  {
    this.activateButtonStop = enableButtonsStop;
    return this.activateButtonStop;
  }

  EnableButtonsGenStop()
  {
    let enableButtonsStop = this.ActivateButtonsGenStop(this.activateButtonStop);
    return enableButtonsStop;
  }
  ActivateButtonsGenSeq(enableButtonsGenSeq)
  {
    this.activateButtonsGenSeq = enableButtonsGenSeq;
    return this.activateButtonsGenSeq;
  }

  EnableButtonsGenSeq()
  {
    let enableButtonsGenSeq = this.ActivateButtonsGenSeq(this.activateButtonsGenSeq);
    return enableButtonsGenSeq;
  }

  ConfigurationLength(configLength)
  {
      this.confLength = configLength;
      return this.confLength;
  }

  ConfigData()
  {
    let configData = this.ConfigurationLength(this.confLength);
    return configData;
  }

  StartNumber(startSeq)
  {
      this.startSequence = startSeq;
      return this.startSequence;
  }

  StartSequence()
  {
    let startSequence = this.StartNumber(this.startSequence);
    return this.startSequence;
  }



  AddSequence(sequence: DataModel) {
    this.sequences.push(sequence);
  }

  NewSequence(): DataModel {
    return {
      id: null ,
      dataSequence: []

    };
  }

}
