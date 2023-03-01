<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получаем данные из формы
  $name = $_POST["name"];
  $phone = $_POST["phone"];

  // Формируем сообщение
  $message = "Имя: " . $name . "\n" .
             "Телефон: " . $phone;

  // Отправляем сообщение на указанный email-адрес qweqweeqwewqewqe
  $to = "youremail@example.com";
  $subject = "Запрос на обратный звонок";
  $headers = "From: yourwebsite@example.com";

  if (mail($to, $subject, $message, $headers)) {
    // Если сообщение отправлено успешно, возвращаем успешный статус
    $response = array("status" => "success");
  } else {
    // Если произошла ошибка при отправке сообщения, возвращаем статус с ошибкой
    $response = array("status" => "error", "message" => "Ошибка отправки сообщения");
  }

  // Возвращаем ответ в формате JSON
  header("Content-Type: application/json");
  echo json_encode($response);
  exit;
}

?>
