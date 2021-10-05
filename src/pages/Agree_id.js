import React, { useState, useEffect } from 'react';
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
		0: false,
		1: false,
		2: false,
		3: false,
	});

	let [nextBtnSwitch, setNextBtnSwitch] = useState(false);

	let x = [];
	let result = [];
	let agree0 = [];
	let agree1 = '11111111111';
	let agree2 = '2222222222';
	// console.log(id);

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

	// let errorControl = errorSwitch === false ? 'error_text' : 'error_text error';
	let agreeBox = agreeData.map((terms, i) => (
		<div className='agree_id_box'>
			<div className='title_container'>
				<div className='agree_id_title'>
					{terms.title}
					<span className='agree_option'>{terms.option}</span>
				</div>

				{nextBtnSwitch === true ? (
					!essentialAgree[i] ? (
						<p className='error_text error'>필수 항목입니다. 동의해주세요</p>
					) : (
						<p className='error_text'>필수 항목입니다. 동의해주세요</p>
					)
				) : null}

				{/* <p >필수 항목입니다. 동의해주세요</p>
					{다음 버튼을 눌렀느냐 안눌렀느냐
					눌른상태이고,  !essentialAgree[i] ?
				필수입력입니다를 띄워준다 } */}
			</div>
			{/* <div className='agree_id_content'>{agreeContent}</div> */}
			<div className='agree_id_content'>{terms.content}</div>
			<label className='checkbox agree'>
				<input
					type='checkbox'
					className='agree_check'
					name={i}
					onClick={() => {
						console.log(i);
						removeAllClick();
						onClickCheckbox(i);
					}}
				/>
				<p>약관에 동의합니다.</p>
			</label>
		</div>
	));

	// 체크박스 클릭시 스테이트값 먼저 변경하고
	// 다음버튼 클릭시 확인만 하고 바로 넘어가게
	// 체크박스 name은 스테이트 객체 이름과 동일하게'

	function onClickCheckbox(i) {
		let target = 'input';
		let checkBox = document.querySelectorAll('agree_check');
		let clickTarget = document.querySelectorAll(checkBox.target);

		// 간략하게 바꾸기
		switch (i) {
			case 0:
				setEssentialAgree({ ...essentialAgree, 0: !essentialAgree[0] });
				break;
			case 1:
				setEssentialAgree({ ...essentialAgree, 1: !essentialAgree[1] });
				break;
			case 2:
				setEssentialAgree({ ...essentialAgree, 2: !essentialAgree[2] });
				break;
			case 3:
				setEssentialAgree({ ...essentialAgree, 3: !essentialAgree[3] });
				break;
		}
		console.log(essentialAgree);
	}

	function checkValue() {
		//
		setNextBtnSwitch(true);
		let check = document.getElementsByClassName('agree_check');
		let checkedQuery = 'input[name="essential"]:checked';

		let errorEl;

		let essentialCheckedEl = document.querySelectorAll(checkedQuery);

		if (!essentialAgree[0] || !essentialAgree[1] || !essentialAgree[2] || !essentialAgree[3]) {
			console.log();
		} else {
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

					{agreeBox}

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
