import axios, { AxiosInstance } from "axios";
import { ConfiguracaoModel } from "../model/ConfiguracaoModel";

export class ConfiguracaoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<ConfiguracaoModel> {
        try {
            return (await this.axiosClient.get<ConfiguracaoModel>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async listar(): Promise<ConfiguracaoModel[]> {
        try {
            return (await this.axiosClient.get<ConfiguracaoModel[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(configuracao: ConfiguracaoModel): Promise<void> {
        try {
            return (await this.axiosClient.post('/', configuracao));
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async editar(configuracao: ConfiguracaoModel): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${configuracao.id}`, configuracao)).data;
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
