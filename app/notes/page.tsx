import Navbar from '@/components/Navbar';
import NotesSection from '@/components/NotesSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Study Notes | Shashith Rashmika',
  description: 'Free study notes covering Machine Learning, SQA, DevOps, Data Structures and more. High-quality technical notes for students and developers.',
};

export default function NotesPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <NotesSection />
        <Footer />
      </main>
    </div>
  );
}
