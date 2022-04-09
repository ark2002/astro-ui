const alertModalDemoBtn = document.querySelector('#alert-modal-demo-btn');
const choiceModalDemoBtn = document.querySelector('#choice-modal-demo-btn');
const alertModalDemo = document.querySelector('#alert-modal-demo');
const choiceModalDemo = document.querySelector('#choice-modal-demo');
const background = document.querySelector('#background');

const openModal = (modal) => {
    modal.classList.remove("display--none");
    modal.focus();
    background.classList.add("background--blur")
}

const closeModal = (modal) => {
    modal.classList.add("display--none");
    background.classList.remove("background--blur")
}

alertModalDemoBtn.addEventListener('click', () => openModal(alertModalDemo));
alertModalDemo.addEventListener('blur', () => closeModal(alertModalDemo));
choiceModalDemoBtn.addEventListener('click', () => openModal(choiceModalDemo));
choiceModalDemo.addEventListener('blur', () => closeModal(choiceModalDemo));