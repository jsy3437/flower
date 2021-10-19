// 서버에 요청 보내고 응답 받아서 action을 보내기전 데이터 담을 코드 작성하는 문서

import axios from 'axios';
import { REGISTER_USER } from './types';

export function registerUser(dataToSubmit) {
	const request = axios.post('http://211.252.26.32:8088/user/join', dataToSubmit).then((res) => res.data);

	return {
		// type = dispatch 보낼 type
		type: REGISTER_USER,
		// payload = 서버에 요청 후 응답을 담아놓은 변수
		payload: request,
	};
}
