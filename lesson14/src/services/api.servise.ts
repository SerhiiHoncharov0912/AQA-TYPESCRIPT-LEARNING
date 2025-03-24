import { Variables } from '../utils/variables';

export class ApiService {
    private baseUrl: string;
    private apiKey: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.apiKey = Variables.apiKey;
    }

    public get(url: string): Promise<Response> {
        const headers = {
            'x-api-key': this.apiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };

        return fetch(`${this.baseUrl}${url}`, {
            method: 'GET',
            headers: headers
        });
    }

    public postForm(url: string, body: unknown): Promise<Response> {
        const headers = {
            'x-api-key': this.apiKey
        };

        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            body: body as BodyInit,
            headers: headers
        });
    }

    public async post(url: string, body: unknown): Promise<Response> {
        const headers = {
            'x-api-key': this.apiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };

        const response = await fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers
        });
        return response;
    }
}
