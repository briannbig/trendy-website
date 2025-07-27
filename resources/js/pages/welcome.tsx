import CallToAction from '@/components/home/CallToAction';
import FeaturesSection from '@/components/home/FeaturesSection';
import Hero from '@/components/home/Hero';
import NewsSection from '@/components/home/NewsSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import StatsSection from '@/components/home/StatsSection';
import Testimonials from '@/components/home/Testimonials';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import VideoSection from '@/components/home/VideoSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HomeLayout from '@/layouts/home-layout';

import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {


    return (
        <HomeLayout >
            <Hero />
            <StatsSection />
            <ProgramsSection />
            <FeaturesSection />
            <WhyChooseUs />
            <VideoSection />
            <Testimonials />
            <UpcomingEvents />
            <NewsSection />
            <CallToAction />
        </HomeLayout>
    );
}



/*
 


 */