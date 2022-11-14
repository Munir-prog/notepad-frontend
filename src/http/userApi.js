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