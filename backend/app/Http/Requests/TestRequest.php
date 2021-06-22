<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestRequest extends FormRequest
{
    public $validator = null;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'test_station' => 'uuid|required',
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
            'company_id' => 'uuid'
            ];
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $this->validator = $validator;
    }
}
