<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\TestRequest;
use App\Models\Test;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class TestController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tests = Test::paginate(5);

        return $this->successResponse($tests);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TestRequest $request)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return $this->errorResponse($request->validator->errors(), 422);
        }

        $test = new Test();
        $test->fill($request->all());
        $test->number = $this->createCurrentNumber($request['test_station']);
        $test->save();

        return $this->successResponse($test, 'Test created successfully', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $test = Test::findOrFail($id);
        return $this->successResponse($test);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function update(TestRequest $request, $id)
    {
        $test = Test::findOrFail($id);
        $test->fill($request->all());
        $test->update();

        return $this->successResponse($test, 'Test updated successfully', 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $test = Test::findOrFail($id);
        $test->delete();
        return $this->successResponse(null, 'Test Deleted');
    }

    function createCurrentNumber($test_station)
    {
        return Test::where('test_station', $test_station)->max('number') + 1;
    }
}
