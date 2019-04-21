import { customer } from "./customer";

export class Routes {
    constructor(private app:any){
        this.app = app;
    }

    setRoutes(){
        this.app.use("/v1/hello",customer);
        this.app.use("/v1/graphQL",customer);
    }

}