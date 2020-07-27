<?php


namespace App\ThrottleRequests;

use Closure;
use Illuminate\Routing\Middleware\ThrottleRequests as
    BaseThrottleRequests;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\ValidationException;

class ThrottleRequests extends BaseThrottleRequests
{

    public function handle($request, Closure $next, $maxAttempts = 60, $decayMinutes = 1, $prefix = '')
    {

        $key = $prefix . $this->resolveRequestSignature($request);
        $maxAttempts = $this->resolveMaxAttempts($request, $maxAttempts);

        if ($this->limiter->tooManyAttempts($key, $maxAttempts)) {
            $retryAfter = $this->getTimeUntilNextRetry($key);

            throw ValidationException::withMessages([
                $this->username() => [Lang::get('auth.throttle', ['seconds' => $retryAfter])],
            ]);
        }

        $this->limiter->hit($key, $decayMinutes * 60);

        $response = $next($request);

        return $this->addHeaders(
            $response, $maxAttempts,
            $this->calculateRemainingAttempts($key, $maxAttempts)
        );
    }

    private function username()
    {
        return 'email';
    }

}