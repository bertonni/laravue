# laravue 

A vue api getting/sending data to a laravel api

### How to setup

#### Installing dependencies

Inside the *laravel-api*'s folder:
> cd laravel-api

Make a copy of `.env.example` renaming to `.env`
> cp .env.example .env

Edit the `.env` file in order to set your database
and others configurations as you want

Run the commands below inside *laravel-api*'s folder
> composer install
> php artisan key:generate
> php artisan migrate

At frontend folder run the command below:<br>
*Using npm*
> npm i

*Using yarn*
> yarn

I guess this is it.
