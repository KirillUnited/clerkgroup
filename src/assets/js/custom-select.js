const props = {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    placeholder: 'Please Select',
    allowHTML: false,
}
const element = document.querySelector('.js-choice');
const choices = new Choices(element, props);