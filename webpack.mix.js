const mix = require('laravel-mix');

mix.js('src/app.js', 'public/')
    // .sass('resources/sass/app.scss', 'public/')
    .vue();
