$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    // console.log(data);
    // console.log(url);
    // console.log(type);

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<div class="success">' + mes + '</div>');
        } else{
            form.append('<div class="error">' + mes + '</div>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');

    return $.ajax({
        type: 'POST',
        url: url,
        dataType: 'JSON',
        data: data
    })
};