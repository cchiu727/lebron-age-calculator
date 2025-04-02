const LEBRON_BIRTHDATE = new Date(year=1984, monthIndex=11, date=30);

function getLebronAge() {
    const currentDate = new Date();
    let diffMs = currentDate - LEBRON_BIRTHDATE;

    // convert ms to days           sec    min  hour day
    diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    let years = Math.floor(diffDays / 365.25)
    let days = Math.floor(diffDays % 365.25)

    return { years, days };
}

const age = getLebronAge();

document.getElementById('lebron-age-years').innerHTML = age.years;
// document.getElementById('lebron-age-days').innerHTML = age.days;

const userAge = document.getElementById('user-age');

userAge.addEventListener('input', () => {
    let diff = age.years - Number(userAge.value);

    let answer = document.getElementById('answer');

    if (diff > 0) {
        answer.innerHTML = `You are ${diff} years younger than Lebron James`;
    }
    else if (diff == 0) {
        answer.innerHTML = 'You are the same age as Lebron James!';
    }
    else if (diff < 0) {
        answer.innerHTML = `You are ${diff * -1} years older than Lebron James`;
    }
});