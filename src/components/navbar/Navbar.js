import React, { useState, useEffect } from 'react';
import MainLogo from '../../images/mainlogo.png';
import SearchImg from '../../images/ic-search.png';
import { useHistory } from 'react-router';
function Navbar() {
	let history = useHistory();
	let hamburger;
	let categoryWrap;
	let mobileMenu;

	// li로 변경하기
	let categories = ['스토어', '오늘의꽃 스토리', '브랜드', '이벤트', '매거진', '포토리뷰'];
	let [openSwitch, setOpenSwitch] = useState(false);

	function mainMenuActive() {
		hamburger = document.querySelector('.hamburger');
		categoryWrap = document.querySelector('.all_category_wrap');
		categoryWrap.classList.toggle('active');
		hamburger.classList.toggle('active');
	}

	function mobileMenuOpen() {
		setOpenSwitch(!openSwitch);
	}

	useEffect(() => {
		mobileMenu = document.querySelector('.mobile_navbar_menu');
		if (openSwitch === true) {
			mobileMenu.classList.toggle('open');
		} else {
			mobileMenu.classList.remove('open');
		}
	}, [openSwitch]);

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
								<a href='/login'>로그인</a>
							</li>
							<li>
								<a href='/register'>회원가입</a>
							</li>
							<li className='service'>
								<a href='/service'>고객센터</a>
								<img src='https://okkot.com/images/common/top_arrow.png' alt='service'></img>
								<div className='service_drop'>
									<ul>
										<li>
											<a href='/notice'>공지사항</a>
										</li>
										<li>
											<a href=''>이벤트</a>
										</li>
										<li>
											<a href='/faq'>FAQ</a>
										</li>
									</ul>
								</div>
							</li>
						</div>
					</div>
				</div>
				<div className='main_logo'>
					<img
						onClick={() => {
							history.push('/');
						}}
						src='https://okkot.com/images/common/logo.v3.svg'
						alt='logo'
					/>
				</div>
				<div className='category'>
					<div className='categoryBar'>
						<div className='categories'>
							<div className='category_btn'>
								<div
									className='all_category'
									onClick={() => {
										mainMenuActive();
									}}>
									<div className='hamburger'>
										<span></span>
										<span></span>
										<span></span>
									</div>
									스토어
									<div className='all_category_wrap'>
										<div className='wrap_area'>
											<ul>
												<li>
													<a href=''>전체보기</a>
												</li>
												<li>
													<a href=''>베스트 리뷰 꽃</a>
												</li>
												<li>
													<a href=''>[24시간 주문가능] 플로리스트 추천</a>
												</li>
												<li>
													<a href=''>오늘의 FARM</a>
												</li>
												<li>
													<a href=''>생화</a>
												</li>
												<li>
													<a href=''>장미</a>
												</li>
												<li>
													<a href=''>카네이션</a>
												</li>
												<li>
													<a href=''>소재</a>
												</li>
												<li>
													<a href=''>프리저브드/조화</a>
												</li>
												<li>
													<a href=''>[24시간 주문가능] 소품</a>
												</li>
												<li>
													<a href=''>기타</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='category_btn'>
							<a href=''>오늘의꽃 스토리</a>
						</div>

						<div className='category_btn'>
							<a href=''>브랜드</a>
						</div>

						<div className='category_btn'>
							<a href=''>이벤트</a>
						</div>

						<div className='category_btn'>
							<a href=''>매거진</a>
						</div>

						<div className='category_btn'>
							<a href=''>포토리뷰</a>
						</div>
					</div>

					<div className='search_bar'>
						<input className='searchBar' type='text' placeholder='상품과 브랜드를 검색해 주세요!'></input>
						<div className='searchBtn'>
							<img src={SearchImg} />
						</div>
					</div>
				</div>
			</div>

			{/* mobile navbar */}
			<div className='mobile_navbar'>
				<div className='mobile_logo'>
					<div className='mobile_logo_img'>
						<img
							onClick={() => {
								history.push('/');
							}}
							src='https://okkot.com/images/common/logo.v3.svg'
						/>
					</div>
					<div
						className='mobile_logo_hamburger'
						onClick={() => {
							mobileMenuOpen();
						}}>
						<div className='hamburger_icon'></div>
					</div>
				</div>
			</div>

			{/* mobile navbar menu */}
			<div className='mobile_navbar_menu'>
				<div className='mobile_user_login'>
					로그인 해주세요
					<div
						className='mobile_navbar_close'
						onClick={() => {
							mobileMenuOpen();
						}}></div>
				</div>
				<div className='mobile_user_menu'>
					<div className='mobile_my_page' onClick={() => {}}>
						마이페이지
					</div>
					<div
						className='mobile_cart'
						onClick={() => {
							history.push('/cart');
						}}>
						장바구니
					</div>
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
					<div
						className='mobile_notice'
						onClick={() => {
							history.push('/notice');
						}}>
						공지사항
					</div>
					<div
						className='mobile_faq'
						onClick={() => {
							history.push('/faq');
						}}>
						FAQ
					</div>
					<div
						className='mobile_service'
						onClick={() => {
							history.push('/service');
						}}>
						고객센터
					</div>
				</div>
				<div
					className='mobile_login_bnt'
					onClick={() => {
						history.push('/login');
					}}>
					로그인
				</div>
			</div>
		</div>
	);
}

export default Navbar;
