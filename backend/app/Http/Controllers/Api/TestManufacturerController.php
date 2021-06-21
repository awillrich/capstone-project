<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use App\Models\TestManufacturer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestManufacturerController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $manufacturers = TestManufacturer::all();
        return $this->successResponse($manufacturers,'Test Manufacturer List');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
            ['name' => 'string|required',
            'pzn' => 'string|required',],
        );

        if($validator->fails()){
            return $this->errorResponse($validator->errors(), 422);
        }

        $manufacturer = new TestManufacturer();
        $manufacturer->fill($request->all());
        $manufacturer->save();

        return $this->successResponse($manufacturer,'Test Manufacturer created successfully', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $manufacturer = TestManufacturer::find($id);
        if (is_null($manufacturer)) {
            return $this->errorResponse("Test Manufacturer not found", 404);
        }
        return $this->successResponse($manufacturer,'Test Manufacturer retrieved successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),
            ['name' => 'string',
            'pzn' => 'string',],
        );

        if($validator->fails()){
            return $this->errorResponse($validator->errors(), 422);
        }

        $manufacturer = TestManufacturer::find($id);
        if (is_null($manufacturer)) {
            return $this->errorResponse("Test Manufacturer not found", 404);
        }
        $manufacturer->fill($request->all());
        $manufacturer->update();

        return $this->successResponse($manufacturer,'Test Manufacturer updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $manufacturer = TestManufacturer::find($id);
        if (is_null($manufacturer)) {
            return $this->errorResponse("Test Manufacturer not found", 404);
        }
        $manufacturer->delete();
        return $this->successResponse(null, 'Test Manufacturer Deleted');
    }
}
