import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const PESSOAS: Pessoa[] = [
  { nome: 'Maicon Rodrigo', sexo: 'MASCULINO', idade: 34 },
  { nome: 'Rodrigo Souza', sexo: 'MASCULINO', idade: 31 }
];

@Injectable()
export class PessoaService {

  private pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) {
  }

  getPessoas() {
    return this.http.get<Pessoa[]>(this.pessoasUrl);
  }

}
