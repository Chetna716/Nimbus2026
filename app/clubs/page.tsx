import TeamsSection from './clubs';
import LeftSidebar from '../herosection/LeftSidebar';

export default function TeamsPage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <LeftSidebar activeSection={-1} />
      <TeamsSection />
    </main>
  );
}
