// action을 받아서 store에 업데이트 해주는 문서

import { REGISTER_USER } from './types';

const registerInit = { register: false, user: {} };

// export const user = (state = { registerInit }, action) => {
// 	switch (action.type) {
// 		case REGISTER_USER:
// 			return { ...state, register: action.payload };
// 	}
// };
