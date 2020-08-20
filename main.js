function formattedPhone(phone) {
    var phoneArr = phone.split('');
    phoneArr.splice(2,0,' (');
    phoneArr.splice(6,0,') ');
    phoneArr.splice(10,0,'-');
    phoneArr.splice(13,0,'-');

    var formatted = phoneArr.join('');

    return formatted;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90