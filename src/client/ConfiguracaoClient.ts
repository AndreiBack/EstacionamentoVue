import { ConfiguracaoModel } from "@/model/ConfiguracaoModel";
import axios, { AxiosInstance } from "axios";

export class ConfiguracaoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:9000/api/configuracao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<ConfiguracaoModel> {
        try {
            return (await this.axiosClient.get<ConfiguracaoModel>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response);
        }
    }

    public async findAll(): Promise<ConfiguracaoModel[]> {
        try {
            return (await this.axiosClient.get<ConfiguracaoModel[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async ativos(): Promise<ConfiguracaoModel[]>{
        try {
            return( await this.axiosClient.get<ConfiguracaoModel[]>('/ativos')).data
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

 

    public async newConfiguracao(ConfiguracaoModel: ConfiguracaoModel): Promise<void> {
        try {
            return (await this.axiosClient.post('', ConfiguracaoModel));
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async upDate(id: number, configuracaoModel: ConfiguracaoModel): Promise<void> {
        try {
          return (await this.axiosClient.put(`/${id}`, configuracaoModel)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}