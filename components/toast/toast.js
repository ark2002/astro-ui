const errorToast = document.querySelector("#error-toast");
const successToast = document.querySelector("#success-toast");
const errorToastDemoBtn = document.querySelector("#error-toast-demo-btn");
const successToastDemoBtn = document.querySelector("#success-toast-demo-btn");
const successToastClose = document.querySelector("#success-toast-close");
const errorToastClose = document.querySelector("#error-toast-close")

const openToast = (toast) => {
    toast.classList.remove("display--none");
    setTimeout(() => {
        toast.classList.add("display--none");
    }, 5000);
}

const closeToast = (toast) => {
    toast.classList.add("display--none");
}

errorToastDemoBtn.addEventListener('click',()=>openToast(errorToast));
successToastDemoBtn.addEventListener('click',()=>openToast(successToast));
errorToastClose.addEventListener('click',()=>closeToast(errorToast));
successToastClose.addEventListener('click',()=>closeToast(successToast));
