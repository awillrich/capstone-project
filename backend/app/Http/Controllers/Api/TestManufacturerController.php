<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TestManufacturer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestManufacturerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $manufacturers = TestManufacturer::all();

        return response()->json([
            "success" => true,
            "message" => "Test Manufacturer List",
            "data" => $manufacturers
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
            ['name' => 'string|required',
            'pzn' => 'string|required',],
        );

        if($validator->fails()){
            return response()->json([
            "success" => false,
            "message" => "Validation Error",
            "data" => $validator->errors()
            ], 501);
        }

        $manufacturer = new TestManufacturer();
        $manufacturer->fill($request->all());
        $manufacturer->save();

        return response()->json([
            "success" => true,
            "message" => "Test Manufacturer created successfully",
            "data" => $manufacturer
            ]);
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
            return response()->json([
            "success" => false,
            "message" => "Test Manufacturer not found",
            ], 404);
        }
        return response()->json([
            "success" => true,
            "message" => "Test Manufacturer retrieved successfully.",
            "data" => $manufacturer
            ]);
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
            ['name' => 'string|required',
            'pzn' => 'string|required',],
        );

        if($validator->fails()){
            return response()->json([
            "success" => false,
            "message" => "Validation Error",
            "data" => $validator->errors()
            ], 501);
        }

        $manufacturer = TestManufacturer::find($id);
        if (is_null($manufacturer)) {
            return response()->json([
            "success" => false,
            "message" => "Test Manufacturer not found",
            ], 404);
        }
        $manufacturer->fill($request->all());
        $manufacturer->update();

        return response()->json([
            "success" => true,
            "message" => "Test Manufacturer updated successfully",
            "data" => $manufacturer
            ]);
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
            return response()->json([
            "success" => false,
            "message" => "Test Manufacturer not found",
            ], 404);
        }
        $manufacturer->delete();
        return response()->json([
            "success" => true,
            "message" => "Test Manufacturer deleted successfully.",
            "data" => $manufacturer
            ]);
    }
}
