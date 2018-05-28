<?php
    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $build = $_POST['user-build'];
    $apart = $_POST['user-apart'];
    $floor = $_POST['user-floor'];
    $comment = $_POST['user-comment'];
    $payment = $_POST['payment'];

    $disturb = $_POST['callback'];
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';
    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $build . '</li>
            <li>Квартира: ' . $apart . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Способ оплаты: ' . $payment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';
    $headers = "From: Администратор сайта <anviento@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('anviento@yandex.ru', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    };

    echo json_encode($data);

?>