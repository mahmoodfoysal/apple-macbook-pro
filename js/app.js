function getId(elementId) {
    return document.getElementById(elementId);
}
// memory 
const memory_8gb = getId('memory-8gb');
const memory_16gb = getId('memory-16gb');
const memoryField = getId('memoryCostField');
// storage 
const storage256gb = getId('storage-256gb');
const storage512gb = getId('storage-512gb');
const storage1tb = getId('storage-1tb');
const storageCostField = getId('storage-cost-field');
// shipping 
const freeShipping = getId('free-shipping');
const costShipping = getId('cost-shipping');
const delevaryCostField = getId('delevary-cost-field');
// function
function eventListener(eventName, fieldName, fieldValue) {
    eventName.addEventListener('click', function(){
        fieldName.innerText = fieldValue;
        updateTotal();
    });
}
eventListener(memory_8gb,memoryField,'0');
eventListener(memory_16gb,memoryField,'180');
eventListener(storage256gb,storageCostField,'0');
eventListener(storage512gb,storageCostField,'100');
eventListener(storage1tb,storageCostField,'180');
eventListener(freeShipping,delevaryCostField,'0');
eventListener(costShipping,delevaryCostField,'20');
// total 
const imacPrice = document.getElementById('price');
const total =document.getElementById('total-price');
const finalTotalAmount = document.getElementById('final-total');

function verifyCode(amount) {
    const matched = 'stevekaku';
    const inputPromoCode = document.getElementById('input-code').value;
    if(inputPromoCode == matched) {
        const afterPromoDiscount = amount - (amount*20)/100;
        return afterPromoDiscount; 
    }
    else{
        return amount;
    }
    
}
document.getElementById('click-button').addEventListener('click', function(){
    const grandTotal = total.innerText;
    const afterPromoDiscount = verifyCode(grandTotal);
    finalTotalAmount.innerText = afterPromoDiscount;
    document.getElementById('input-code').value = '';
    document.getElementById('click-button').disabled = true;
})
// update total
function updateTotal() {
    const price = parseInt(imacPrice.innerText);
    const memoryCharge = parseInt(memoryField.innerText);
    const storageCharge = parseInt(storageCostField.innerText);
    const shippingCharge = parseInt(delevaryCostField.innerText);
    const grandTotal = price + memoryCharge + storageCharge + shippingCharge;
    total.innerText = grandTotal;
    finalTotalAmount.innerText = grandTotal;
}
