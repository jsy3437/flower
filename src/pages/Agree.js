import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';

function Agree() {
	let dispatch = useDispatch();
	let location = useLocation();
	let history = useHistory();
	let list = ['회원선택', '약관동의', '정보입력', '가입완료'];
	let [postcode, setPostcode] = useState(false);
	let daum;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	const [detailAddress, setDetailAddress] = useState('');
	const [smsFlag, setSmsFlag] = useState('');
	const [emailFlag, setEmailFlag] = useState('');

	let [aa, setAa] = useState(true);

	const REGISTER_USER = 'login_user';
	const postAgree = location.state.result;

	const activeList = list.map((li, i) => (
		<ul>
			<li key={i}>{li}</li>
		</ul>
	));

	// let expressPost =
	// 	postcode === true ? (
	// 		<div>
	// 			<DaumPostcode />
	// 		</div>
	// 	) : null;

	// console.log(postAgree);
	// console.log(postAgree[0].sms);
	// console.log(postAgree[1].email);

	useEffect(() => {
		if (aa) {
			setSmsFlag(postAgree[0].sms ? 'Y' : 'N');
			setEmailFlag(postAgree[1].email ? 'Y' : 'N');
			setAa(false);
		}
	}, []);

	// {
	// 	console.log('sms', smsFlag);
	// 	console.log('email', emailFlag);
	// }

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				return setEmail(value);
				break;
			case 'password':
				return setPassword(value);
				break;
			case 'confirmPassword':
				return setConfirmPassword(value);
				break;
			case 'phoneNumber':
				return setPhoneNumber(value);
				break;
			case 'address':
				return setAddress(value);
				break;
			case 'detailAddress':
				return setDetailAddress(value);
				break;
		}
	};
	// console.log(email, 'a');

	let test = {
		emailTest: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,

		passwordTest: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
	};

	const onSubmitHandler = () => {
		if (test.passwordTest.exec(password) === null || password !== confirmPassword) {
			return alert('항목을 정확하게 기입해주세요. * 비밀번호는 영문, 숫자, 특수문자(!@#$%^&amp;*+=)를 조합한 8자 이상이어야 합니다.');
		} else if (test.emailTest.exec(email) === null) {
			return alert('항목을 정확하게 기입해주세요. * 이메일은 ex)example@exam.ple 형식이어야 합니다.');
		}

		// else if (phoneNumber == null) {
		// 	return alert('항목을 정확하게 기입해주세요. * 핸드폰 인증은 필수사항입니다.');
		// } else if (address || detailAddress == null) {
		// 	return alert('항목을 정확하게 기입해주세요. * 주소는 필수사항입니다');
		// }

		let id = { useremail: email };

		let body = {
			useremail: email,
			password: password,
			phnumber: phoneNumber,
			address: address + detailAddress,
			smsflag: smsFlag,
			emailflag: emailFlag,
		};

		// let conformId = axios.post()

		// body = JSON.stringify(body);

		// dispatch(registerUser(body)).then((res) => {
		// 	if (res.payload.success) {
		// 		history.push('/register/success');
		// 	} else {
		// 		alert('failed to sign up');
		// 	}
		// });
		// console.log(body);
		registerUser(body);
	};

	function registerUser(body) {
		console.log(body);
		const request = axios
			.post('http://211.252.26.32:8088/user/join', body)
			.then((res) => {
				console.log('res', res.data);
				if (res.data.success === false) {
					alert('이미 존재하는 이메일 입니다.');
				} else {
					history.push('/register/success');
				}
			})
			.catch((error) => {
				console.log(error);
			});

		return {
			type: REGISTER_USER,
			payload: request,
		};
	}

	return (
		<div>
			<div className='navbar_box'>
				<Navbar />
			</div>
			<div className='register agreeId'>
				<div className='register_header'>
					<h2>오늘의꽃 회원가입</h2>
					<div className='active_list'>{activeList}</div>
				</div>

				<div className='join_form'>
					<h3>기본 정보</h3>

					<div className='join_input'>
						<div className='input_name'>
							<span>*</span>
							<h4>이메일</h4>
						</div>
						<input
							type='text'
							name='email'
							value={email}
							className='input_box email'
							placeholder='이메일'
							onChange={onChangeHandler}
						/>
						<div className='join_caption'>해당 이메일로 인증 메일이 발송됩니다.</div>
					</div>

					<div className='join_input'>
						<div className='input_name'>
							<span>*</span>
							<h4>비밀번호</h4>
						</div>
						<input
							type='password'
							name='password'
							className='input_box password'
							placeholder='비밀번호'
							onChange={onChangeHandler}
						/>
						<input
							type='password'
							name='confirmPassword'
							className='input_box password_confirm'
							placeholder='비밀번호 확인'
							onChange={onChangeHandler}
						/>
						<div className='join_caption'>영문, 숫자, 특수문자(!@#$%^&*+=)를 조합한 8자 이상</div>
					</div>

					<div className='join_input'>
						<div className='input_name'>
							<span>*</span>
							<h4>핸드폰번호</h4>
						</div>
						<button className='button black' onClick={() => {}}>
							인증
						</button>
					</div>

					<div className='join_input'>
						<div className='input_name'>
							<span>*</span>
							<h4>주소</h4>
						</div>
						<div className='input_with_btn'>
							<input type='text' name='address' className='input_box address' placeholder='주소' readOnly />
							<button
								className='button black'
								onClick={() => {
									setPostcode(!postcode);
									// daumpost();
								}}>
								검색
							</button>
						</div>
						<div className='daum_post'></div>

						{/* {expressPost} */}
						<input
							type='text'
							name='detailAddress'
							className='input_box detail_address'
							placeholder='상세주소'
							onChange={onChangeHandler}
						/>
					</div>
				</div>

				<div className='agree_id_bnt_container'>
					<div
						className='button white'
						onClick={() => {
							history.goBack();
						}}>
						이전
					</div>
					<div
						className='button black'
						type='submit'
						onClick={() => {
							onSubmitHandler();
						}}>
						가입하기
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Agree;
