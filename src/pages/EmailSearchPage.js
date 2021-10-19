import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';

function EmailSearchPage() {
	let [phoneNumber, setPhoneNumber] = useState('');
	let [phSend, setPhSend] = useState(false);
	let [confirmPh, setConfirmPh] = useState(false);
	let [readOnlySwitch, setReadOnlySwitch] = useState(false);

	let phTest = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

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

	let emailRetrievalSuccess = (
		<div className='notify_container email'>
			<div className='notify_header email'>회원님의 이메일은</div>
			{/* 서버에서 핸드폰번호로 찾은 이메일 띄워주기 */}
			<div className='float email'>
				joseoyoon12@gmail.com<span>입니다.</span>
			</div>
		</div>
	);

	function sendPhoneNumber() {
		if (phTest.exec(phoneNumber) === null) {
			alert('올바른 전화번호인지 확인해주세요. ');
		} else {
			// 휴대폰 인증번호 코드 들어가는곳
			setPhSend(true);
			setReadOnlySwitch(true);
		}
	}

	const onchangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'phoneNumber':
				setPhoneNumber(value);
		}
	};

	function confirmPhoneNumber() {
		// 인증 보낸 숫자와 일치하는지 확인후
		// 서버에 휴대폰번호 넣어서 email 찾는 요청보내기
		// 인증번호 일치하지 않으면 setReadOnlySwitch(false); 해주기(재입력때문)

		setConfirmPh(true);
	}

	console.log(phoneNumber);

	return (
		<div>
			<div className='navbar_box'>
				<Navbar />
			</div>

			<div className='search_container email'>
				<div className='search_header email'>이메일 찾기</div>

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
				{confirmPh ? emailRetrievalSuccess : null}
			</div>

			<Footer />
		</div>
	);
}

export default EmailSearchPage;
