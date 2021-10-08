import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';
import axios from 'axios';

import kakaoLogo from '../images/kakaoLogo.png';
import naverLogo from '../images/naverLogo.png';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';

function LoginPage() {
	let history = useHistory();
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let [savingId, setSavingId] = useState(false);
	let [getId, setGetId] = useState({ id: '' });

	let test = {
		emailTest: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
	};

	const onchangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);
		}
	};
	console.log(email);

	// 이메일을 입력하거나 이메일 기억하기(state스위치사용)를 체크하면 useEffect 발동
	// 입력받은 이메일과 쿠키에 저장된 이메일을 비교하여 같으면 30일로 연장 ->이미 저장되있는 경우
	// 입력받은 이메일과 저장된 이메일비교 null 일경우 아이디를 객체로 쿠키에 저장 ->30일
	// 이메일 기억하기 체크를 안한경우 쿠키에서 입력받은아이디와 똑같은 정보 삭제
	let saveChecked = 'input[name="emailRemember"]:checked';
	let checkedEl = document.querySelectorAll(saveChecked);

	// useEffect(() => {
	// 	let cookiesGetId = browser.cookies.get('id');
	// 	// 입력한 아이디로 변경
	// 	if (cookiesGetId) {

	// 		setGetId({ ...getId, id: email });
	// 	} else {
	// 	}

	// 	return () => {
	// 		cleanup;
	// 	};
	// }, [email, savingId]);

	const onClickHandler = () => {
		setSavingId(!savingId);
	};

	//
	//
	//

	// function cookieSave() {

	// 	setSavingId({...savingId,useremail:})

	// 	console.log(checkedEl);
	// 	if(checkedEl.checked ===true){
	// 	let cookiesGetID = cookie.get(email)

	// 	if()
	// }
	// }

	const onsubmitHandler = () => {
		if (test.emailTest.exec(email) === null) {
			return alert('이메일 형식으로 기입해주세요.');
		}

		let body = {
			useremail: email,
			password: password,
		};
		console.log(body);

		loginUser(body);
	};

	function loginUser(body) {
		const request = axios
			.post('http://211.252.26.32:8088/user', body)
			.then((res) => console.log('res', res))
			.catch((error) => console.log(error));
	}

	return (
		<div>
			<div className='navbar_box'>
				<Navbar />
			</div>
			<div className='login_container'>
				<div className='login_header'>로그인</div>
				<div className='login_comment'>설레는 오늘, 함께 시작해요!</div>
				<input type='text' className='input_box email' placeholder='이메일' name='email' value={email} onChange={onchangeHandler} />
				<input
					type='password'
					className='input_box password'
					placeholder='비밀번호'
					name='password'
					value={password}
					onChange={onchangeHandler}
				/>
				<div className='button black' type='submit' onClick={onsubmitHandler}>
					로그인
				</div>
				<div className='auto_login_container'>
					<label className='auto_login'>
						<input
							type='checkbox'
							className='remember_email'
							name='emailRemember'
							onClick={() => {
								onClickHandler();
							}}
						/>
						<p>이메일 기억하기</p>
					</label>
				</div>
				<div className='easy_login_container'>
					<div className='easy_login_header'>SNS 계정으로 간편로그인</div>
					<div className='icon_container'>
						<div>
							<img
								src={naverLogo}
								className='naver_logo'
								onClick={() => {
									alert('준비중!');
								}}
							/>
						</div>
						<div>
							<img
								src={kakaoLogo}
								className='kakao_logo'
								onClick={() => {
									alert('준비중!');
								}}
							/>
						</div>
					</div>
				</div>
				<div className='lose_info_container'>
					<div
						className='find_email'
						onClick={() => {
							history.push('/login/email/search');
						}}>
						이메일 찾기
					</div>
					<div
						className='change_password'
						onClick={() => {
							history.push('/login/password/search');
						}}>
						비밀번호 찾기
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default LoginPage;
