import axios, { AxiosInstance } from "axios";
import { MarcaModel } from "../model/MarcaModel";

export class MarcaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:9000/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<MarcaModel> {
        try {
            return (await this.axiosClient.get<MarcaModel>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }
    public async listar(): Promise<MarcaModel[]> {
        try {
            return (await this.axiosClient.get<MarcaModel[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(marca: MarcaModel): Promise<void> {
        try {
            return (await this.axiosClient.post('/', marca));
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async editar(marca: MarcaModel): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${marca.id}`, marca)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async deletar(id: number): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }
}
