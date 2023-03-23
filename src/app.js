const doc = {
    BetétInput: document.querySelector('#Betét'),
    NévlegeskamatotInput: document.querySelector('#Névlegeskamatot'),
    ÉvenkéntitőkésítésekszámaInput: document.querySelector('#Évenkéntitőkésítésekszáma'),
    calcButton: document.querySelector('#calcButton'),
    TénylegeséveskamatInput: document.querySelector('#Ténylegeséveskamat')
};


doc.calcButton.addEventListener('click', () => {
    startCalculation();
});

function startCalculation() {
    let betet = Number(doc.BetétInput.value);
    let nevleges = Number(doc.NévlegeskamatotInput.value);
    let evenkent = Number(doc.ÉvenkéntitőkésítésekszámaInput.value);
    let tenyleges = calcEffective(betet, nevleges, evenkent);
    console.log(evenkent)
    doc.TénylegeséveskamatInput.value = tenyleges;
}

function calcEffective(betet, nevleges, evenkenti ) {
    let tenyleges = (
        Math.pow((
            1+(nevleges/(100*evenkenti))
        ), evenkenti)-1
    )*betet;
    return tenyleges;
}