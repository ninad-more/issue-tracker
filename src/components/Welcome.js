import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  heading: {
    color: "#4CAF50",
    fontSize: "2.5rem",
    margin: "0 0 20px 0",
  },
  message: {
    fontSize: "1.25rem",
    color: "#333",
    margin: "0 0 20px 0",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#4CAF50",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "20px",
    transition: "background-color 0.3s",
  },
};

const Welcome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Issue Tracker!</h1>
    </div>
  );
};

export default Welcome;
