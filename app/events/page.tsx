import EventsTimeline from './events';
import LeftSidebar from '../herosection/LeftSidebar';

export default function EventsPage() {
    return (
        <main className="w-full min-h-screen bg-black">
            <LeftSidebar activeSection={-1} />
            <EventsTimeline />
        </main>
    );
}
