import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8000',
});


export async function getUserTikToksTop( username ) {
	const {data} = await api.get(`/user/tiktoks-top`, {
		params: {
			username: username
		}
	});
	return data;
}
export async function searchUser( username ) {
	const {data} = await api.get(`/user/search`, {
		params: {
			username: username
		}
	});
	return data;
}

export async function getUserAverageMonthlyViews( username ) {
	const {data} = await api.get(`/user/tiktoks-average-views`, {
		params: {
			username: username
		}
	});
	return data;
}
export async function getUserTotalMonthlyViews( username ) {
	const {data} = await api.get(`/user/tiktoks-total-views`, {
		params: {
			username: username
		}
	});
	return data;
}