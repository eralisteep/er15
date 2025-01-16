import axios from 'axios';

export const fetchCountryMedals = (countryName) => {
    return axios.get('http://localhost:3000/countries')
        .then(response => {
            const country = response.data.find(c => c.name === countryName);
            if (!country) {
                throw new Error(`Country with name ${countryName} not found`);
            }
            return country;
        })
        .catch(error => {
            console.error('Error fetching country medals:', error);
            throw error;
        });
};