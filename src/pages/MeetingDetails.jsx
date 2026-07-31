import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MeetingDetails = () => {
  const { id } = useParams();

  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    fetchMeeting();
  }, []);

  const fetchMeeting = async () => {
    const response = await axios.get(
      `http://localhost:3000/meetings/${id}`
    );

    setMeeting(response.data);
  };

  if (!meeting) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2>{meeting.title}</h2>

          <hr />

          <p>
            <strong>Description:</strong> {meeting.description}
          </p>

          <p>
            <strong>Date:</strong> {meeting.date}
          </p>

          <p>
            <strong>Time:</strong> {meeting.time}
          </p>

          <p>
            <strong>Duration:</strong> {meeting.duration} Minutes
          </p>

          <p>
            <strong>Admin:</strong> {meeting.admin}
          </p>

          <p>
            <strong>Meeting Type:</strong> {meeting.meetingtype}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;