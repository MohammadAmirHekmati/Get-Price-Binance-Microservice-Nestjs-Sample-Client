import { ClientOptions, Transport } from "@nestjs/microservices";

export const proxyOptions:ClientOptions={
    transport:Transport.TCP,
    options:{
        host:'localhost',
        port:1153
    }
}