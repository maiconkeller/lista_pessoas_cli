import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }

  pessoas: Pessoa[];

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getPessoas()
      .subscribe( pessoas => this.pessoas = pessoas);
  }

}
