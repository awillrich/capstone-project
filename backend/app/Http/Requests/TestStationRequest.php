<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestStationRequest extends FormRequest
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
            'number' => 'string',
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
        ];
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $this->validator = $validator;
    }
}
