import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PasswordSearchPage() {
	let [phoneNumber, setPhoneNumber] = useState('');
	let [email, setEmail] = useState('');
	let [newPW, setNewPW] = useState('');
	let [confirmNewPW, setConfirmNewPW] = useState('');

	let [readOnlySwitch, setReadOnlySwitch] = useState(false);
	let [phSend, setPhSend] = useState(false);
	let [confirmPh, setConfirmPh] = useState(false);
	let test = {
		emailTest: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
		phTest: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
		passwordTest: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
	};

	const onchangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'phoneNumber':
				setPhoneNumber(value);
				break;
			case 'newPassword':
				setNewPW(value);
				break;
			case 'confirmNewPassword':
				setConfirmNewPW(value);
				break;
		}
	};
	let inputVerification = (
		<div className='input_container'>
			<div className='input_name'>
				<span>*</span>
				<h4></h4>
				<h4>{`${phoneNumber}로 발송된 인증번호를 입력해주세요.`}</h4>
			</div>
			<div className='confirm_box'>
				<input type='text' className='input_box verification' />
				<div
					className='confirmVerification'
					onClick={() => {
						confirmPhoneNumber();
					}}>
					확인
				</div>
			</div>
		</div>
	);

	let passwordRetrievalSuccess = (
		// 서버에 확인 요청 보내서 핸드폰번호와 이메일 둘다 일치할 때만 변경가능

		<div className='notify_container password'>
			<div className='notify_header password'>비밀번호 재설정하기</div>
			<div className='change_password'>
				<div className='input_container PW'>
					<div className='input_name'>
						<span>*</span>
						<h4>새 비밀번호</h4>
					</div>
					<input type='password' className='input_box email' name='newPassword' onChange={onchangeHandler} />

					<div className='input_name'>
						<span>*</span>
						<h4>비밀번호 확인</h4>
					</div>
					<input type='password' className='input_box email' name='confirmNewPassword' onChange={onchangeHandler} />

					<div
						className='button black change'
						onClick={() => {
							passwordChange();
						}}>
						비밀번호 변경
					</div>
				</div>
			</div>
		</div>
	);

	function sendPhoneNumber() {
		if (test.phTest.exec(phoneNumber) === null) {
			alert('올바른 전화번호인지 확인해주세요. ');
		} else if (test.emailTest.exec(email) === null) {
			alert('올바른 이메일인지 확인해주세요.');
		} else {
			// 휴대폰 인증번호 코드 들어가는곳
			setPhSend(true);
			setReadOnlySwitch(true);
		}
	}

	function confirmPhoneNumber() {
		// 인증 보낸 숫자와 일치하는지 확인코드 들어가는곳
		// 서버에 휴대폰번호랑 이메일 넣어서 회원정보 요청보내기
		// 일치하는 회원 있다고 응답 받으면 setConfirmPh true로 변경(재설정div)
		// 인증번호 일치하지 않으면 setReadOnlySwitch(false); 해주기(재입력때문)

		setConfirmPh(true);
	}

	function passwordChange() {
		// 비밀번호 재설정 입력후 정규식 돌린후
		// 데이터 담아서 기존 비밀번호 바꾸는 요청 보내기

		if (newPW !== confirmNewPW) {
			return alert('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
		} else if (test.passwordTest.exec(newPW) === null) {
			return alert('항목을 정확하게 기입해주세요. * 비밀번호는 영문, 숫자, 특수문자(!@#$%^&amp;*+=)를 조합한 8자 이상이어야 합니다.');
		} else {
			let config = {
				password: newPW,
				useremail: email,
				phnumber: newPW,
			};
			submitHandler(config);
		}
	}

	function submitHandler(config) {
		const request = axios
			.post('http://211.252.26.32:8088/user', config)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<div className='navbar_box'>
				<Navbar />
			</div>

			<div className='search_container email'>
				<div className='search_header email'>비밀번호 찾기</div>
				<div className='input_container'>
					<div className='input_name'>
						<span>*</span>
						<h4>이메일</h4>
					</div>
					<input type='text' className='input_box email' name='email' onChange={onchangeHandler} readOnly={readOnlySwitch} />
				</div>
				<div className='input_container'>
					<div className='input_name'>
						<span>*</span>
						<h4>핸드폰번호</h4>
					</div>
					<input
						type='text'
						className='input_box phoneNumber'
						name='phoneNumber'
						onChange={onchangeHandler}
						readOnly={readOnlySwitch}
					/>
					<div
						className='button black confirm'
						onClick={() => {
							sendPhoneNumber();
						}}>
						휴대폰 인증
					</div>
				</div>
				{phSend ? inputVerification : null}
				{confirmPh ? passwordRetrievalSuccess : null}
			</div>

			<Footer />
		</div>
	);
}

export default PasswordSearchPage;
