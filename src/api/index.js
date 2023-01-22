import axiosInstance from "./AxiosInstance";

export async function get(data) {
    return await axiosInstance.get('counter', {
        params: data
    })
}

export async function store() {
    return await axiosInstance.post('counter/store');
}