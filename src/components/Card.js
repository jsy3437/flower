import React from 'react';
import { useState } from 'react/cjs/react.development';
import { bestProductData } from '../data/flower/bestProductData';
import { newArrivalData } from '../data/flower/newArrivalData';
import { bestReviewData } from '../data/flower/bestReviewData';
import { floristData } from '../data/flower/floristData';

function Card() {
	// card에 들어갈 꽃 데이터 받은 state
	let [bestFlower, setBestFlower] = useState(bestProductData[0]);
	let [newFlower, setNewFlower] = useState(newArrivalData[0]);
	let [bestReviewFlower, setBestReviewFlower] = useState(bestReviewData[0]);
	let [floristFlower, setFloristFlower] = useState(floristData[0]);

	// next, prev 버튼
	// data를 2차원 배열로 만들어서 스테이트 기본값0주고 next버튼 누르면 스테이트 값이 +1증가
	// 그러면 1번 배열이 나온다

	// Best Product card
	const bestProductItem = bestFlower.map((info) => (
		<div className='info_card' key={info.id}>
			<div className='info_img_box'>
				<img src={info.src} className='info_img' width='100%' alt='infoImg' />
			</div>
			<div className='info_infoText'>
				<p className='info_name'>{info.title}</p>
				<p className='info_price'>
					{info.price}
					<span>원</span>
				</p>
				<p className='info_brand'>{info.brand}</p>
			</div>
		</div>
	));

	// New Arrival card
	const newFlowerItem = newFlower.map((info) => (
		<div className='info_card' key={info.id}>
			<div className='info_img_box'>
				<img src={info.src} className='info_img' width='100%' alt='infoImg' />
			</div>
			<div className='info_infoText'>
				<p className='info_name'>{info.title}</p>
				<p className='info_price'>
					{info.price}
					<span>원</span>
				</p>
				<p className='info_brand'>{info.brand}</p>
			</div>
		</div>
	));

	// Best Review card
	const bestReviewFlowerItem = bestReviewFlower.map((review) => (
		<div className='review_card' key={review.id}>
			<div className='review_img_box'>
				<img src={review.src} className='review_img' width='100%' alt='infoImg' />
				<div className='review_name'>{review.title}</div>
			</div>
			<div className='review_text_box'>
				<p className='review_email'>
					{review.email}
					<span className='rate'>
						<img className='star' src='https://okkot.com/images/common/star_on.png' alt='star' />
						5.0
					</span>
				</p>
				<p className='review_content'>{review.content}</p>
			</div>
		</div>
	));

	// 플로리스트 추천 card
	const floristFlowerItem = floristFlower.map((info) => (
		<div className='info_card' key={info.id}>
			<div className='info_img_box'>
				<img src={info.src} className='info_img' width='100%' alt='infoImg' />
			</div>
			<div className='info_infoText'>
				<p className='info_name'>{info.title}</p>
				<p className='info_price'>
					{info.price}
					<span>원</span>
				</p>
				<p className='info_brand'>{info.brand}</p>
			</div>
		</div>
	));

	//

	return (
		<div className='card-container'>
			{/* Best Product */}
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<span>Best Product</span>
						<div className='bnt'>
							<button
								className='bnt-prev'
								onClick={() => {
									setBestFlower(bestProductData[0]);
								}}></button>
							<button
								className='bnt-next'
								onClick={() => {
									setBestFlower(bestProductData[1]);
								}}></button>
						</div>
					</div>
					<div className='info'>{bestProductItem}</div>
				</div>
			</div>

			{/* New Arrival */}
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<span>New Arrival</span>
						<div className='bnt'>
							<button
								className='bnt-prev'
								onClick={() => {
									setNewFlower(newArrivalData[0]);
								}}></button>
							<button
								className='bnt-next'
								onClick={() => {
									setNewFlower(newArrivalData[1]);
								}}></button>
						</div>
					</div>
					<div className='info'>{newFlowerItem}</div>
				</div>
			</div>

			{/* 쿠폰 이미지 */}
			<img
				className='coupon'
				src='https://static.okkot.com/images/banner/쿠폰1-1625463353879-35759ec7-5e9a-4ef8-9a8d-9b3c8abc82d0.jpg'
				alt='couponImg'
			/>

			{/* Best Review */}
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<div className='section_title'>Best Review</div>
						<div className='bnt'>
							<button
								className='bnt-prev'
								onClick={() => {
									setBestReviewFlower(bestReviewData[0]);
								}}></button>
							<button
								className='bnt-next'
								onClick={() => {
									setBestReviewFlower(bestReviewData[1]);
								}}></button>
						</div>
					</div>
					<div className='review'>{bestReviewFlowerItem}</div>
				</div>
			</div>

			{/* 플로리스트 추천 */}
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<span>플로리스트 추천</span>
						<div className='bnt'>
							<button
								className='bnt-prev'
								onClick={() => {
									setFloristFlower(floristData[0]);
								}}></button>
							<button
								className='bnt-next'
								onClick={() => {
									setFloristFlower(floristData[1]);
								}}></button>
						</div>
					</div>
					<div className='info'>{floristFlowerItem}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
