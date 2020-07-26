import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MaterialModule } from '../shared/material/material.module';
//import { MatDatepickerModule } from '@angular/material/datepicker';import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
//import { ValidarCamposService } from '../shared/components/campos/validar-campos.service';
import { VisualizarFilmesComponent } from './visualizar-filmes/visualizar-filmes.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    //MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    //ValidarCamposService,
    InfiniteScrollModule
  ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent, VisualizarFilmesComponent]
})
export class FilmesModule { }

