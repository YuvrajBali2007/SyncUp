import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    const response = await axios.get("http://localhost:3000/meetings");
    setMeetings(response.data);
  };

  const filteredMeetings = meetings.filter((meeting) =>
    meeting.title.toLowerCase().includes(search.toLowerCase())
  );
  
   const deleteMeeting = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meeting?"
    );

    if (!confirmDelete) {
      return;
    }

    await axios.delete(`http://localhost:3000/meetings/${id}`);

    fetchMeetings();
  };

  


  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Meetings</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by meeting title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredMeetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        filteredMeetings.map((meeting) => (
          <div className="card mb-3" key={meeting.id}>
            <div className="card-body">
              <h4 className="card-title">{meeting.title}</h4>

              <p className="mb-1">
                <strong>Date:</strong> {meeting.date}
              </p>

              <p className="mb-3">
                <strong>Time:</strong> {meeting.time}
              </p>

              <Link
                to={`/meeting/${meeting.id}`}
                className="btn btn-primary btn-sm"
              >
                View Details
              </Link>
              <button className = "btn btn-danger btn-sm " 
              onClick ={() => deleteMeeting(meeting.id)} > 
              Delete </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Meetings;