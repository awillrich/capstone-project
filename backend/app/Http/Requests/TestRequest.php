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
            'time_register' => 'date_format:H:i:s',
            'time_reception' => 'date_format:H:i:s',
            'time_test' => 'date_format:H:i:s',
            'time_evaluation' => 'date_format:H:i:s',
            'time_email_notification' => 'date_format:H:i:s',
            'time_positive_leader' => 'date_format:H:i:s',
            'time_health_department' => 'date_format:H:i:s',
            'time_health_department_confirmation' => 'date_format:H:i:s',
            'time_certificate' => 'date_format:H:i:s',
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
