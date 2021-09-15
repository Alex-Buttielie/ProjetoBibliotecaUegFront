import { LocationChangeEvent } from "@angular/common";
import { Emprestimo } from "../emprestimo/emprestimo";
export class Livro {
     codigoLivro !: number;
     nomeLivro !: string;
     dataPublicacao !: Date;
     emprestimo!: Emprestimo;

}
