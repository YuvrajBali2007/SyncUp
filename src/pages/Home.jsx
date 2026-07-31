import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
   const response = await axios.get(
  "https://6a6c37049939b347ccce8b71.mockapi.io/api/v1/meetings"
);

setMeetings(response.data);


    } catch (error) {
      console.log(error);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const upcomingMeetings = meetings.filter((meeting) => {
    return meeting.date >= today;
  });

  const sortMeetings = [...upcomingMeetings];

  sortMeetings.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const nextMeeting = sortMeetings[0];

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
      }}
    >
      <div className="border-bottom p-3">
        <h1
          className="fw-bold text-center"
          style={{ color: "#0f172a" }}
        >
          SyncUp
        </h1>
      </div>

      <div className="row" style={{ minHeight: "90vh" }}>
        <div className="col-3 border-end p-3">
          <div className="d-flex flex-column gap-3 mt-4">
            <Link
              to="/meetings"
              className="btn btn-primary w-100 py-3"
              style={{
                backgroundColor: "#334155",
                borderColor: "#334155",
                color: "white",
              }}
            >
              View Meetings
            </Link>

            <Link
              to="/create-meeting"
              className="btn btn-primary w-100 py-3"
              style={{
                backgroundColor: "#334155",
                borderColor: "#334155",
                color: "white",
              }}
            >
              Schedule Meeting
            </Link>
          </div>
        </div>

        <div className="col-9 p-5">
          <h2
            className="mb-4"
            style={{ color: "#1e293b" }}
          >
            Dashboard
          </h2>

          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h5>Total Meetings</h5>
                  <h2>{meetings.length}</h2>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h5>Upcoming Meetings</h5>
                  <h2>{upcomingMeetings.length}</h2>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h5>Next Meeting</h5>

                  {nextMeeting ? (
                    <>
                      <h6>{nextMeeting.title}</h6>
                      <h6>{nextMeeting.date}</h6>
                    </>
                  ) : (
                    <h6>No Upcoming Meeting</h6>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 style={{ color: "#1e293b" }}>
              All your meetings in one place.
            </h3>

            <p>
              Schedule, organize and manage your meetings efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;