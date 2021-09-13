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
			{/* main navbar */}
			<div className='main_navbar'>
				<div className='navbar'>
					<div className='navbar_menu'>
						<div className='navbar_menu_delivery'>
							서울,경기,인천 지역&nbsp;<div className='point'>새벽배송☞</div>
						</div>
						<div className='menu'>
							<li>
								<a>로그인</a>
							</li>
							<li>
								<a>회원가입</a>
							</li>
							<li className='service'>
								<a>고객센터</a>
								<img src='https://okkot.com/images/common/top_arrow.png'></img>
								<div className='service_drop'>
									<ul>
										<li>
											<a>공지사항</a>
										</li>
										<li>
											<a>이벤트</a>
										</li>
										<li>
											<a>FAQ</a>
										</li>
									</ul>
								</div>
							</li>
						</div>
					</div>
				</div>
				<div className='main_logo'>
					<img src='https://okkot.com/images/common/logo.v3.svg' alt='logo' />
				</div>
				<div className='category'>
					<div className='categoryBar'>
						<div className='hamburger'>
							<span></span>
							<span></span>
							<span></span>
						</div>

						<div className='categories'>
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
			</div>

			{/* mobile navbar */}
			<div className='mobile_navbar'>
				<div className='mobile_logo'>
					<div className='mobile_logo_img'>
						<img src='https://okkot.com/images/common/logo.v3.svg' />
					</div>
					<div className='mobile_logo_hamburger'>
						<div className='hamburger_icon'></div>
					</div>
				</div>
			</div>

			{/* mobile navbar menu */}
			<div className='mobile_navbar_menu'>
				<div className='mobile_user_login'>
					로그인 해주세요
					<div className='mobile_navbar_close'></div>
				</div>
				<div className='mobile_user_menu'>
					<div className='mobile_my_page'>마이페이지</div>
					<div className='mobile_cart'>장바구니</div>
				</div>
				<div className='mobile_categories'>
					<div className='mobile_search_bar'>
						<div className='search_bar'>
							<input className='searchBar' type='text' placeholder='상품과 브랜드를 검색해 주세요!'></input>
							<div className='searchBtn'>
								<img src={SearchImg} />
							</div>
						</div>
					</div>
					<div className='mobile_store_bnt'></div>
					<div className='mobile_category'>
						{categories.map(function (category, i) {
							return (
								<ul>
									<li key={i}>{category}</li>
								</ul>
							);
						})}
					</div>
				</div>
				<div className='mobile_user_menu'>
					<div className='mobile_notice'>공지사항</div>
					<div className='mobile_faq'>FAQ</div>
					<div className='mobile_service'>고객센터</div>
				</div>
				<div className='mobile_login_bnt'>로그인</div>
			</div>
		</div>
	);
}

export default Navbar;
