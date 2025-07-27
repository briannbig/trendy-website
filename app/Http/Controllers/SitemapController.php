<?php

namespace App\Http\Controllers;

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function __invoke()
    {
        $sitemap = Sitemap::create();

        // Add all routes except auth, dashboard, and settings
        $sitemap->add(Url::create('/')->setPriority(1.0));
        $sitemap->add(Url::create('/academics')->setPriority(0.8));
        $sitemap->add(Url::create('/academics/advanced-excel')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/archicad')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/beauty-therapy')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/building-construction')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/catering')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/computer-packages')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/computerized-accounting')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/graphic-design')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/ict')->setPriority(0.6));
        $sitemap->add(Url::create('/academics/web-design')->setPriority(0.6));
        $sitemap->add(Url::create('/admissions')->setPriority(0.8));
        $sitemap->add(Url::create('/admissions/apply')->setPriority(0.6));
        $sitemap->add(Url::create('/alumni')->setPriority(0.8));
        $sitemap->add(Url::create('/careers')->setPriority(0.8));
        $sitemap->add(Url::create('/careers/apply')->setPriority(0.6));
        $sitemap->add(Url::create('/contact')->setPriority(0.8));
        $sitemap->add(Url::create('/driving-school')->setPriority(0.8));
        $sitemap->add(Url::create('/privacy-policy')->setPriority(0.8));
        $sitemap->add(Url::create('/student-life')->setPriority(0.8));
        $sitemap->add(Url::create('/student-life/campus-tour')->setPriority(0.6));
        $sitemap->add(Url::create('/team')->setPriority(0.8));
        $sitemap->add(Url::create('/terms-of-service')->setPriority(0.8));

        $sitemap->writeToFile(public_path('sitemap.xml'));

        return response('Sitemap generated successfully!');
    }
}
