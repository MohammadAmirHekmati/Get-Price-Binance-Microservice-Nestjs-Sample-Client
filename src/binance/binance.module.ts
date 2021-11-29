import { Module } from '@nestjs/common';
import { BinanceController } from './controllers/binance.controller';
import { BinanceService } from './services/binance.service';

@Module({
    providers:[BinanceService],
    controllers:[BinanceController]
})
export class BinanceModule {}
