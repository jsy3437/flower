import React, { useState, useEffect } from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import banner4 from '../../images/banner4.jpg';
import banner5 from '../../images/banner5.jpg';
import banner6 from '../../images/banner6.jpg';

function Banner() {
	let [number, setNumber] = useState(0);
	let banner = [banner1, banner2, banner3, banner4, banner5, banner6];

	// let [imgArray, setImgArray] = useState([]);
	let [imgArray, setImgArray] = useState(1);

	//
	let i;
	let time;
	// 1. 3초마다 setImgArray로 0번째 빼서 제일뒤로 옮기기
	// 2. 0번째 부터 5번째 까지 3초마다 반복문 돌려서 5번째가 되면 다시 0으로 만들어 주기

	useEffect(() => {
		time = setTimeout(() => {
			console.log('aa');
			bannerFade();
		}, 4000);
	}, [number]);

	function bannerFade() {
		if (number == 5) {
			setNumber(0);
		} else {
			setNumber(number + 1);
		}
	}

	// 버튼누르면 중첩되니까 그거 없어지게 하기

	// for (var i = 0; i < 6; i++) {
	// 	let time = setTimeout(() => {

	// 	});
	// 	arr.push(
	// 		<div>
	// 			<img src={imgArray[i]} />
	// 		</div>
	// 	);
	// }

	// useEffect(() => {
	// 	let time = setTimeout(() => {
	// 		//
	// 	}, 3000);
	// 	return () => {
	// 		clearTimeout(time);
	// 	};
	// }, []);

	// function showImg() {}
	console.log(banner1, 'banner1');
	return (
		<div className='banner'>
			<div className='imgSlider'>
				<ul>
					<div>
						<img src={banner[number]} />
					</div>
				</ul>
			</div>

			<div
				className='prev-button'
				onClick={() => {
					setNumber(number - 1);
				}}></div>
			<div
				className='next-button'
				onClick={() => {
					setNumber(number + 1);
				}}></div>
		</div>
	);
}

export default Banner;
