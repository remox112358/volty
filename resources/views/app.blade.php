<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  {{-- Meta tags --}}
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">

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
