<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    public function getList()
    {
   	$list = [
		[
			"name"	=>	"sexyoung",
			"content"	=>	"bla bla bla",
		],
		[
			"name"	=>	"sexyoung",
			"content"	=>	"bla bla bla",
		],
	   ];

    	return response()->json($list);
    }

    public function postList(Request $request)
    {
	//$list.push($request->input());
	return response()->json([$request->input()]);
    }
}
