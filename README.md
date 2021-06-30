<p align="center">
  <img src="./public/images/logo.png" alt="Logo"/>
</p>

# Volty
Volty - kanban board application

## Installation
Step-by-step instructions for starting the development environment

### Cloning
First of all, "copy" this project to your computer using the command
```
git clone https://github.com/remox112358/volty.git
```

### Settings
Rename .env.example to .env. Change the values of these fields
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=volty
DB_USERNAME="db username"
DB_PASSWORD="db password"
```

### Dependencies
Composer dependencies (backend)
```
composer install
```

Yarn dependencies (frontend)
```
yarn install
```

### Launch
Generating the unique key for the application
```
php artisan key:generate
```

Initialize migration (make sure to set up your DB connection in .env)
```
php artisan migrate
```

Create encryption keys needed to generate access tokens
```
php artisan passport:install
```

Launching the built-in development server
```
php artisan serve
```

Launch changes tracking
```
yarn run watch
```

### End
This manual may be supplemented in the future


