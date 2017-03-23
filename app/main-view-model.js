"use strict";
var observable_1 = require("tns-core-modules/data/observable");
var http = require("tns-core-modules/http");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.getThem = function () {
        console.log("111 get() called");
        http.request({
            url: "http://httpbin.org",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.prototype.getDelayed = function () {
        http.request({
            url: "http://httpbin.org/delay/4",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.prototype.getWithArgs = function () {
        http.request({
            url: "http://httpbin.org/get?mySecret=true&duration=12432",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.prototype.getJpg = function () {
        http.getImage("http://httpbin.org/image/jpeg").then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.prototype.postJson = function () {
        http.request({
            url: "http://httpbin.org/post",
            method: "POST",
            content: JSON.stringify({ custname: "My Name", custtel: 0890899213, custemail: "emasd@gmail.com", size: "medium"})
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.prototype.postUrlEncoded = function () {
        http.request({
            url: "http://httpbin.org/post?custname=My+Name&custtel=089823423423422&custemail=emasdgmail.com&size=medium",
            method: "POST"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.prototype.get404 = function () {
        http.request({
            url: "http://httpbin.org/mynotfound",
            method: "GET"
        }).then(HelloWorldModel.handleResponse, HelloWorldModel.handleError);
    };
    HelloWorldModel.handleResponse = function (res) {
        console.log(JSON.stringify(res));
    };
    HelloWorldModel.handleError = function (err) {
        console.log(err);
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrREFBOEQ7QUFDOUQsNENBQThDO0FBQzlDO0lBQXFDLG1DQUFVO0lBRTNDO2VBQ0ksaUJBQU87SUFFWCxDQUFDO0lBRU0saUNBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSxvQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLHFDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxxREFBcUQ7WUFDMUQsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVNLGtDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLHlCQUF5QjtZQUM5QixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSx3Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUscUJBQXFCO1lBQzFCLE1BQU0sRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUFzQixHQUFHO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSwyQkFBVyxHQUFsQixVQUFtQixHQUFHO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUFxQyx1QkFBVSxHQThEOUM7QUE5RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2h0dHAnO1xuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGhlbSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIxMTEgZ2V0KCkgY2FsbGVkXCIpO1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9odHRwYmluLm9yZ1wiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICAgIH0pLnRoZW4oSGVsbG9Xb3JsZE1vZGVsLmhhbmRsZVJlc3BvbnNlLCBIZWxsb1dvcmxkTW9kZWwuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWxheWVkKCk6IHZvaWQge1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9odHRwYmluLm9yZy9kZWxheS80XCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgICAgfSkudGhlbihIZWxsb1dvcmxkTW9kZWwuaGFuZGxlUmVzcG9uc2UsIEhlbGxvV29ybGRNb2RlbC5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFdpdGhBcmdzKCk6IHZvaWQge1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9odHRwYmluLm9yZy9nZXQ/bXlTZWNyZXQ9dHJ1ZSZkdXJhdGlvbj0xMjQzMlwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICAgIH0pLnRoZW4oSGVsbG9Xb3JsZE1vZGVsLmhhbmRsZVJlc3BvbnNlLCBIZWxsb1dvcmxkTW9kZWwuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRKcGcoKTogdm9pZCB7XG4gICAgICAgIGh0dHAuZ2V0SW1hZ2UoXCJodHRwOi8vaHR0cGJpbi5vcmcvaW1hZ2UvanBlZ1wiKS50aGVuKEhlbGxvV29ybGRNb2RlbC5oYW5kbGVSZXNwb25zZSwgSGVsbG9Xb3JsZE1vZGVsLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdEpzb24oKTogdm9pZCB7XG4gICAgICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2h0dHBiaW4ub3JnL3Bvc3RcIixcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7fSlcbiAgICAgICAgfSkudGhlbihIZWxsb1dvcmxkTW9kZWwuaGFuZGxlUmVzcG9uc2UsIEhlbGxvV29ybGRNb2RlbC5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3RVcmxFbmNvZGVkKCk6IHZvaWQge1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9odHRwYmluLm9yZy9cIixcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICAgICAgfSkudGhlbihIZWxsb1dvcmxkTW9kZWwuaGFuZGxlUmVzcG9uc2UsIEhlbGxvV29ybGRNb2RlbC5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldDQwNCgpOiB2b2lkIHtcbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vaHQyMzR0cGIxMjMyNWluLm9yZ1wiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgICAgIH0pLnRoZW4oSGVsbG9Xb3JsZE1vZGVsLmhhbmRsZVJlc3BvbnNlLCBIZWxsb1dvcmxkTW9kZWwuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZUVycm9yKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn0iXX0=