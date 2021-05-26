<?php

namespace App\Http\Controllers;

use App\Models\User as User;
use Illuminate\Http\Request;
use PhpParser\JsonDecoder;

class UsersController extends Controller
{
	public function index() {
		return User::all();
	}

	public function store(Request $request) {
		
		User::create([
			'name' => $request->username,
			'email' => $request->email,
			'password' => $request->password,
			]);

		}
		
		public function update(Request $request, User $user) {
		$user->name = $request->name;
		$user->email = $request->email;

		$user->save();

		return $user;
	}

	public function remove(User $user) {
		$user->delete();

		return response()->json([
			'message' => 'Usuário removido com sucesso!'
		]);
	}
}
