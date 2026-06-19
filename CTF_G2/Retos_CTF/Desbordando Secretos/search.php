
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscador Secreto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin-top: 100px;
        }
        .card {
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>

<div class="container">
    <div class="card">
        <h2 class="text-center">🔍 Buscador Secreto</h2>
        <form method="GET" action="search.php">
            <div class="mb-3">
                <label for="query" class="form-label">Introduce tu búsqueda:</label>
                <input type="text" id="query" name="query" class="form-control" placeholder="Escribe algo...">
            </div>
            <button type="submit" class="btn btn-primary w-100">Buscar</button>
        </form>

            </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

