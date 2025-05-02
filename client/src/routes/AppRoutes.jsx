import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About/About';
import OurMission from '../pages/About/OurMission';
import MeetTheTeam from '../pages/About/MeetTheTeam';
import Community from '../pages/Community/Community';
import Insights from '../pages/Community/Insights';
import News from '../pages/Community/News';
import Events from '../pages/Community/Events/Events';
import Upcoming from '../pages/Community/Events/Upcoming';
import Past from '../pages/Community/Events/Past';
import Partners from '../pages/Partners';
import Volunteer from '../pages/Volunteer';
import RequestToJoin from '../pages/RequestToJoin';
import Contact from '../pages/Contact';
import Newsletter from '../pages/Newsletter';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/mission" element={<OurMission />} />
      <Route path="/about/team" element={<MeetTheTeam />} />
      
      <Route path="/community" element={<Community />} />
      <Route path="/community/insights" element={<Insights />} />
      <Route path="/community/news" element={<News />} />
        <Route path="/community/events" element={<Events />} />
        <Route path="/community/events/upcoming" element={<Upcoming />} />
        <Route path="/community/events/past" element={<Past />} />
      
      <Route path="/partners" element={<Partners />} />
      <Route path="/volunteer" element={<Volunteer />} />
<Route path="/requestToJoin" element={<RequestToJoin />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  );
}