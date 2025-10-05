import Navbar from '@/app/ui/Navbar';

export default function MainAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="pt-16 pb-16">{children}</main>
        </>
    );
}
