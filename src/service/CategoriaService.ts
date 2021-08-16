import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { ApiConfiguration } from "../configuration/ApiConfiguration";
import { CategoriaProdutoModel } from "../model/CategoriaProdutoModel";

@Injectable()
export class CategoriaService {

    constructor(
        public httpClient: HttpClient
    ) { }

    recuperarCategoriaProdutoList() : Observable<CategoriaProdutoModel[]> {
        return this.httpClient.get<CategoriaProdutoModel[]>(`${ApiConfiguration.BASE_URL}/categoria-produto`);
    }

}