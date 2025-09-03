import './Settings.css'
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    useEffect(() => {
    if (!user) return;                 
      setUsername(user.username || "");
      setEmail(user.email || "");
    }, [user]);

    if (!user) {
    return <Navigate to="/login" replace />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        dispatch({ type: "UPDATE_START" });
        if (!user?._id) {
         dispatch({ type: "UPDATE_FAILURE" });
         return;
        }
        const updatedUser = {
          userId: user._id};
          if (username && username !== user.username) updatedUser.username = username;
          if (email && email !== user.email) updatedUser.email = email;
          if (password) updatedUser.password = password;
        if (file) {
          const data = new FormData();
          const filename = Date.now() + "_" + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePic = filename;
          try {
          await axios.post("http://localhost:5000/server/upload", data, {
             headers: { "Content-Type": "multipart/form-data" },
           });
          } catch (err) {
            console.error("Upload failed", err);
            dispatch({ type: "UPDATE_FAILURE" });
            return;
          }
        }
        try {
          const res = await axios.put("http://localhost:5000/server/users/" + user._id, updatedUser);
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
          setSuccess(true);
          setFile(null);
          setPassword("");
        } catch (err) {
          console.error("Update failed", err);
          dispatch({ type: "UPDATE_FAILURE" });
        }
      };
  const handleDelete = async () => {
        if (!user?._id) return;
        if (!window.confirm("Are you sure you want to delete your account?")) return;

        try {
          await axios.delete("http://localhost:5000/server/users/" + user._id,{
            data: {
            userId: user._id,
            username: user.username,
          },
          });
          dispatch({ type: "LOGOUT" });
          localStorage.removeItem("user");
          window.location.replace("/");
        } catch (err) {
          console.error("Delete failed", err?.response?.data || err.message);
          alert("Something went wrong deleting the account");
        }
  };    

   return (
     <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {file || user.profilePic ? (
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : PF + user.profilePic
                }
                alt="profile"
              />
            ) : null}
          <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
}