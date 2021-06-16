<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Test;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tests = Test::all();

        return response()->json([
            "success" => true,
            "message" => "Test List",
            "data" => $tests
            ]);
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
            ['test_station' => 'uuid|required',
            'appointment' => 'datetime',
            'type' => 'string|required',
            'name' => 'string|min:2|max:50|required',
            'firstname' => 'string|min:2|max:50|required',
            'street' => 'string|min:1|max:50|required',
            'zip' => 'string|min:1|max:10|required',
            'city' => 'string|min:2|max:50|required',
            'phone' => 'string|min:5|max:30|required',
            'email' => 'email:rfc,dns',
            'dob' => 'date|required',
            'date' => 'date|required',
            'certificate_offline' => 'boolean',
            'certificate_email' => 'boolean',
            'certificate_online' => 'boolean',
            'certificate_cwa_personal' => 'boolean',
            'certificate_cwa_anonym' => 'boolean',
            'test_manufacturer_id' => 'uuid',
            'test_charge' => 'string|min:1|max:20',
            'test_result' => 'string|min:1|max:10',
            'time_register' => 'time',
            'time_reception' => 'time',
            'time_test' => 'time',
            'time_evaluation' => 'time',
            'time_email_notification' => 'time',
            'time_positive_leader' => 'time',
            'time_health_department' => 'time',
            'time_health_department_confirmation' => 'time',
            'time_certificate' => 'time',
            'result_uuid' => 'uuid',
            'result_url' => 'string|min:1|max:255',
            'result_cwa_salt' => 'string|min:1|max:255',
            'result_cwa_hash' => 'string|min:1',
            'result_cwa_url' => 'string|min:1|max:255',
            'customer_id' => 'uuid',
            'company_id' => 'uuid'],
        );

        if($validator->fails()){
            return response()->json([
            "success" => false,
            "message" => "Validation Error",
            "data" => $validator->errors()
            ], 501);
        }

        $test = new Test();
        $test->fill($request->all());
        $test->number = $this->createCurrentNumber($request['test_station']);
        $test->save();

        return response()->json([
            "success" => true,
            "message" => "Test created successfully",
            "data" => $test
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $test = Test::find($id);
        if (is_null($test)) {
            return response()->json([
            "success" => false,
            "message" => "Test not found",
            ], 404);
        }
        return response()->json([
            "success" => true,
            "message" => "Test retrieved successfully.",
            "data" => $test
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),
            ['test_station' => 'uuid',
            'appointment' => 'datetime',
            'type' => 'string',
            'name' => 'string|min:2|max:50',
            'firstname' => 'string|min:2|max:50',
            'street' => 'string|min:1|max:50',
            'zip' => 'string|min:1|max:10',
            'city' => 'string|min:2|max:50',
            'phone' => 'string|min:5|max:30',
            'email' => 'email:rfc,dns',
            'dob' => 'date',
            'date' => 'date',
            'certificate_offline' => 'boolean',
            'certificate_email' => 'boolean',
            'certificate_online' => 'boolean',
            'certificate_cwa_personal' => 'boolean',
            'certificate_cwa_anonym' => 'boolean',
            'test_manufacturer_id' => 'uuid',
            'test_charge' => 'string|min:1|max:20',
            'test_result' => 'string|min:1|max:10',
            'time_register' => 'string|min:1|max:10',
            'time_reception' => 'time',
            'time_test' => 'time',
            'time_evaluation' => 'time',
            'time_email_notification' => 'time',
            'time_positive_leader' => 'time',
            'time_health_department' => 'time',
            'time_health_department_confirmation' => 'time',
            'time_certificate' => 'time',
            'result_uuid' => 'uuid',
            'result_url' => 'string|min:1|max:255',
            'result_cwa_salt' => 'string|min:1|max:255',
            'result_cwa_hash' => 'string|min:1',
            'result_cwa_url' => 'string|min:1|max:255',
            'customer_id' => 'uuid',
            'company_id' => 'uuid'],
        );

        if($validator->fails()){
            return response()->json([
            "success" => false,
            "message" => "Validation Error",
            "data" => $validator->errors()
            ], 501);
        }

        $test = Test::find($id);
        if (is_null($test)) {
            return response()->json([
            "success" => false,
            "message" => "Test not found",
            ], 404);
        }
        $test->fill($request->all());
        $test->number = $this->createCurrentNumber($request['test_station']);
        $test->update();

        return response()->json([
            "success" => true,
            "message" => "Test updated successfully",
            "data" => $test
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $test = Test::find($id);
        if (is_null($test)) {
            return response()->json([
            "success" => false,
            "message" => "Test not found",
            ], 404);
        }
        $test->delete();
        return response()->json([
            "success" => true,
            "message" => "Test deleted successfully.",
            "data" => $test
            ]);
    }

    function createCurrentNumber($test_station) {
        return Test::where('test_station', $test_station)->max('number') + 1;
    }
}
