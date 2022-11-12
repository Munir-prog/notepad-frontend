import {$host} from "./index";

export const registration = async (email, password) => {
    return await $host.post('api/auth/signup', {email, password, roles: ['ADMIN']});
}

export const login = async (email, password) => {
    return await $host.post('api/auth/signin', {email, password});
}

export const check = async () => {
    return await $host.post('api/auth/check');
}