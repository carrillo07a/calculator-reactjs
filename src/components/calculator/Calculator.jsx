import React, { useRef, useEffect, useState } from 'react';
import './calculator.css';
import { BUTTONS, BUTTON_ACTIONS } from './buttonConfig';

const Calculator = () => {
	const [expression, setExpression] = useState('');
	const buttonRef = useRef(null);
	const expRef = useRef(null);

	useEffect(() => {
		const buttonsSelector = Array.from(buttonRef.current.querySelectorAll('button'));
		buttonsSelector.forEach((e) => (e.style.height = e.offsetWidth + 'px'));
	}, []);

	const actionClick = (item) => {
		const expDiv = expRef.current;

		if (item.action === BUTTON_ACTIONS.THEME) document.body.classList.toggle('dark');

		if (item.action === BUTTON_ACTIONS.ADD) {
			addAnimation(item.display);
			const operator = item.display !== 'x' ? item.display : '*';
			setExpression(expression + operator);
		}

		if (item.action === BUTTON_ACTIONS.DELETE) {
			expDiv.parentNode.querySelector('div:last-child').innerHTML = '';
			expDiv.innerHTML = '';
			setExpression('');
		}

		if (item.action === BUTTON_ACTIONS.CALC) {
			if (expression.trim().length <= 0) return;

			expDiv.parentNode.querySelector('div:last-child').remove();
			const cloneNode = expDiv.cloneNode(true);
			expDiv.parentNode.appendChild(cloneNode);
			const transform = `translateY(${-(expDiv.offsetHeight + 10) + 'px'}) scale(0.4)`;

			try {
				let res = eval(expression);
				setExpression(res.toString());

				setTimeout(() => {
					cloneNode.style.transform = transform;
					expDiv.innerHTML = '';
					addAnimation(Math.floor(res * 100000000) / 100000000);
				}, 200);
			} catch {
				setTimeout(() => {
					cloneNode.style.transform = transform;
					cloneNode.innerHTML = 'Syntax error';
				}, 200);
			} finally {
				console.log('Complete');
			}
		}
	};

	const addAnimation = (content) => {
		const expDiv = expRef.current;
		const span = document.createElement('span');

		span.innerHTML = content;
		span.style.opacity = '0';
		expDiv.appendChild(span);

		const width = span.offsetWidth + 'px';
		span.style.width = '0';

		setTimeout(() => {
			span.style.opacity = '1';
			span.style.width = width;
		}, 100);
	};

	return (
		<div className="calculator">
			<div className="calculator__result">
				<div ref={expRef} className="calculator__result__exp"></div>
				<div className="calculator__result__exp"></div>
			</div>

			<div ref={buttonRef} className="calculator__buttons">
				{BUTTONS.map((item, index) => (
					<button key={index} className={item.class} onClick={() => actionClick(item)}>
						{item.display}
					</button>
				))}
			</div>
		</div>
	);
};

export default Calculator;
