<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\TestManufacturerRequest;
use App\Models\TestManufacturer;

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
    public function store(TestManufacturerRequest $request)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return $this->errorResponse($request->validator->errors(), 422);
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
        $manufacturer = TestManufacturer::findOrFail($id);
        return $this->successResponse($manufacturer,'Test Manufacturer retrieved successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TestManufacturerRequest $request, $id)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return $this->errorResponse($request->validator->errors(), 422);
        }

        $manufacturer = TestManufacturer::findOrFail($id);
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
        $manufacturer = TestManufacturer::findOrFail($id);
        $manufacturer->delete();
        return $this->successResponse(null, 'Test Manufacturer Deleted');
    }
}
