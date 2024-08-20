export default class MobileMenu {
    constructor(params) {
        this.init();
    }

    init() {
        const element = document.querySelector('[data-mobile-menu="modal"]');
        const openButton = document.querySelector('[data-mobile-menu="open"]');
        const closeButtonList = document.querySelectorAll('[data-mobile-menu="close"]');

        openButton?.addEventListener('click', () => {
            element?.classList.add('header-menu-mobile--open');
        })
        closeButtonList?.forEach(closeButton => {
            closeButton?.addEventListener('click', () => {
                element?.classList.remove('header-menu-mobile--open');
            })
        })
    }
}