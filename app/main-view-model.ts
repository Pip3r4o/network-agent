import { Observable } from 'tns-core-modules/data/observable';
import * as http from 'tns-core-modules/http';
export class HelloWorldModel extends Observable {

    constructor() {
        super();

    }

    public getThem(): void {
        http.request({
            url: "http://httpbin.org",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    public getDelayed(): void {
        http.request({
            url: "http://httpbin.org/delay/4",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    public getWithArgs(): void {
        http.request({
            url: "http://httpbin.org/get?mySecret=true&duration=12432",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    public getJpg(): void {
        http.getImage("http://httpbin.org/image/jpeg").then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    public postJson(): void {
        http.request({
            url: "http://httpbin.org/post",
            method: "POST",
            content: JSON.stringify({ custname: "My Name", custtel: 0890899213, custemail: "emasd@gmail.com", size: "medium"})
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    public postUrlEncoded(): void {
        http.request({
            url: "http://httpbin.org/post?custname=My+Name&custtel=089823423423422&custemail=emasdgmail.com&size=medium"
            method: "POST"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    public get404(): void {
        http.request({
            url: "http://ht234tpb12325in.org",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    }

    static handleResponse(res) {
        console.log(JSON.stringify(res));
    }

    static handleError(err) {
        console.log(err);
    }
}