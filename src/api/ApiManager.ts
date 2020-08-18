import React from 'react';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from '../redux';

import { Serialize, Deserialize } from 'cerialize';

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

class ApiManager {
    axiosInstance: AxiosInstance;

    static instance: ApiManager = new ApiManager();

    constructor() {
        this.axiosInstance = Axios.create({
            baseURL: process.env.REACT_APP_BASE_API_URL || '',
            timeout: 10000,
            headers: defaultHeaders
        });

        this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            const token = store.getState().AuthReducer.token;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
    }

    static getInstance() {
        if (this.instance === null) {
            this.instance = new ApiManager();
        }

        return this.instance;
    }

    request(method: AxiosRequestConfig['method'], url: string, data?: any, options?: any) {
        const serializedData = !!data ? Serialize(data) : undefined;
        const params = !!options && !!options.params ? options.params : undefined;
        return this.axiosInstance
            .request({
                method,
                url,
                data: serializedData,
                params
            })
            .then((response) => {
                return Deserialize(response.data);
            });
    }
}
