# laravue 

A vue application sending/fetching data to/from a laravel api

### How to setup

#### Installing dependencies

Enter the *laravel-api*'s folder by using:
> cd laravel-api

Make a copy of `.env.example` renaming it to `.env`
> cp .env.example .env

Edit the `.env` file in order to set your database
and others configurations as you want

#### Run the commands below inside *laravel-api*'s folder
> composer install<br>
> php artisan key:generate<br>
> php artisan migrate<br>

Start the server by running
> php artisan serve

At frontend folder run the command below:<br>
*Using npm*
> npm i

*Using yarn*
> yarn

Start the server by running:<br>
*Using npm*
> npm run serve

*Using yarn*
> yarn serve

I guess this is it.
