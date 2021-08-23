import react from 'react';

function Footer() {
	return (
		<div className='footer_container'>
			<div className='footer'>
				<div className='footer_left'>
					<div className='footer_title'>(주)오늘의꽃</div>
					<div className='footer_info'>
						<li>사업자등록번호 : 380-81-01597 | 대표이사 : 임재범</li>
						<li>본사 : 인천광역시 연수구 컨벤시아대로 204, 인천스타트업파크 인스타 I 5층 527호(송도동)</li>
						<li>　</li>
						<li>통신판매업신고 : 2020-인천연수구-0162</li>
						<li>정보관리책임자 : 김유준 | 이메일 : cs@okkot.com</li>
						<li>대표전화 : 1899-5905 | FAX : 02-540-2203</li>
					</div>
					<div className='footer_guide'>
						<li>이용약관</li>
						<li>개인정보처리방침</li>
						<li>공지사항</li>
						<li>고객센터</li>
					</div>
				</div>
				<div className='footer_right'>
					<div className='right_info'>
						<li>고객센터 : 1899-5905</li>
						<li>평일 09:00 ~ 18:00 | 토, 일요일 휴일</li>
					</div>
					<div className='footer_sns'>
						<img src='https://okkot.com/images/common/ic-insta-logo.svg' />
						<img src='https://okkot.com/images/common/ic-kakao-logo.svg' />
						<img src='https://okkot.com/images/common/ic-naver-logo.svg' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
