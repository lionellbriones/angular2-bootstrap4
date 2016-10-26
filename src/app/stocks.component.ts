import { Component } from "@angular/core";
import { StockService } from './stock.service';

@Component({
    selector: 'stocks',
    templateUrl: './stocks.component.html'
})
export class StocksComponent{
    market = 'NYSE';
    title = 'List of stocks: ';
    stocks;

    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE']

    constructor(stockService: StockService){
        this.stocks = stockService.getStocks();
    }
}