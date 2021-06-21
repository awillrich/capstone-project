<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TestStation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
    public function store(Request $request)
    {
        #return $request;
        $validator = Validator::make($request->all(),
            ['number' => 'string|required',
            'sign' => 'string|required',
            'name' => 'string|required',
            'street' => 'string|required',
            'zip' => 'string|required',
            'city' => 'string|required',
            'phone' => 'string|required',
            'email' => 'email:rfc,dns|required',
            'bsnr' => 'string',
            'email_leader' => 'string|required',
            'email_health_department' => 'string|required',
            'use_certificate_email' => 'boolean',
            'use_certificate_online' => 'boolean',
            'use_certificate_cwa' => 'boolean',
        ],
        );

        if($validator->fails()){
            return $this->errorResponse($validator->errors(), 422);
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
        $station = TestStation::find($id);
        if (is_null($station)) {
            return $this->errorResponse("Test Station not found", 404);
        }
        return $this->successResponse($station, "Test station received successfully");
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
            ['number' => 'string',
            'sign' => 'string',
            'name' => 'string',
            'street' => 'string',
            'zip' => 'string',
            'city' => 'string',
            'phone' => 'string',
            'email' => 'email:rfc,dns',
            'bsnr' => 'string',
            'email_leader' => 'string',
            'email_health_department' => 'string',
            'use_certificate_email' => 'boolean',
            'use_certificate_online' => 'boolean',
            'use_certificate_cwa' => 'boolean',
        ],
        );

        if($validator->fails()){
            return $this->errorResponse($validator->errors(), 422);
        }

        $station = TestStation::find($id);
        if (is_null($station)) {
            return $this->errorResponse("Test Station not found", 404);
        }
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
        $station = TestStation::find($id);
        if (is_null($station)) {
            return $this->errorResponse("Test Station not found", 404);
        }
        $station->delete();
        return $this->successResponse(NULL, "Test Station deleted successfully");
    }
}
