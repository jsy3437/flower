import React, { useState } from 'react';
import MainLogo from '../../images/mainlogo.png';
import SearchImg from '../../images/ic-search.png';

function Navbar() {
	let [navbarMenus, setNavbarMenus] = useState(['로그인', '회원가입', '고객센터']);

	// li로 변경하기
	let categories = ['스토어', '오늘의꽃 스토리', '브랜드', '이벤트', '매거진', '포토리뷰'];

	// HTML을 먼저 로드한 뒤에 함수 실행
	window.onload = function () {
		let hamburger = document.querySelector('.hamburger');
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
		});
	};

	return (
		<div>
			<div className='navbar_menu'>
				<div className='navbar_menu_delivery'>
					서울,경기,인천 지역&nbsp;<div className='point'>새벽배송☞</div>
				</div>
				<div className='menu'>
					{navbarMenus.map(function (navbarMenu, i) {
						return (
							<div className='login' key={i}>
								{navbarMenu}
							</div>
						);
					})}
				</div>
			</div>
			<div className='main_logo'>
				<img src={MainLogo} alt='logo' />
			</div>
			<div className='navbar_CGSC'>
				<div className='hamburger'>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div className='navbar_categories'>
					{categories.map(function (category, i) {
						return (
							<ul>
								<li key={i}>{category}</li>
							</ul>
						);
					})}
				</div>

				<div className='search_bar'>
					<input className='searchBar' type='text' placeholder='상품과 브랜드를 검색해 주세요!'></input>
					<div className='searchBtn'>
						<img src={SearchImg} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
