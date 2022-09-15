<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGrinderReportRequest;
use App\Models\GrinderReport;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GrinderReportController extends Controller
{

    public function store(StoreGrinderReportRequest $request): JsonResponse
    {
        $data = $request->validated();
        GrinderReport::create($data);
        return response()->json(['message' => 'Report has been sent.']);
    }


}
