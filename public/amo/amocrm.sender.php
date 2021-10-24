<?php

$_POST = json_decode(file_get_contents("php://input"), true);

$contact_name = $_POST['name']; //Название добавляемого контакта
$contact_phone = $_POST['phone']; //Телефон контакта
$contact_email = $_POST['email']; //Емейл контакта
$utm_source = $_POST['source']; //utm_source
$utm_campaign = $_POST['campaign'];
$utm_medium = $_POST['medium'];
$utm_content = $_POST['content'];


//ПРЕДОПРЕДЕЛЯЕМЫЕ ПЕРЕМЕННЫЕ
$responsible_user_id = 3205354; //id ответственного по сделке, контакту, компании

$lead_name = 'Заявка с сайта ЖК Гавань'; //Название добавляемой сделки
$lead_status_id = ''; //id этапа продаж, куда помещать сделку. Пусто - неразобранное
$lead_desc = 'Описание'; //Дополнительная заметка к сделке. Сюда можно поместить тело письма и т.д.


//АВТОРИЗАЦИЯ
$user=array(
	'USER_LOGIN'=>'20032003@mail.ru', //Ваш логин (электронная почта)
	'USER_HASH'=>'8868e1226e8bb47a23468dbe6e50ae4ddc3809ed' //Хэш для доступа к API (смотрите в профиле пользователя)
);
$subdomain='alfacrm';

//АВТОРИЗАЦИЯ
//Формируем ссылку для запроса
$link = 'https://' . $subdomain . '.amocrm.ru/private/api/auth.php?type=json';
/* Нам необходимо инициировать запрос к серверу. Воспользуемся библиотекой cURL (поставляется в составе PHP). Вы также
можете
использовать и кроссплатформенную программу cURL, если вы не программируете на PHP. */
$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
//Устанавливаем необходимые опции для сеанса cURL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($user));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, __DIR__ . '/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR, __DIR__ . '/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
$out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE); //Получим HTTP-код ответа сервера
curl_close($curl); //Завершаем сеанс cURL
/* Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
$code = (int) $code;
$errors = array(
    301 => 'Moved permanently',
    400 => 'Bad request',
    401 => 'Unauthorized',
    403 => 'Forbidden',
    404 => 'Not found',
    500 => 'Internal server error',
    502 => 'Bad gateway',
    503 => 'Service unavailable',
);
try
{
    //Если код ответа не равен 200 или 204 - возвращаем сообщение об ошибке
    if ($code != 200 && $code != 204) {
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error', $code);
    }

} catch (Exception $E) {
    die('Ошибка: ' . $E->getMessage() . PHP_EOL . 'Код ошибки: ' . $E->getCode());
}
/*
Данные получаем в формате JSON, поэтому, для получения читаемых данных,
нам придётся перевести ответ в формат, понятный PHP
 */
$Response = json_decode($out, true);
//echo '<b>Авторизация:</b>'; echo '<pre>'; print_r($Response); echo '</pre>';

//ПОЛУЧАЕМ ДАННЫЕ АККАУНТА
//Формируем ссылку для запроса
$link = 'https://' . $subdomain . '.amocrm.ru/api/v2/account?with=pipelines,groups,note_types,task_types,custom_fields';

/*
Нам необходимо инициировать запрос к серверу. Воспользуемся библиотекой cURL (поставляется в составе PHP).
Вы также можете использовать и кроссплатформенную программу cURL, если вы не программируете на PHP.
*/

$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
//Устанавливаем необходимые опции для сеанса cURL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, __DIR__ . '/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR, __DIR__ . '/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
$out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

/*
Теперь мы можем обработать ответ, полученный от сервера.
Это пример. Вы можете обработать данные своим способом.
*/
$code = (int) $code;
$errors = array(
	301 => 'Moved permanently',
	400 => 'Bad request',
	401 => 'Unauthorized',
	403 => 'Forbidden',
	404 => 'Not found',
	500 => 'Internal server error',
	502 => 'Bad gateway',
	503 => 'Service unavailable'
);

try { //Если код ответа не равен 200 или 204 - возвращаем сообщение об ошибке
	if ($code != 200 && $code != 204) {
		throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error', $code);
	}
} catch (Exception $E) {
    die('Ошибка: ' . $E->getMessage() . PHP_EOL . 'Код ошибки: ' . $E->getCode());
}

/*
Данные получаем в формате JSON, поэтому, для получения читаемых данных,
нам придётся перевести ответ в формат, понятный PHP
*/
$Response = json_decode($out, true);

//echo '<b>Данные аккаунта:</b>'; echo '<pre>'; print_r($Response); echo '</pre>';


//ПОЛУЧАЕМ СУЩЕСТВУЮЩИЕ ПОЛЯ
$amoAllFields = $Response['_embedded']['custom_fields']; //Все поля
$amoConactsFields = $amoAllFields['contacts']; //Поля контактов
echo '<b>Поля из амо:</b>'; echo '<pre>'; print_r($amoAllFields); echo '</pre>';

//ФОРМИРУЕМ МАССИВ С ЗАПОЛНЕННЫМИ ПОЛЯМИ КОНТАКТА
//Стандартные поля амо:
$sFields = array_flip(array(
		'PHONE', //Телефон. Варианты: WORK, WORKDD, MOB, FAX, HOME, OTHER
		'EMAIL' //Email. Варианты: WORK, PRIV, OTHER
	)
);

//Проставляем id этих полей из базы амо
foreach($amoConactsFields as $afield) {
	if(isset($sFields[$afield['code']])) {
		$sFields[$afield['code']] = $afield['id'];
	}
}

//ДОБАВЛЯЕМ СДЕЛКУ
$leads['add']=array(
    array(
        'name' => $lead_name,
        'status_id' => $lead_status_id, //id статуса
        'responsible_user_id' => $responsible_user_id, //id ответственного по сделке
        //'date_create'=>1298904164, //optional
        //'price'=>300000,
        'tags' => 'ЖК Гавань', //Теги
        'custom_fields'=>array(
            array(
                'id' => 431475,
                'values' => array(
                    array(
                        'value' => $utm_campaign,
                    )
                )
            ),
            array(
                'id' => 431473,
                'values' => array(
                    array(
                        'value' => $utm_source,
                    )
                )
            ),
            array(
                'id' => 439581,
                'values' => array(
                    array(
                        'value' => $utm_medium,
                    )
                )
            ),
            array(
                'id' => 868195,
                'values' => array(
                    array(
                        'value' => $utm_content,
                    )
                )
            ),
            array(
                'id' => 51579,
                'values' => array(
                    array(
                        'value'=> 'Гавань',
                        'unum' => 829651,
                    )
                )
            ),
        )
    )
);
$link='https://'.$subdomain.'.amocrm.ru/api/v2/leads';
$curl=curl_init(); //Сохраняем дескриптор сеанса cURL
//Устанавливаем необходимые опции для сеанса cURL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($leads));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE,__DIR__.'/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR,__DIR__.'/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER,0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST,0);
$out=curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);
$Response=json_decode($out,true);
//echo '<b>Новая сделка:</b>'; echo '<pre>'; print_r($Response); echo '</pre>';
if(is_array($Response['_embedded']['items'])){
	foreach($Response['_embedded']['items'] as $lead) {
		$lead_id = $lead["id"]; //id новой сделки
	}
}
//ДОБАВЛЯЕМ СДЕЛКУ - КОНЕЦ

//ДОБАВЛЕНИЕ КОНТАКТА
$contacts['add'][] = array(
    'name' => $contact_name,
    'leads_id' => array($lead_id), //id сделки
    'responsible_user_id' => $responsible_user_id, //id ответственного
    'custom_fields'=>array(
        array(
            'id' => $sFields['PHONE'],
            'values' => array(
                array(
                    'value' => $contact_phone,
                    'enum' => 'MOB'
                )
            )
        ),
        array(
            'id' => $sFields['EMAIL'],
            'values' => array(
                array(
                    'value' => $contact_email,
                    'enum' => 'WORK'
                )
            )
        )
    )
);

//echo '<pre>'; print_r($contacts); echo '</pre>';

$link = 'https://' . $subdomain . '.amocrm.ru/api/v2/contacts';
$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
//Устанавливаем необходимые опции для сеанса cURL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($contacts));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, __DIR__ . '/cookie.txt'); 
curl_setopt($curl, CURLOPT_COOKIEJAR, __DIR__ . '/cookie.txt'); 
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
$out = curl_exec($curl);
$Response=json_decode($out,true);
// echo '<b>Новый контакт:</b>'; echo '<pre>'; print_r($Response); echo '</pre>';
//ДОБАВЛЕНИЕ КОНТАКТА - КОНЕЦ

//ДОБАВЛЕНИЕ ЗАДАЧИ связаться через 60 минут
$tasks['add'][] = array(
    'element_id' => $lead_id, //id сделки
    'task_type' => '1',
    'element_type' => '2',
    'responsible_user_id' => $responsible_user_id, //id ответственного
    'text' => $lead_name,
    'complete_till' =>  time() + (1 * 60 * 60)
);

$link = 'https://' . $subdomain . '.amocrm.ru/api/v2/tasks';
$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
//Устанавливаем необходимые опции для сеанса cURL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($tasks));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, __DIR__ . '/cookie.txt'); 
curl_setopt($curl, CURLOPT_COOKIEJAR, __DIR__ . '/cookie.txt'); 
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
$out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
$Response=json_decode($out,true);
//echo '<b>Новая задача:</b>'; echo '<pre>'; print_r($Response); echo '</pre>';
//ДОБАВЛЕНИЕ ЗАДАЧИ - КОНЕЦ

//ДОБАВЛЕНИЕ NOTE
$data = array(
    'add' => array(
        0 => array(
            'element_id' => $lead_id,
            'element_type' => '2',
            'text' => $lead_desc,
            'note_type' => '4'
        ),
    ),
);
$link = 'https://' . $subdomain . '.amocrm.ru/api/v2/notes';
/* Нам необходимо инициировать запрос к серверу. Воспользуемся библиотекой cURL (поставляется в составе PHP). Подробнее о
работе с этой
библиотекой Вы можете прочитать в мануале. */
$curl = curl_init(); 
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_COOKIEFILE, __DIR__ . '/cookie.txt');
curl_setopt($curl, CURLOPT_COOKIEJAR, __DIR__ . '/cookie.txt');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
$out = curl_exec($curl);
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
/* Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
$code = (int) $code;
$errors = array(
    301 => 'Moved permanently',
    400 => 'Bad request',
    401 => 'Unauthorized',
    403 => 'Forbidden',
    404 => 'Not found',
    500 => 'Internal server error',
    502 => 'Bad gateway',
    503 => 'Service unavailable',
);
try
{
    #Если код ответа не равен 200 или 204 - возвращаем сообщение об ошибке
    if ($code != 200 && $code != 204) {
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error', $code);
    }

} catch (Exception $E) {
    die('Ошибка: ' . $E->getMessage() . PHP_EOL . 'Код ошибки: ' . $E->getCode());
}

$Response=json_decode($out,true);
//echo '<b>Новая заметка:</b>'; echo '<pre>'; print_r($Response); echo '</pre>';

//переписано с https://gist.github.com/webag/58ad75276aaa14325ab02a0189c9e37d 29-04-2020
?>