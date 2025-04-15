import axios, { AxiosInstance } from 'axios';

export class ApiClient {
    private instance: AxiosInstance;

    public constructor() {
        this.instance = axios.create({
            baseURL: 'https://automationexercise.com/api/',
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    public async get<T>(url: string): Promise<T> {
        const response = await this.instance.get<T>(url);
        return response.data;
    }

    public async post<T>(url: string, data: unknown): Promise<T> {
        const response = await this.instance.post<T>(url, data);
        return response.data;
    }
}
