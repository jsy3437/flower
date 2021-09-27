import React, { useState } from 'react';
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

	const REGISTER_USER = 'login_user';
	const postAgree = location.state.result;

	const activeList = list.map((li, i) => (
		<ul>
			<li key={i}>{li}</li>
		</ul>
	));

	let expressPost =
		postcode === true ? (
			<div>
				<DaumPostcode />
			</div>
		) : null;

	// // 우편번호 찾기 찾기 화면을 넣을 element
	// var element_wrap = document.getElementById('daum_post');

	// function foldDaumPostcode() {
	// 	// iframe을 넣은 element를 안보이게 한다.
	// 	element_wrap.style.display = 'none';
	// }

	// function daumpost() {
	// 	// 현재 scroll 위치를 저장해놓는다.
	// 	var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	// 	new daum.Postcode({
	// 		oncomplete: function (data) {
	// 			// 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

	// 			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
	// 			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
	// 			var addr = ''; // 주소 변수
	// 			var extraAddr = ''; // 참고항목 변수

	// 			//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
	// 			if (data.userSelectedType === 'R') {
	// 				// 사용자가 도로명 주소를 선택했을 경우
	// 				addr = data.roadAddress;
	// 			} else {
	// 				// 사용자가 지번 주소를 선택했을 경우(J)
	// 				addr = data.jibunAddress;
	// 			}

	// 			// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
	// 			if (data.userSelectedType === 'R') {
	// 				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
	// 				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
	// 				if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
	// 					extraAddr += data.bname;
	// 				}
	// 				// 건물명이 있고, 공동주택일 경우 추가한다.
	// 				if (data.buildingName !== '' && data.apartment === 'Y') {
	// 					extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
	// 				}
	// 				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
	// 				if (extraAddr !== '') {
	// 					extraAddr = ' (' + extraAddr + ')';
	// 				}
	// 				// 조합된 참고항목을 해당 필드에 넣는다.
	// 				document.getElementById('input_box address').value = extraAddr;
	// 			} else {
	// 				document.getElementById('input_box address').value = '';
	// 			}

	// 			// 우편번호와 주소 정보를 해당 필드에 넣는다.
	// 			console.log(data.zonecode);
	// 			document.getElementById('input_box address').value = addr;
	// 			// 커서를 상세주소 필드로 이동한다.
	// 			document.getElementById('input_box detail_address').focus();

	// 			// iframe을 넣은 element를 안보이게 한다.
	// 			// (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
	// 			element_wrap.style.display = 'none';

	// 			// 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
	// 			document.body.scrollTop = currentScroll;
	// 		},
	// 		// 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
	// 		onresize: function (size) {
	// 			element_wrap.style.height = size.height + 'px';
	// 		},
	// 		width: '100%',
	// 		height: '100%',
	// 	}).embed(element_wrap);

	// 	// iframe을 넣은 element를 보이게 한다.
	// 	element_wrap.style.display = 'block';
	// }

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);
			case 'confirmPassword':
				return setConfirmPassword(value);
			case 'phoneNumber':
				return setPhoneNumber(value);
			case 'address':
				return setAddress(value);
			case 'detailAddress':
				return setDetailAddress(value);
		}
	};
	console.log(email, 'a');

	let test = {
		emailTest: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,

		passwordTest: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
	};

	const onSubmitHandler = () => {
		if (test.passwordTest.exec(password) === null || password !== confirmPassword) {
			return alert('항목을 정확하게 기입해주세요. * 비밀번호는 영문, 숫자, 특수문자(!@#$%^&amp;*+=)를 조합한 8자 이상이어야 합니다.');
		} else if (test.emailTest.exec(email) === null) {
			return alert('항목을 정확하게 기입해주세요. * 이메일은 필수사항입니다.');
		}
		// else if (phoneNumber == null) {
		// 	return alert('항목을 정확하게 기입해주세요. * 핸드폰 인증은 필수사항입니다.');
		// } else if (address || detailAddress == null) {
		// 	return alert('항목을 정확하게 기입해주세요. * 주소는 필수사항입니다');
		// }

		let body = {
			email: email,
			password: password,
			phoneNumber: phoneNumber,
			address: address,
			detailAddress: detailAddress,
			postAgree: postAgree,
		};
		console.log(body);

		// dispatch(registerUser(body)).then((res) => {
		// 	if (res.payload.success) {
		// 		history.push('/register/success');
		// 	} else {
		// 		alert('failed to sign up');
		// 	}
		// });
	};
	// // get test
	// function d() {
	// 	axios.get('http://182.228.205.27:8088/test/path-variable/{dsgdf}').then((res) => console.log(res));
	// }

	function registerUser(dataToSubmit) {
		const request = axios.post('/api/users/register', dataToSubmit).then((res) => res.data);

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
							// history.push('/register/success');
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
