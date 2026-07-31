import { useState } from "react";
import axios from "axios";
const CreateMeeting = () => {
  
  const[title,settitle] = useState("");
  const[description , setdiscription] = useState("");
  const[duration , setduration] = useState("");
  const[date , setdate] = useState("");
  const[time , settime] = useState("");
  const[admin , setadmin] = useState("");
  const[meetingtype , setmeetingtype] = useState("online");

  const handlesubmit = async (e) => {
    e.preventDefault() ;
    const meeting = {
      title : title ,
      date : date,
      discription : description,
      admin: admin,
      // meetingtype: meetingtype,
      time: time,
      duration: duration
    };
    await axios.post("http://localhost:3000/meetings" , meeting)
    settitle("");
  setdiscription("");
  setdate("");
  settime("");
  setduration("");
  setadmin("");
  }
  const handleReset = () => {
  settitle("");
  setdiscription("");
  setdate("");
  settime("");
  setduration("");
  setadmin("");
  setmeetingtype("online");
};
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-center mb-4">
            Schedule Meeting
          </h2>

          <form onSubmit={handlesubmit}>

            <div className="mb-3">
              <label className="form-label">
                Meeting Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter meeting title"
                value ={title}
                onChange={(e) => settitle(e.target.value)} 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter meeting description"
                value={description}
                onChange={(e) => setdiscription(e.target.value)}
              ></textarea>
            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Time
                </label>
                <input
                  type="time"
                  className="form-control"
                   value={time}
                  onChange={(e) => settime(e.target.value)}
                />
              </div>

            </div>

            <div className="mb-3">
              <label className="form-label">
                Duration (Minutes)
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="60"
                 value={duration}
                  onChange={(e) => setduration(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Admin
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter admin's name"
                 value={admin}
                  onChange={(e) => setadmin(e.target.value)}
              />
            </div>

            {/* <div className="mb-4">
              <label className="form-label">
                Meeting Type
              </label>
               

              <select className="form-select"
              value={meetingtype}
                  onChange={(e) => setmeetingtype(e.target.value)}>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
                
              </select> */}
               
            {/* </div> */}

            <button
              type="submit"
              className="btn btn-primary me-2"
            >
              Save Meeting
            </button>

            <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
>
  Reset
</button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default CreateMeeting;