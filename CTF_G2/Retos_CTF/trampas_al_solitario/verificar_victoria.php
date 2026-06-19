<?php
error_reporting(E_ALL); // Reportar todos los errores
ini_set('display_errors', '1'); // Mostrar errores en pantalla

header('Content-Type: application/json');

// Debe ser EXACTAMENTE el mismo secreto que en solitario.js (línea 29)
$secreto = "SolitarioWeb2025"; // Asegúrate que coincida con el JS
$flag = "flag{D3bugg3r_M4st3r_3342}"; // ¡CAMBIA ESTA FLAG POR LA TUYA!

$response = ['exito' => false, 'mensaje' => 'Petición inválida'];

// Leer el cuerpo de la petición POST JSON
$input = json_decode(file_get_contents('php://input'), true);

// Verificar que los parámetros necesarios existen
if (isset($input['puntuacion']) && isset($input['token'])) {
    $puntuacion_cliente = intval($input['puntuacion']);
    $token_cliente = $input['token'];

    // Comprobar si la puntuación es suficiente
    if ($puntuacion_cliente >= 5000) {
        // Replicar la lógica de generación de token del cliente (JS: btoa)
        $dataToEncode = $puntuacion_cliente . ':' . $secreto;
        $token_esperado = base64_encode($dataToEncode); // PHP: base64_encode equivale a JS: btoa

        // Comparar tokens de forma segura contra ataques de temporización (aunque para un CTF simple puede no ser estrictamente necesario)
        if (hash_equals($token_esperado, $token_cliente)) {
            $response = ['exito' => true, 'flag' => $flag];
        } else {
            $response['mensaje'] = 'Token inválido.';

        }
    } else {
        $response['mensaje'] = 'Puntuación insuficiente.';
    }
} else {
     $response['mensaje'] = 'Faltan parámetros requeridos (puntuacion, token).';
}

echo json_encode($response);
?>
