import { Controller, Get, Param } from "@nestjs/common";
import { BinanceService } from "../services/binance.service";

@Controller('binance')
export class BinanceController
{
    constructor(private readonly binanceService:BinanceService)
    {}

    @Get('get/price/:symbol')
    async getPriceBySymbol(@Param('symbol') symbol:string):Promise<any>
    {
        return await this.binanceService.getPriceBySymbol(symbol)
    }
}