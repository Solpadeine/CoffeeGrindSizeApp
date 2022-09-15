@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                </div>
                <grind-size-component :grinders="{{$grinders}}" :producers="{{$producers}}"></grind-size-component>
            </div>
        </div>
    </div>
</div>
@endsection
