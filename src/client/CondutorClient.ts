import axios, { AxiosInstance } from 'axios';
import { CondutorModel } from '../model/CondutorModel';

export class CondutorClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:9000/api/condutor',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public async findById(id: number): Promise<CondutorModel> {
    try {
      const response = await this.axiosClient.get<CondutorModel>(`/${id}`);
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async listar(): Promise<CondutorModel[]> {
    try {
      const response = await this.axiosClient.get<CondutorModel[]>('/lista');
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(condutor: CondutorModel): Promise<void> {
    try {
      await this.axiosClient.post('/', condutor);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(condutor: CondutorModel): Promise<void> {
    try {
      await this.axiosClient.put(`/${condutor.id}`, condutor);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async deletar(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/${id}`);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
