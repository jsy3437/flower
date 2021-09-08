import React, { useState, useEffect } from 'react';

import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';
import banner5 from '../../images/banner5.jpg';
import banner6 from '../../images/banner6.jpg';

function Banner() {
	let [number, setNumber] = useState([0, 0]);
	let banner = [banner1, banner2, banner3, banner4, banner5, banner6];

	let toggleImg = document.querySelector('.imgSlider_img');
	//
	let time;

	// 1. 3초마다 setImgArray로 0번째 빼서 제일뒤로 옮기기
	// 2. 0번째 부터 5번째 까지 3초마다 반복문 돌려서 5번째가 되면 다시 0으로 만들어 주기

	// 4초마다 이미지 띄워주는 함수 실행
	useEffect(() => {
		if (number[1] !== 1) {
			time = setTimeout(() => {
				bannerFade();
				{
					toggleImg && toggleImg.classList.remove('fade');
				}
			}, 4000);
		} else if (number[1] == 1) {
			resetNumber();
		}
		return () => {
			clearTimeout(time);

			{
				toggleImg && toggleImg.classList.add('fade');
			}
		};
	}, [number]);

	function resetNumber() {
		setNumber([number[0], 0]);
	}

	// 이미지 바꿔주는 함수
	function bannerFade() {
		if (number[0] == 5) {
			setNumber([0, number[1]]);
		} else {
			setNumber([number[0] + 1, number[1]]);
		}
	}

	// 배너 next버튼 누르면 실행
	function clickNextBnt() {
		if (number[0] == 5) {
			setNumber([0, 1]);
		} else {
			setNumber([number[0] + 1, 1]);
		}
		{
			toggleImg && toggleImg.classList.add('fade');
		}
		{
			toggleImg && toggleImg.classList.remove('fade');
		}
	}

	// 배너 Prev 버튼 누르면 실행
	function clickPrevBnt() {
		if (number[0] == 0) {
			setNumber([5, 1]);
		} else {
			setNumber([number[0] - 1, 1]);
		}
		{
			toggleImg && toggleImg.classList.add('fade');
		}
		{
			toggleImg && toggleImg.classList.remove('fade');
		}
	}

	return (
		<div className='banner'>
			<div className='imgSlider'>
				<div className='imgSlider_img fade'>
					<img src={banner[number[0]]} />
				</div>
			</div>

			<div
				className='prev-button'
				onClick={() => {
					clickPrevBnt();
				}}></div>
			<div
				className='next-button'
				onClick={() => {
					clickNextBnt();
				}}></div>
		</div>
	);
}

export default Banner;
