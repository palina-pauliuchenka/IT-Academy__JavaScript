let formDef1=
  [
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
      variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
      variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {label:'Опубликовать:',kind:'submit'},
  ];

let formDef2=
  [
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {label:'Зарегистрироваться:',kind:'submit'},
  ];

function DYN_FORM(form, array) {

    //задаю атрибуты форме
    form.action = 'http://fe.it-academy.by/TestForm.php';
    form.method = 'post';

    // создаю div
    let div = document.createElement('div');

    // создаю функцию для input
    function createInput(type, value) {
        // создаю нужные мне элементы
        let label = document.createElement('label');
        let input = document.createElement('input');
        let br = document.createElement('br');
        let labelText = document.createTextNode(value.label);
        let span = document.createElement('span');

        input.type = type;
        input.name = value.name;

        // строю форму
        form.appendChild(div);
        div.appendChild(label);
        div.appendChild(br);
        label.appendChild(span);
        span.appendChild(labelText);
        label.appendChild(input);
    }

    // делаю проверку под форму
    array.forEach(function(value) {
        // если тип инпута = 'longtext', то создать инпут с типом текст и тд
        if (value.kind === 'longtext') {
            createInput('text', value);

        } else if (value.kind === 'number') {
            createInput('number', value);

        } else if (value.kind === 'shorttext') {
            createInput('email', value);

        } else if (value.kind === 'combo') {
            // создаю рубрику
            let label = document.createElement('label');
            let labelText = document.createTextNode(value.label);
            let br = document.createElement('br');
            let options = value.variants;
            let select = document.createElement('select');
            let span = document.createElement('span');
            select.name = value.name;

            label.appendChild(span);
            span.appendChild(labelText);
            label.appendChild(select);
            div.appendChild(label);
            div.appendChild(br);

            // создаю значения в рубрике
            options.forEach(function(item) {
                let option = document.createElement('option');
                let optionText = document.createTextNode(item.text);

                option.value = item.value;

                select.appendChild(option);
                option.appendChild(optionText);
            });

        } else if (value.kind === 'radio') {
            // создаю радио
            let label = document.createElement('label');
            let labelText = document.createTextNode(value.label);
            let br = document.createElement('br');
            let arrRadio = value.variants;
            let span = document.createElement('span');

            div.appendChild(label);
            div.appendChild(br);
            label.appendChild(span);
            span.appendChild(labelText);

            // текст радио
            arrRadio.forEach(function(item) {
                let input = document.createElement('input');
                let labelRadio = document.createElement('label');
                let labelTextRadio = document.createTextNode(item.text);

                input.type = 'radio';
                input.name = item.name;
                input.value = item.value;

                labelRadio.appendChild(input);
                labelRadio.appendChild(labelTextRadio);
                label.appendChild(labelRadio);
            });

        } else if (value.kind === 'check') {
            createInput('checkbox', value);

        } else if (value.kind === 'memo') {
            // поле отзыва
            let label = document.createElement('label');
            let labelText = document.createTextNode(value.label);
            let br = document.createElement('br');
            let textarea = document.createElement('textarea');

            textarea.name = value.name;

            label.appendChild(labelText);
            label.appendChild(br);
            div.appendChild(label);
            label.appendChild(textarea);
        } else if (value.kind === 'submit') {
            // создаю кнопку
            let input = document.createElement('input');
            let br = document.createElement('br');

            input.type = 'submit';
            input.value = value.label;

            div.appendChild(br);
            div.appendChild(input);


        } 
    });
}

let form1 = document.forms.form1;
let form2 = document.forms.form2;

DYN_FORM(form1, formDef1);
DYN_FORM(form2, formDef2);