export class leadForm {
  constructor(popupController) {
    this.popupController = popupController;
    try {
      this.findDOMElements();
      this.subscribe();
    } catch (e) {
      console.log(`An error occurred. Error description: ${e.message}`);
    }
  }

  findDOMElements() {
    this.$form = document.querySelector('#lead-form');

    this.$nameInput = this.$form.querySelector('input[name="name"]');
    this.$phoneInput = this.$form.querySelector('input[name="phone"]');
    this.$emailInput = this.$form.querySelector('input[name="email"]');
    this.$commentInput = this.$form.querySelector('input[name="comment"]');
  }

  async submitHandler(e) {
    e.preventDefault();

    const formData = {
      title: 'Заявка с главного экрана',
      name: this.$nameInput.value,
      phone: this.$phoneInput.value,
      email: this.$emailInput.value,
    };
    // Заменить на новый адрес
    const response = await fetch('https://лель-эко.рф/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      this.popupController.open('success');
    }
  }

  subscribe() {
    this.$form.addEventListener('submit', this.submitHandler.bind(this));
  }
}

export class PopupForm {
  constructor(popupController) {
    this.popupController = popupController;

    try {
      this.findDOMElements();
      this.subscribe();
    } catch (e) {
      console.log(`An error occurred. Error description: ${e.message}`);
    }
  }

  findDOMElements() {
    this.$form = document.querySelector('#popupForm');

    this.$nameInput = this.$form.querySelector('input[name="name"]');
    this.$phoneInput = this.$form.querySelector('input[name="phone"]');
    this.$emailInput = this.$form.querySelector('input[name="email"]');
    this.$commentInput = this.$form.querySelector('input[name="comment"]');
  }

  async submitHandler(e) {
    e.preventDefault();

    const formData = {
      title: 'Заявка со всплывающего окна "Обратный звонок"',
      name: this.$nameInput.value,
      phone: this.$phoneInput.value,
      email: this.$emailInput.value,
    };
    // Заменить на новый адрес
    const response = await fetch('https://лель-эко.рф/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      this.popupController.open('success');
    }
  }

  subscribe() {
    this.$form.addEventListener('submit', this.submitHandler.bind(this));
  }
}
