import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

import { Head } from '@inertiajs/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface HomeLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <Head title="Trendy Vocational Training Centre">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
          
            
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}