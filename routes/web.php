<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\SitemapController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/generate-sitemap', SitemapController::class);

// Academics Routes
Route::prefix('academics')->group(function () {
    Route::get('/', function () {
        return Inertia::render('academics/index');
    })->name('academics.index');
    Route::get('advanced-excel', function () {
        return Inertia::render('academics/advanced-excel');
    })->name('academics.advanced-excel');
    Route::get('archicad', function () {
        return Inertia::render('academics/archicad');
    })->name('academics.archicad');
    Route::get('beauty-therapy', function () {
        return Inertia::render('academics/beauty-therapy');
    })->name('academics.beauty-therapy');
    Route::get('building-construction', function () {
        return Inertia::render('academics/building-construction');
    })->name('academics.building-construction');
    Route::get('catering', function () {
        return Inertia::render('academics/catering');
    })->name('academics.catering');
    Route::get('computer-packages', function () {
        return Inertia::render('academics/computer-packages');
    })->name('academics.computer-packages');
    Route::get('computerized-accounting', function () {
        return Inertia::render('academics/computerized-accounting');
    })->name('academics.computerized-accounting');
    Route::get('graphic-design', function () {
        return Inertia::render('academics/graphic-design');
    })->name('academics.graphic-design');
    Route::get('ict', function () {
        return Inertia::render('academics/ict');
    })->name('academics.ict');
    Route::get('web-design', function () {
        return Inertia::render('academics/web-design');
    })->name('academics.web-design');
});

// Admissions Routes
Route::prefix('admissions')->group(function () {
    Route::get('/', function () {
        return Inertia::render('admissions/index');
    })->name('admissions.index');
    Route::get('apply', function () {
        return Inertia::render('admissions/apply');
    })->name('admissions.apply');
});

// Alumni Routes
Route::get('/alumni', function () {
    return Inertia::render('alumni/index');
})->name('alumni.index');

// Careers Routes
Route::prefix('careers')->group(function () {
    Route::get('/', function () {
        return Inertia::render('careers/page');
    })->name('careers.index');
    Route::get('apply', function () {
        return Inertia::render('careers/apply');
    })->name('careers.apply');
    Route::get('thank-you', function () {
        return Inertia::render('careers/thank-you');
    })->name('careers.thank-you');
    // Dynamic route for job details, assuming 'id' is a parameter
    Route::get('{id}', function () {
        return Inertia::render('careers/page'); // Assuming apply page handles dynamic job details
    })->name('careers.show');
});

// Contact Route
Route::get('/contact', function () {
    return Inertia::render('contact/index');
})->name('contact.index');

// Driving School Route
Route::get('/driving-school', function () {
    return Inertia::render('driving-school/index');
})->name('driving-school.index');

// Privacy Policy Route
Route::get('/privacy-policy', function () {
    return Inertia::render('privacy-policy/index');
})->name('privacy-policy.index');

// Student Life Routes
Route::prefix('student-life')->group(function () {
    Route::get('/', function () {
        return Inertia::render('student-life/index');
    })->name('student-life.index');
    Route::get('campus-tour', function () {
        return Inertia::render('student-life/campus-tour');
    })->name('student-life.campus-tour');
});

// Team Route
Route::get('/team', function () {
    return Inertia::render('team/page');
})->name('team.index');

// Terms of Service Route
Route::get('/terms-of-service', function () {
    return Inertia::render('terms-of-service/index');
})->name('terms-of-service.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
