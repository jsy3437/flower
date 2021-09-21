import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import { useHistory } from 'react-router';

function RegisterPage() {
	const list = ['회원선택', '약관동의', '정보입력', '가입완료'];
	const history = useHistory();
	const selectItem = [
		{
			title: '일반회원(구매회원)',
			content: '온라인 도매시장에서 꽃을 구매하실 모든 고객님',
			src: 'https://okkot.com/images/common/img-member-buyer.png',
			apply: '가입신청하기',
		},

		{
			title: '꽃업계종사자(구매회원)',
			content: '꽃집을 운영중이신 사장님 혹은 플로리스트',
			src: 'https://okkot.com/images/common/img-member-retail-buyer.png',
			apply: '가입신청하기',
		},

		{
			title: '도매사장님(판매회원)',
			content: '화훼농장을 운영중이시거나 도매점을 운영중이신 사장님',
			src: 'https://okkot.com/images/common/img-member-seller.png',
			apply: '입점신청하기',
		},
	];

	const activeList = list.map((li, i) => (
		<ul>
			<li key={i}>{li}</li>
		</ul>
	));

	const selectionItem = selectItem.map((item, i) => (
		<div className='selection_card' key={i}>
			<div className='selection_img'>
				<img src={item.src} />
			</div>
			<div className='selection_title'>{item.title}</div>
			<div className='selection_content'>{item.content}</div>
			<div
				className='selection_apply'
				onClick={() => {
					history.push('/agree/' + i);
				}}>
				{item.apply}
			</div>
		</div>
	));

	return (
		<div>
			<Navbar />

			<div className='register'>
				<div className='register_header'>
					<h2>오늘의꽃 회원가입</h2>
					<div className='active_list'>{activeList}</div>
				</div>
				<div className='join_title'>회원유형을 선택해주세요</div>
				<div className='member_selection'>{selectionItem}</div>

				<Footer />
			</div>
		</div>
	);
}

export default RegisterPage;
