const labels = document.querySelectorAll('.checkboxs');
const inputs = document.querySelectorAll('[data-radio]');
const choice = document.querySelector('[data-choice]');
const btn = document.querySelector('[data-button]');
const wrapper = document.querySelectorAll('[data-wrapper]')

let radioVal;
let isSelect = false;

inputs.forEach( input => {
	input.addEventListener( 'click', (e) => {
		isSelect = true;
		radioVal = input.value;

		input.labels[0].classList.add('bg-active');
		for (let i = 0; i < labels.length; i++) {
			if (inputs[i].checked == false) {
				inputs[i].labels[0].classList.remove('bg-active');
			}
		}
	} )
} )


btn.addEventListener('click', () => {

	if (isSelect) {
		wrapper[0].classList.add('hide');

		choice.textContent = radioVal;
		wrapper[1].classList.remove('hide');
	}
})
