import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Snackbar,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
} from "@mui/material";
import { Image } from "primereact/image";
import Header from "../Components/Header";
import BottomNavBar from "../Components/BottomNavBar";

const QueueStatusPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, queueInfo } = location.state;

  // Calculate max waiting time based on people in front, capped at 25 minutes
  const estimatedTimePerPerson = 2; // Estimated wait time per person, in minutes
  const maxWaitingTime = Math.min(queueInfo.peopleInFront * estimatedTimePerPerson, 25);
  const [remainingTime, setRemainingTime] = useState(maxWaitingTime); // Track the countdown in whole minutes
  const [progress, setProgress] = useState(0);
  const [notificationOpen, setNotificationOpen] = useState(false);

  // Feedback modal state
  const [openFeedback, setOpenFeedback] = useState(false);
  const [rating, setRating] = useState(null); // Rating state
  const [comment, setComment] = useState(""); // Comment state
  const [formError, setFormError] = useState(false); // Error state for validation

  const goBack = () => {
    navigate(-1);
  };

  const getTicket = () => {
    navigate("/ticket");
  };

  useEffect(() => {
    const totalDuration = maxWaitingTime * 60 * 1000;
    const minuteInterval = 60 * 1000;
    const progressInterval = totalDuration / 100;

    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressTimer);
          setNotificationOpen(true);
          setOpenFeedback(true); // Open the feedback modal when time is up
          return 100;
        }
        return oldProgress + 1;
      });
    }, progressInterval);

    const countdownTimer = setInterval(() => {
      setRemainingTime((oldTime) => {
        if (oldTime <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return oldTime - 1;
      });
    }, minuteInterval);

    return () => {
      clearInterval(progressTimer);
      clearInterval(countdownTimer);
    };
  }, [maxWaitingTime]);

  const handleFeedbackSubmit = () => {
    if (rating === null) {
      setFormError(true);
      return; // Do not submit if no rating is selected
    }
    setFormError(false);
    console.log("Feedback submitted:", { rating, comment });
    setOpenFeedback(false); // Close the feedback modal
  };

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Retrieve tickets from localStorage
    const storedTickets = JSON.parse(localStorage.getItem("ticketData")) || [];
    setTickets(storedTickets);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex flex-col">
      <Header />

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Image
          src="https://cdn.prod.website-files.com/62861fb0faf45bf95f09d5c2/62d8fbe73924162cd32a62a8_intro-balador.svg"
          alt="Queue Icon"
          className="rounded-lg"
          style={{ width: "250px", height: "auto", margin: "0 auto" }}
        />
      </Box>

      <Card
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 4,
          p: 3,
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.8rem",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
            }}
          >
            {service?.name} Queue Status
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "#333",
              textAlign: "center",
              mb: 2,
            }}
          >
            People in front of you: <strong>{queueInfo.peopleInFront}</strong>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "#1976d2",
              textAlign: "center",
              fontWeight: "medium",
              mb: 2,
            }}
          >
            Estimated waiting time: <strong>{remainingTime} minutes</strong>
          </Typography>

          {/* Progress Bar */}
          <Box sx={{ width: "100%", mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 10,
                borderRadius: 5,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "linear-gradient(to right, #4caf50, #81c784)",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
              gap: 2,
            }}
          >
            <Button
             className="rounded-[1.5rem]"
              variant="contained"
              onClick={goBack}
              sx={{
                backgroundColor: "#d32f2f",
                "&:hover": { backgroundColor: "#b71c1c" },
                flex: 1,
              }}
            >
              Leave Queue
            </Button>

            <Button
            className="rounded-[1.5rem]"
              variant="contained"
              onClick={getTicket}
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
                flex: 1,
              }}
            >
              Get Ticket
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Notification Snackbar */}
      <Snackbar
        open={notificationOpen}
        onClose={() => setNotificationOpen(false)}
        message="You are now free to get service! Your estimated wait time has finished."
        autoHideDuration={null}
        action={
          <Button
            color="secondary"
            size="small"
            onClick={() => setNotificationOpen(false)}
          >
            Dismiss
          </Button>
        }
      />

      {/* Feedback Modal */}
      <Dialog open={openFeedback} onClose={() => setOpenFeedback(false)}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            We would love to hear your feedback!
          </Typography>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Rate your experience:
            </Typography>
            <Rating
              value={rating}
              onChange={(_, newValue) => setRating(newValue)}
              size="large"
              sx={{ mb: 2 }}
            />
            {formError && (
              <Typography color="error" variant="body2">
                Please select a rating before submitting.
              </Typography>
            )}
          </Box>

          <TextField
            label="Additional Comments"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFeedback(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFeedbackSubmit} color="primary">
            Submit Feedback
          </Button>
        </DialogActions>
      </Dialog>

      <Typography
        variant="h5"
        sx={{
          fontSize: "1.5rem",
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          mt: 4,
        }}
      >
        Generated Tickets
      </Typography>

      {tickets.length > 0 ? (
        <Box sx={{ mt: 2 }}>
          {tickets.map((ticket, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 600,
                mx: "auto",
                mt: 2,
                p: 2,
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <CardContent>
                <Typography style={{textAlign:'start'}} variant="h6" sx={{ fontWeight: "bold" }}>
                  Ticket Number: {ticket.ticketNumber}
                </Typography>
                <Typography style={{textAlign:'start'}}  variant="body2" sx={{ mt: 1 }}>
                  Waiting Time: {ticket.waitingTime}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", mt: 2, color: "#666" }}
        >
          No tickets found.
        </Typography>
      )}

      <BottomNavBar />
    </div>
  );
};

export default QueueStatusPage;
