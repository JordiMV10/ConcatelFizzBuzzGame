import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnDestroy} from '@angular/core';
import {FormsModule} from '@angular/forms';




import { AppComponent } from './app.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { SequenceGeneratorComponent } from './components/sequence-generator/sequence-generator.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    ConfiguratorComponent,
    SequenceGeneratorComponent
  ],
  imports: [
    BrowserModule, FormsModule, NoopAnimationsModule, MatSliderModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
