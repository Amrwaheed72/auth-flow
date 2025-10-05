import Navbar from '@/app/ui/Navbar';
import BottomNav from '@/app/ui/BottomNav';
import Footer from '../ui/Footer';

export default function MainAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="pt-16 pb-16">{children}</main>
            <BottomNav />
            <Footer />
        </>
    );
}
