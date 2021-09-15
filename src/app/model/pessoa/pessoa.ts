import { LocationChangeEvent } from "@angular/common";
import { Emprestimo } from "../emprestimo/emprestimo";

export class Pessoa {
    codPessoa!: number;
    nomePessoa!: string;
    emprestimo!: Emprestimo;

}
