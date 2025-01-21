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
export const fetchDiscipline = (countryName, disciplineName) => {
    return axios.get('http://localhost:3000/countries')
        .then(response => {
            // Находим страну по имени
            const country = response.data.find(c => c.name === countryName);
            if (!country) {
                throw new Error(`Country with name ${countryName} not found`);
            }

            // Находим дисциплину по имени
            const discipline = country.disciplines.find(d => d.name === disciplineName);
            if (!discipline) {
                throw new Error(`Discipline with name ${disciplineName} not found in country ${countryName}`);
            }

            // Возвращаем дисциплину
            return discipline;
        })
        .catch(error => {
            console.error('Error fetching discipline:', error);
            throw error;
        });
};

export const fetchDisciplines = (disciplineName) => {
    return axios.get('http://localhost:3000/countries')
        .then(response => {
            // Получаем все страны
            const countries = response.data;

            // Фильтруем дисциплины по имени дисциплины
            const disciplines = countries.flatMap(country => 
                country.disciplines
                    .filter(discipline => discipline.name === disciplineName)
                    .map(discipline => ({ country: country.name, discipline })) // Возвращаем страну и дисциплину
            );

            return disciplines;
        })
        .catch(error => {
            console.error('Error fetching disciplines:', error);
            throw error;
        });
};
export const fetchDesciplinesData = (disciplineName, countryName) => {
    return axios.get('http://localhost:3000/countries') // или ваша база данных
        .then(response => {
            // Ищем страну по имени
            const country = response.data.find(c => c.name === countryName);
            if (!country) {
                throw new Error(`Country ${countryName} not found`);
            }

            // Ищем дисциплину внутри выбранной страны
            const discipline = country.disciplines.find(d => d.name === disciplineName);
            if (!discipline) {
                throw new Error(`Discipline ${disciplineName} not found for country ${countryName}`);
            }

            return {
                country: country.name,
                discipline: discipline
            };
        })
        .catch(error => {
            console.error('Error fetching disciplines data:', error);
            throw error;
        });
};
