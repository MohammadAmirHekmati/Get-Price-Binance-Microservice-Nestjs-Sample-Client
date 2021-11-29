import { Injectable, Logger } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices";
import { proxyOptions } from "src/proxy.configuration";

@Injectable()
export class BinanceService
{
    private logger=new Logger()
    private client:ClientProxy
constructor()
{
    this.client=ClientProxyFactory.create(proxyOptions)
}

async getPriceBySymbol(symbol:string):Promise<any>
    {
        return await this.client.send<any,string>('getPriceBySymbol',symbol)
    }
}