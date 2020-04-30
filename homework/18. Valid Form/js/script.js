function validDevelopers(autofocus) {
    let errorCount = 0;
    let developersField = document.forms.form.developers;
    let developersValue = developersField.value;
    let developersError = document.querySelector('.developers-err');

    if (developersValue === '') {
        developersError.innerHTML = 'Enter developers!';
        errorCount++;
    } else {
        developersError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        developersField.focus();
    }
    return errorCount;
}

function validateSitenam(autofocus) {
    let errorCount = 0;
    let sitenameField = document.forms.form.sitename;
    let sitenameValue = sitenameField.value;
    let sitenameError = document.querySelector('.sitename-err');

    if (sitenameValue === '') {
        sitenameError.innerHTML = 'Enter website\'s name!!';
        errorCount++;
    } else {
        sitenameError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        sitenameField.focus();
    }
    return errorCount;
}

function validateURL(autofocus) {
    let errorCount = 0;
    let urlField = document.forms.form.url;
    let urlValue = urlField.value;
    let urlError = document.querySelector('.url-err');

    if (urlValue === '') {
        urlError.innerHTML = 'Enter URL!';
        errorCount++;
    } else {
        urlError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        urlField.focus();
    }
    return errorCount;
}
function validateLaunchdate(autofocus) {
    let errorCount = 0;
    let launchdateField = document.forms.form.launchdate;
    let launchdateValue = launchdateField.value;
    let launchdateError = document.querySelector('.launchdate-err');

    if (launchdateValue === '') {
        launchdateError.innerHTML = 'Enter launchdate!';
        errorCount++;
    } else {
        launchdateError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        launchdateField.focus();
    }
    return errorCount;
}

function validateVisitors(autofocus) {
    let errorCount = 0;
    let visitorsField = document.forms.form.visitors;
    let visitorsValue = visitorsField.value;
    let visitorsError = document.querySelector('.visitors-err');

    if (visitorsValue === '') {
        visitorsError.innerHTML = 'Enter visitors!';
        errorCount++;
    } else {
        visitorsError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        visitorsField.focus();
    }
    return errorCount;
}

function validateMail(autofocus) {
    let errorCount = 0;
    let mailField = document.forms.form.mail;
    let mailValue = mailField.value;
    let mailError = document.querySelector('.mail-err');

    if (mailValue === '') {
        mailError.innerHTML = 'Enter mail!';
        errorCount++;
    } else {
        mailError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        mailField.focus();
    }
    return errorCount;
}

function validateDivision(autofocus) {
    let errorCount = 0;
    let divisionField = document.forms.form.division;
    let divisionValue = divisionField.value;
    let divisionError = document.querySelector('.division-err');

    switch(divisionValue) {
        case ('0'):
            divisionError.innerHTML = 'You cannot use this option';
            errorCount++;
            break;
        case ('2'):
            divisionError.innerHTML = 'You cannot use this option, too.';
            errorCount++;
            break;
        default:
            divisionError.innerHTML = '';
    }

    if ( errorCount &&  autofocus) {
        divisionField.focus();
    }
    return errorCount;
}

function validatePayment(autofocus) {
    let errorCount = 0;
    let paymentField = document.forms.form.payment;
    let paymentValue = paymentField.value;
    let paymentError = document.querySelector('.payment-err');

    switch(paymentValue) {
        case (''):
            paymentError.innerHTML = 'Choose something';
            errorCount++;
            break;
        default:
            paymentError.innerHTML = '';
    }

    if ( errorCount &&  autofocus) {
        paymentField.focus();
    }
    return errorCount;
}

function validateVotes(autofocus) {
    let errorCount = 0;
    let votesField = document.forms.form.votes;
    let votesValue = votesField.value;
    let votesError = document.querySelector('.votes-err');

    if ( !votesField.checked ) {
        votesError.innerHTML = 'Agree!';
        errorCount++;
    } else {
        votesError.innerHTML = '';
    }

    if ( errorCount && autofocus ) {
        votesField.focus();
    }
    return errorCount;
}

function validateDescription(autofocus) {
    let errorCount = 0;
    let descriptionField = document.forms.form.description;
    let descriptionValue = descriptionField.value;
    let descriptionError = document.querySelector('.description-err');

    if (descriptionValue === '') {
        descriptionError.innerHTML = 'Say something about your website!';
        errorCount++;
    } else {
        descriptionError.innerHTML = '';
    }

    if (errorCount && autofocus) {
        descriptionField.focus();
    }
    return errorCount;
}

document.forms.form.developers.onblur=function() { validDevelopers(false); };
document.forms.form.sitename.onblur=function() { validateSitenam(false); };
document.forms.form.url.onblur=function() { validateURL(false); };
document.forms.form.launchdate.onblur=function() { validateLaunchdate(false); };
document.forms.form.visitors.onblur=function() { validateVisitors(false); };
document.forms.form.mail.onblur=function() { validateMail(false); };
document.forms.form.division.onchange=function() { validateDivision(false); };
document.forms.form.payment[0].onchange=function() { validatePayment(false); };
document.forms.form.payment[1].onchange=function() { validatePayment(false); };
document.forms.form.payment[2].onchange=function() { validatePayment(false); };
document.forms.form.votes.onchange=function() { validateVotes(false); };
document.forms.form.description.onblur=function() { validateDescription(false); };

function validAll(EO) {
    EO=EO || window.event;

    try {
        let totalErrorCount = 0;
        totalErrorCount += validDevelopers( !totalErrorCount );
        totalErrorCount += validateSitenam( !totalErrorCount );
        totalErrorCount += validateURL( !totalErrorCount );
        totalErrorCount += validateLaunchdate( !totalErrorCount );
        totalErrorCount += validateVisitors( !totalErrorCount );
        totalErrorCount += validateMail( !totalErrorCount );
        totalErrorCount += validateDivision( !totalErrorCount );
        totalErrorCount += validatePayment( !totalErrorCount );
        totalErrorCount += validateVotes( !totalErrorCount );
        totalErrorCount += validateDescription( !totalErrorCount );

        if ( totalErrorCount )
            EO.preventDefault(); // если ошибки были - отменяем отправку формы на сервер
    }
    catch ( error ) {
        EO.preventDefault(); // что-то пошло не так - отменяем отправку формы на сервер
    }
}


document.forms.form.addEventListener('submit', validAll);