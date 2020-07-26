import { Component, OnInit } from '@angular/core';
import { FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;

  msgObrigatorio: "Campo obrigatório!";

  constructor(/*public validar: ValidarCamposService, */private fb: FormBuilder) { }

  get f(){
    return this.cadastro.controls;
  }

  ngOnInit() {
    this.cadastro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      urlFoto: ['', [Validators.minLength(10)]],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0,[Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      generos: ['', [Validators.required]]
    })
  }
  
  Salvar(): void{
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid){
      return;
    }

    alert('Sucesso!!' + JSON.stringify(this.cadastro.value, null, 4))
  }
  LimparForm(): void{
    this.cadastro.reset();
  }

}
