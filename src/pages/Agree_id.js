import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';
import agree from '../agreeIdData';

function Agree_id() {
	let { id } = useParams();
	let history = useHistory();

	let list = ['회원선택', '약관동의', '정보입력', '가입완료'];

	let [agreeData, setAgreeData] = useState(agree[0]);
	let [agreeReception, setAgreeReception] = useState({
		sms: false,
		email: false,
	});
	let [allChecked, setAllChecked] = useState(false);
	let [essentialAgree, setEssentialAgree] = useState({
		agreeAll: false,
		register: false,
		service: false,
		privacy: false,
		fee: false,
	});

	let x = [];
	let result = [];
	let agree0 = [];
	let agree1 = '11111111111';
	let agree2 = '2222222222';
	console.log(id);

	switch (id) {
		case '0':
			x.push(agree0);
			break;
		case '1':
			x.push(agree1);
			break;
		case '2':
			x.push(agree2);
			break;
	}

	const activeList = list.map((li, i) => (
		<ul>
			<li key={i}>{li}</li>
		</ul>
	));

	let agreeBox = agreeData.map((terms, i) => {
		let agreeContent = agreeData[i].content.split('<br>').map((line) => (
			<div className='agree_id_text'>
				{line}
				<br />
			</div>
		));
		agree0.push(
			<div className='agree_id_box'>
				<div className='title_container'>
					<div className='agree_id_title'>
						{terms.title}
						<span className='agree_option'>{terms.option}</span>
					</div>
					<p className='error_text'>필수 항목입니다. 동의해주세요</p>
				</div>
				<div className='agree_id_content'>{agreeContent}</div>
				<label className='checkbox agree'>
					<input
						type='checkbox'
						className='agree_check'
						name='essential'
						onClick={() => {
							removeAllClick();
						}}
					/>
					<p>약관에 동의합니다.</p>
				</label>
			</div>
		);
	});

	function checkValue() {
		//
		let check = document.getElementsByClassName('agree_check');
		let query = 'input[name="essential"]:checked';
		let errorEl = document.querySelector('error_text');
		let essentialEl = document.querySelectorAll(query);
		let fd = [];
		essentialEl.forEach((el, i) => {
			fd.push(el);
			// console.log(fd);
			console.log(errorEl[i]);
			errorEl.classList.add('error');
			if (el.checked === false) {
				// console.log(errorEl[i]);
				errorEl[i].classList.remove('error');
			}
		});

		if (fd.length !== 4) {
			alert('x');
		} else {
			// 수신동의 데이터
			result = [];
			result.push({ sms: check.smsAgree.checked });
			result.push({ email: check.emailAgree.checked });
			console.log(result);
			history.push({ pathname: '/agree', state: { result: result } });
		}
	}

	function allCheck() {
		let query = 'input[type="checkbox"]';
		let checkEl = document.querySelectorAll(query);
		checkEl.forEach((el) => {
			if (allChecked === false) {
				el.checked = true;
				setAllChecked(true);
			} else {
				el.checked = false;
				setAllChecked(false);
			}
		});
	}

	function removeAllClick() {
		let check = document.getElementsByClassName('agree_check');
		let query = 'input[type="checkbox"]';
		let checkEl = document.querySelectorAll(query);
		let trueCount = 0;

		for (let i = 1; i < checkEl.length; i++) {
			if (checkEl[i].checked === true) {
				trueCount++;
			}
		}
		if (trueCount < 6) {
			checkEl[0].checked = false;
			setAllChecked(false);
		} else if (trueCount > 5) {
			checkEl[0].checked = true;
			setAllChecked(true);
		}
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

				<div className='agree_id_container'>
					<label className='checkbox agree_all'>
						<input
							type='checkbox'
							className='agree_check all'
							onClick={() => {
								allCheck();
							}}></input>
						<p>모든 약관과 sms/메일 수신에 동의합니다.</p>
					</label>

					{x}

					<div className='agree_box sms'>
						<div className='checkbox agree'>
							<input
								type='checkbox'
								className='agree_check'
								name='smsAgree'
								value=''
								onClick={() => {
									removeAllClick();
								}}
							/>
							<p>SMS 수신에 동의합니다.</p>
							<span className='agree_option'>(선택)</span>
						</div>
						<div className='agree_sms_caption'>
							SMS 수신에 동의하시면 여러가지 할인 혜택과 각종 이벤트 정보를 받아 보실 수 있습니다.
						</div>
					</div>

					<div className='agree_box sms'>
						<div className='checkbox agree'>
							<input
								type='checkbox'
								className='agree_check'
								name='emailAgree'
								value=''
								onClick={() => {
									removeAllClick();
								}}
							/>
							<p>이메일 수신에 동의합니다.</p>
							<span className='agree_option'>(선택)</span>
						</div>
						<div className='agree_sms_caption'>
							회원가입 관련, 주문배송 관련 등의 메일은 수신동의와 상관없이 구매 회원에게 발송됩니다.
						</div>
					</div>

					<div className='agree_id_bnt_container'>
						<div
							className='button white'
							onClick={() => {
								history.push('/register');
							}}>
							이전
						</div>
						<div
							className='button black'
							onClick={() => {
								checkValue();
							}}>
							다음
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Agree_id;
