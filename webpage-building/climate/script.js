const logo = document.querySelector('#logo');
const sidebar = document.querySelector('#sidebar');
const today = new Date();
const parisAgreementDate = new Date(2016, 11, 4);
const nextPAGatheringDate = new Date(parisAgreementDate.getFullYear() + 5, parisAgreementDate.getMonth(),parisAgreementDate.getDay());
const daysUntilParisMeeting = Math.floor((nextPAGatheringDate - today) / 86400000);

console.log(daysUntilParisMeeting);
console.log(nextPAGatheringDate);

window.addEventListener('load', () => {
	const elementDaysUntilParisGathering = document.querySelector('[data-days-until-paris]');

	elementDaysUntilParisGathering.textContent = daysUntilParisMeeting;

})

logo.addEventListener('click', () => {
    if (sidebar.style.marginLeft === '-350px') {
        // sidebar.style.animation = 'slideOut 1s ease'
    } else {
        sidebar.style.animation = 'slideIn 1s ease'
    }
});