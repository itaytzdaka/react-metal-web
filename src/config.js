export class Config{

    static serverUrl;

    static _initialize(){
        if(process.env.NODE_ENV === "production"){
            Config.serverUrl="https://www.metal-web.org.il/api";
        }

        else{
            Config.serverUrl="http://localhost:8000/api";
        }
    }
}

Config._initialize();