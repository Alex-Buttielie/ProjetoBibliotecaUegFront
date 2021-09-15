import { LocationChangeEvent } from "@angular/common";
import { Pessoa } from "../pessoa/pessoa";

export class Emprestimo {
    codEmprestimo!: number;
    observacao!: string;
    dataEmprestimo!: Date;
    isEmprestimoAtivo!: boolean;
    pessoa!: Pessoa;
    
}

