import axios, { AxiosInstance } from "axios";
import { ModeloModel } from "../model/ModeloModel";

export class ModeloClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:9000/api/modelo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<ModeloModel> {
        try {
            return (await this.axiosClient.get<ModeloModel>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    
    public async listar(): Promise<ModeloModel[]> {
        try {
            return (await this.axiosClient.get<ModeloModel[]>('/lista')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(modelo: ModeloModel): Promise<void> {
        try {
            return (await this.axiosClient.post('/', modelo));
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async editar(modelo: ModeloModel): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data;
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
