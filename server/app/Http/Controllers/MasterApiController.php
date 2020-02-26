<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MasterApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->models->all();
        return response()->json($data);
    }


    public function store(Request $request)
    {
        if(!$request){
            response()->json(['Error' => 'Null Fields']);
        }
        if($data = $this->models->create($request->all())){
            return response()->json(['status' => 'sucess','data' => $data], 201);
        }else{
            return response()->json(['status' => 'fail','data' => $data]);
        }
    }


    public function show($id)
    {
        $data = $this->models->find($id);
        if(!$data){
            return response()->json(['Error' => 'Not Found'], 404);
        }
        return response()->json($data);
    }



    public function update(Request $request, $id)
    {
        $data = $this->models->find($id);
        if(!$data){
            response()->json(['Error' => 'Not Found'], 404);
        }
        $newData = $request->all();
        if($data->update($newData)){
           return  response()->json($data);
        }
    }


    public function destroy($id)
    {
        $data = $this->models->find($id);
        if(!$data){
            response()->json(['Error' => 'Not Found'], 404);
        }
        if($data->delete()){
            return response()->json(['status' => 'Successfully deleted', 'data' => $data], 205);
        }else{
            return response()->json(['status' => 'Not deleted']);
        }

    }
    
}
