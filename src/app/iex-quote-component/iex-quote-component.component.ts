import { Component, OnInit } from '@angular/core';
import { IexQuoteService } from '../iex-quote.service'

@Component({
  selector: 'iex-quote-component',
  templateUrl: './iex-quote-component.component.html',
  styleUrls: ['./iex-quote-component.component.css']
})
export class IexQuoteComponentComponent implements OnInit {
  public iexData: any;

  constructor(private service: IexQuoteService) { }

  ngOnInit(): void {
    this.iexData = this.service.getStockQuote();
  }

}
