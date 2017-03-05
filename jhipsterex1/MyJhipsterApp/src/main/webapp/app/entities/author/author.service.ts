import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Author } from './author.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class AuthorService {

    private resourceUrl = 'api/authors';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(author: Author): Observable<Author> {
        let copy: Author = Object.assign({}, author);
        copy.birthday = this.dateUtils
            .convertLocalDateToServer(author.birthday);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(author: Author): Observable<Author> {
        let copy: Author = Object.assign({}, author);
        copy.birthday = this.dateUtils
            .convertLocalDateToServer(author.birthday);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Author> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.birthday = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.birthday);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }


    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].birthday = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].birthday);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
