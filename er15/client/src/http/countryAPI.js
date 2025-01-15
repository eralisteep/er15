import {$authHost, $host} from "./index";

export const createCountry = async (country) => {
    const {data} = await $authHost.post('api/country', country)
    return data
}

export const fetchCountries = async () => {
    const {data} = await $host.get('api/country')
    return data
}

export const fetchOneCountry = async (id) => {
    const {data} = await $host.get('api/country/' + id)
    return data
}
export const fetchCountryDisciplines = async (countryId) => {
    const {data} = await $host.get(`api/country/${countryId}/disciplines`)
    return data
}
export const fetchCountryMedals = async (countryId) => {
    const {data} = await $host.get(`api/country/${countryId}/medals`)
    return data
}
