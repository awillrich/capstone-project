<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TestStationRequest;
use App\Models\TestStation;

class TestStationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stations = TestStation::all();

        return $this->successResponse($stations);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TestStationRequest $request)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return $this->errorResponse($request->validator->errors(), 422);
        }

        $station = new TestStation();
        $station->fill($request->all());
        $station->save();

        return $this->successResponse($station, 'Test Station created successfully', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $station = TestStation::findOrFail($id);
        return $this->successResponse($station, "Test station received successfully");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TestStationRequest $request, $id)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return $this->errorResponse($request->validator->errors(), 422);
        }

        $station = TestStation::findOrFail($id);
        $station->fill($request->all());
        $station->update();

        return $this->successResponse($station, "Test Station updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $station = TestStation::findOrFail($id);
        $station->delete();
        return $this->successResponse(NULL, "Test Station deleted successfully");
    }
}
