import React from 'react';
import { useHistory } from 'react-router';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RegisterSuccess() {
	let history = useHistory();
	// let list = ['회원선택', '약관동의', '정보입력', '가입완료'];
	let list = [
		{ id: 0, content: '회원선택' },
		{ id: 1, content: '약관동의' },
		{ id: 2, content: '정보입력' },
		{ id: 3, content: '가입완료' },
	];

	const activeList = list.map((li) => (
		<ul>
			<li key={li.id}>{li.content}</li>
		</ul>
	));

	//  확인 누르면 이메일 다시 발송되고 취소 누르면 alert만 없어짐

	function reEmail() {
		var answer = window.confirm('본인확인 메일을 다시 받으시겠습니까?');
		if (answer) {
			console.log('yes');
		} else {
			console.log('no');
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

				<img src={'https://okkot.com/images/common/img-member-buyer.png'} alt='success' />
				<div className='register_success_text'>
					<p>
						joseoyun12@gmail.com로 인증메일이 발송되었습니다.
						<br />
						이메일에 포함된 [이메일 인증하기] 버튼을 눌러주세요.
						<br />
						<br />
						가입이 완료되면 바로 사용 가능한<span> 3000 포인트</span>를 드립니다.
					</p>
					<button
						className='button black'
						onClick={() => {
							history.push('/');
						}}>
						홈페이지로 이동
					</button>
					<div className='email_re'>
						<p>메일을 받지 못하셨나요?</p>
						<button
							className='button black'
							onClick={() => {
								reEmail();
							}}>
							본인확인 메일 다시 받기
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default RegisterSuccess;
