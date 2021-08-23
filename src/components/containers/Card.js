import { div } from 'prelude-ls';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import bestProductData from '../../bestProductData';
import newArrivalData from '../../newArrivalData';
import ReviewData from '../../bestReviewData';
import floristData from '../../floristData';

function Card() {
	let [bestFlower, setBestFlower] = useState(bestProductData);
	let [newFlower, setNewFlower] = useState(newArrivalData);
	let [bestReviewFlower, setBestReviewFlower] = useState(ReviewData);
	let [floristFlower, setFloristFlower] = useState(floristData);

	return (
		<div className='card-container'>
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<span>Best Product</span>
						<div className='bnt'>
							<button class='bnt-prev'></button>
							<button class='bnt-next'></button>
						</div>
					</div>
					<div className='info'>
						{bestFlower.map((info, i) => {
							return (
								<div className='info_card'>
									<div className='info_img_box'>
										<img src={info.src} class='info_img' width='100%' />
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
							);
						})}
					</div>
				</div>
			</div>
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<span>New Arrival</span>
						<div className='bnt'>
							<button class='bnt-prev'></button>
							<button class='bnt-next'></button>
						</div>
					</div>
					<div className='info'>
						{newFlower.map((info, i) => {
							return (
								<div className='info_card'>
									<div className='info_img_box'>
										<img src={info.src} class='info_img' width='100%' />
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
							);
						})}
					</div>
				</div>
			</div>
			{/* 쿠폰 이미지 */}
			<img src='https://static.okkot.com/images/banner/쿠폰1-1625463353879-35759ec7-5e9a-4ef8-9a8d-9b3c8abc82d0.jpg'></img>

			{/* Best Review */}
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<div className='section_title'>Best Review</div>
						<div className='bnt'>
							<button class='bnt-prev'></button>
							<button class='bnt-next'></button>
						</div>
					</div>
					<div className='review'>
						{bestReviewFlower.map((review, i) => {
							return (
								<div className='review_card'>
									<div className='review_img_box'>
										<img src={review.src} class='review_img' width='100%'></img>
										<div className='review_name'>{review.title}</div>
									</div>
									<div className='review_text_box'>
										<p className='review_email'>
											{review.email}
											<span className='rate'>
												<img className='star' src='https://okkot.com/images/common/star_on.png'></img>5.0
											</span>
										</p>
										<p className='review_content'>{review.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='bestProduct'>
				<div className='card'>
					<div className='section-warp'>
						<span>플로리스트 추천</span>
						<div className='bnt'>
							<button class='bnt-prev'></button>
							<button class='bnt-next'></button>
						</div>
					</div>
					<div className='info'>
						{floristFlower.map((info, i) => {
							return (
								<div className='info_card'>
									<div className='info_img_box'>
										<img src={info.src} class='info_img' width='100%' />
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
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
