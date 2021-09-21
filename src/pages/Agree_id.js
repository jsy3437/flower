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

	let x = [];

	let agree0 = <div>00000000000</div>;
	let agree1 = '11111111111';
	let agree2 = '2222222222';
	console.log(id);

	switch (id) {
		case '0':
			x.push(agree0);
			console.log(x);
			break;
		case '1':
			x.push(agree1);
			console.log(x);
			break;
		case '2':
			x.push(agree2);
			console.log(x);
			break;
	}

	const activeList = list.map((li, i) => (
		<ul>
			<li key={i}>{li}</li>
		</ul>
	));

	let agreeContent = agreeData.content.split('<br>').map((line) => (
		<div className='agree_id_text'>
			{line}
			<br />
		</div>
	));

	return (
		<div>
			{x}
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
						<input type='checkbox' className='agree_check_all'></input>
						<p>모든 약관과 sms/메일 수신에 동의합니다.</p>
					</label>

					<div className='agree_id_box'>
						<div className='agree_id_title'>
							{agreeData.title}
							<span className='agree_option'>{agreeData.option}</span>
						</div>
						<div className='agree_id_content'>{agreeContent}</div>
						<label className='checkbox agree'>
							<input type='checkbox' className='agree_check' />
							<p>약관에 동의합니다.</p>
						</label>
					</div>

					<div className='agree_box sms'>
						<div className='checkbox agree'>
							<input type='checkbox' className='agree_check' />
							<p>SMS 수신에 동의합니다.</p>
							<span className='agree_option'>(선택)</span>
						</div>
						<div className='agree_sms_caption'>
							SMS 수신에 동의하시면 여러가지 할인 혜택과 각종 이벤트 정보를 받아 보실 수 있습니다.
						</div>
					</div>

					<div className='agree_box sms'>
						<div className='checkbox agree'>
							<input type='checkbox' className='agree_check' />
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
								history.push('/agree');
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
