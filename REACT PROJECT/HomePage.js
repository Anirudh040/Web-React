import React, { useState } from 'react';
import './HomePage.css';
import { useHref } from 'react-router-dom';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [meetings, setMeetings] = useState([
    { 
      id: 1,
      title: 'Team Sync Meeting',
      date: '25th October, 2024',
      time: '10:00 AM',
      description: 'A team meeting to discuss ongoing projects and updates.',
      image: 'https://cdn.prod.website-files.com/63062129119620a44791a2eb/63e2e74675de8b1c29acdc2a_team-meeting-games-p-800.jpg'
    },
    {
      id: 2,
      title: 'Client Discussion',
      date: '27th October, 2024',
      time: '2:00 PM',
      description: 'A call to discuss project deliverables with the client.',
      image: 'https://img.freepik.com/free-photo/two-young-businessman-having-successful-meeting-restaurant_158595-5247.jpg'
    },
    {
      id: 3,
      title: 'Project Kickoff',
      date: '29th October, 2024',
      time: '11:00 AM',
      description: 'Kickoff meeting for the new project with stakeholders.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSf3D0aASphOyuPTsn-iz_rx5g11OlK51iA&s://projectriskcoach.com/wp-content/uploads/2021/08/Kickoff-Meeting.jpg'
    },
    {
      id: 4,
      title: 'Weekly Review',
      date: '31st October, 2024',
      time: '3:00 PM',
      description: 'Weekly review of project status and next steps.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdasDkSgBfjs9FqNveWdTJEV5bRPWB1eEuVFLV2UBnbnF7ZVBJto-WFDH6awVRa9CAyY&usqp=CAU'
    },
    {
      id: 5,
      title: 'Retrospective Meeting',
      date: '1st November, 2024',
      time: '4:00 PM',
      description: 'A retrospective meeting to reflect on the past sprint.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlR3q9spueNZmUiSebnsAEenv967UIWNiauA&s'
    }
  ]);

  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    date: '',
    time: '',
    place: '',
    image: ''
  });

  const openModal = (meeting) => {
    setSelectedMeeting(meeting);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMeeting(null);
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  };

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(':');
    const date = new Date();
    date.setHours(hour, minute);
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
  };

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    const formattedDate = formatDate(meetingDetails.date);
    const formattedTime = formatTime(meetingDetails.time);

    const newMeeting = {
      id: meetings.length + 1,
      title: meetingDetails.title,
      date: formattedDate,
      time: formattedTime,
      description: meetingDetails.place,
      image: meetingDetails.image || 'https://via.placeholder.com/150' // Placeholder if no image is provided
    };

    setMeetings([...meetings, newMeeting]);
    alert(`Meeting "${meetingDetails.title}" scheduled on ${formattedDate} at ${formattedTime}`);
    setMeetingDetails({ title: '', date: '', time: '', place: '', image: '' });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Your Online Meeting Scheduler</h1>
      </header>

      {/* Scrollable Meetings Section */}
      <section className="meetings-section">
        <h2>Upcoming Meetings</h2>
        <div className="meetings-scroll">
          {meetings.map((meeting) => (
            <div
              className="meeting-info"
              key={meeting.id}
              onClick={() => openModal(meeting)}
            >
              <img src={meeting.image} alt={meeting.title} />
              <h3>{meeting.title}</h3>
              <p>Date: {meeting.date} | Time: {meeting.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule a Meeting Section */}
      <section className="schedule-meeting-section">
        <h2>Schedule Your Next Meeting</h2>
        <form onSubmit={handleScheduleMeeting}>
          <input
            type="text"
            placeholder="Enter Meeting Title"
            value={meetingDetails.title}
            onChange={(e) => setMeetingDetails({ ...meetingDetails, title: e.target.value })}
            required
          />
          <input
            type="date"
            value={meetingDetails.date}
            onChange={(e) => setMeetingDetails({ ...meetingDetails, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={meetingDetails.time}
            onChange={(e) => setMeetingDetails({ ...meetingDetails, time: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={meetingDetails.place}
            onChange={(e) => setMeetingDetails({ ...meetingDetails, place: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Enter Image URL"
            value={meetingDetails.image}
            onChange={(e) => setMeetingDetails({ ...meetingDetails, image: e.target.value })}
          />
          <button type="submit" className="schedule-button">Schedule Meeting</button>
        </form>
      </section>

      {/* Modal Component */}
      {showModal && selectedMeeting && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedMeeting.title}</h3>
            <p>Date: {selectedMeeting.date}</p>
            <p>Time: {selectedMeeting.time}</p>
            <p>Description: {selectedMeeting.description}</p>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
