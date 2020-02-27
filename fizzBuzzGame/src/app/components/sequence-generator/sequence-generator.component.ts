import { DataModel } from './../../Model/data-model';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../services/config.service';





@Component({
  selector: 'app-sequence-generator',
  templateUrl: './sequence-generator.component.html',
  styleUrls: ['./sequence-generator.component.css']
})
export class SequenceGeneratorComponent implements OnInit {

  seqLength: number;
  startNumber: number;
  Sequence: Array<string>;
  dateTimeNow: number = Date.now();
  SequencesMap: Map<number, Array<string>>;

  test: boolean;

  dataModel: DataModel;



  constructor(public configSrvc: ConfigService)
  {
    this.SequencesMap = new Map([]);

  }

  ngOnInit(): void
  {
    this.dataModel = this.configSrvc.NewSequence();
  }

  NewSequence(): void
  {
    this.configSrvc.AddSequence(this.dataModel);
    this.dataModel = this.configSrvc.NewSequence();

  }



  SequenceGeneration()
  {
    this.seqLength = this.configSrvc.ConfigData();
    this.startNumber = this.configSrvc.StartSequence();
    this.Sequence = [];
    this.dateTimeNow = Date.now();
    this.dataModel.id = this.dateTimeNow;

    for ( let i = 0; i < this.seqLength ; i++)
    {
      let number = this.startNumber + i;
      let module3: number;
      let module5: number;
      module3 = number % 3;
      module5 = number % 5;
      if (module3 === 0 && module5 === 0)
      {
        this.Sequence[i] = 'FizzBuzz';
      }
      if (module3 === 0 && module5 !== 0)
      {
        this.Sequence[i] = 'Fizz';
      }
      if (module3 !== 0 && module5 === 0)
      {
        this.Sequence[i] = 'Buzz';
      }
      if (module3 !== 0 && module5 !== 0)
      {
        this.Sequence[i] = number.toString();
      }
    }

    this.dataModel.dataSequence = this.Sequence;
    this.NewSequence();
    this.SequencesMap.set(this.dateTimeNow, this.Sequence);
    console.log (this.SequencesMap);
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


