export const API_URL = 'http://localhost:3000/api';

export const getData = async (url) => {
    try {
        const response = await fetch(`${API_URL}${url}`);
        if(!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.err('Error while getting data', error);
        throw error;
    }
}

export const postData = async (url, data) => {
    try {
        const response = await fetch(`${API_URL}${url}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });

        if(!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.err('Error while posting data', error);
        throw error;
    }
}

export const delData = async (url) => {
    try {
        const response = await fetch(`${API_URL}${url}`, {
            method: 'DELETE',
        });

        if(!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.err('Error while deleting data', error);
        throw error;
    }
}