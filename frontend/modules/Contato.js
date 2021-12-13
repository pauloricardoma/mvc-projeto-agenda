import validator from 'validator';

const menssagensFlash = document.querySelector('.menssagens-flash-contato');

export default class Contato {
	constructor(formClass) {
		this.form = document.querySelector(formClass);
	}

	init() {
		this.events();
	}

	events() {
		if (!this.form) return;
		this.form.addEventListener('submit', e => {
			e.preventDefault();
			this.validate(e);
		});
	}

	validate(e) {
		const el = e.target;
		const nomeInput = el.querySelector('input[name="nome"]');
		const emailInput = el.querySelector('input[name="email"]');
		const telefoneInput = el.querySelector('input[name="telefone"]');
		let error = false;
		let errors = [];

		if (!nomeInput.value) {
			errors.push('Nome é obrigatório. <br>');
			error = true;
		}

		if (emailInput.value && !validator.isEmail(emailInput.value)) {
			errors.push('Email inválido. <br>');
			error = true;
		}

		if (!emailInput.value && !telefoneInput.value) {
			errors.push(
				'Pelo menos um contato precisa ser enviado: email ou telefone.'
			);
			error = true;
		}

		menssagensFlash.innerHTML = '';
		if (error) {
			for (let erro of errors) {
				menssagensFlash.innerHTML += erro;
			}
		}

		if (!error) el.submit();
	}
}
