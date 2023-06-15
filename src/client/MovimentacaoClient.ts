import axios, { AxiosInstance } from "axios";
import { MovimentacaoModel } from "../model/MovimentacaoModel";
export class MovimentacaoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacoes',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<MovimentacaoModel> {
        try {
            return (await this.axiosClient.get<MovimentacaoModel>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async listar(): Promise<MovimentacaoModel[]> {
        try {
            return (await this.axiosClient.get<MovimentacaoModel[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(movimentacao: MovimentacaoModel): Promise<void> {
        try {
            return (await this.axiosClient.post('/', movimentacao));
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async editar(movimentacao: MovimentacaoModel): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao)).data;
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
