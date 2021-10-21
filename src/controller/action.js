import axios from 'axios';

// 서버에 요청하고 응답 받음

const instance = axios.create({
	baseURL: 'http://59.14.139.36:8088',
	withCredentials: true,
	Authorization: 'cos',
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

export const register = async (userData) => {
	return await instance.post('/user/join', userData).catch(errorMessage);
};
