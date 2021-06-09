<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  {{-- Meta tags --}}
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  {{-- Favicon --}}
  <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon">

  {{-- Fonts --}}
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  {{-- Stylesheets --}}
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">

  {{-- Scripts --}}
  <script src="{{ asset('js/app.js') }}" defer></script>

  {{-- Document title --}}
  <title>{{ config('app.name') }}</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
