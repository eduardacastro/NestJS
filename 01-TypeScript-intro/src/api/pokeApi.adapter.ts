import axios from "axios";
export class PokeApiAdapter {

    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const {data} = await axios.get<T>(url);
        return data;
    }

    async post (url: string, data: any){

    }

    async patch (url: string, data: any){

    }

    delete (url: string){

    }

}
