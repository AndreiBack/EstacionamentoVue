import axios, { AxiosInstance } from "axios";
import { VeiculoModel } from "../model/VeiculoModel";


export class VeiculoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<VeiculoModel> {
        try {
            return (await this.axiosClient.get<VeiculoModel>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async listar(): Promise<VeiculoModel[]> {
        try {
            return (await this.axiosClient.get<VeiculoModel[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(veiculo: VeiculoModel): Promise<void> {
        try {
            return (await this.axiosClient.post('/', veiculo));
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async editar(veiculo: VeiculoModel): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data;
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
