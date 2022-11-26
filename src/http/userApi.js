import {$authHost, $host} from "./index";

export const registration = async (email, password) => {
    try {
        let response = await $host.post('api/auth/signup', {email, password, roles: ['ADMIN']});
        console.log(response)
        return response.data;
    } catch (error) {
        return {success: false, message: '"Oops something went wrong!"'}
    }
}

export const login = async (email, password) => {
    try {
        let response = await $host.post('api/auth/signin', {email, password});
        console.log(response)
        return response.data;
    }catch (error) {
        return {success: false, message: '"Oops something went wrong!"'}
    }
}

export const check = async () => {
    try {
        let response = await $authHost.post('api/token/check');
        return response.data;
    }catch (error) {
        return false
    }

}

export const getNotes = async () => {
    try {
        let response = await $authHost.get('api/v1/note');
        console.log(response)
        return response.data;
    }catch (error) {
        return {success: false, message: '"Oops something went wrong!"'}
    }
}
export const saveNote = async (data) => {
    try {
        let response = await $authHost.post('api/v1/note/save', data);
        console.log(response)
        return response.data;
    }catch (error) {
        return {success: false, message: '"Oops something went wrong!"'}
    }
}


