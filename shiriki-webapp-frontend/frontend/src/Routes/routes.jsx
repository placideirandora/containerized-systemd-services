import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Verification from "../Pages/Verification";
import Login from "../Pages/Login";
import ComingSoon from "../Pages/ComingSoon";
import MobileLayout from "../Layout/MobileLayout";
import WifiService from "../Components/Services/WifiService";

import Queue from "../Pages/Queue"
import QueueDetails from "../Pages/QueueDetails"
import QueueStatusPage from "../Pages/QueueStatusPage"
import SplashScreen from "../Pages/SplashScreen";
import HomeScreen from "../Pages/HomeScreen";
import Downloads from "../Pages/Downloads";
import Account from "../Pages/Profile/Account";
import CreateProfile from "../Pages/Profile/CreateProfile";
import MyApps from "../Pages/MyApps";
import AllRestaurants from "../Pages/Restaurant/AllRestaurants";
import CardDetail from "../Pages/Profile/CardDetail";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Feedback from "../Pages/Feedback";
import Ticket from "../Pages/Ticket";
import LoadingScreen from "../Pages/LoadingSreen";
import SurveyForm from "../Pages/Survey";
import Entertainment from "../Pages/Entertainment";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" />} />
      <Route path="/splash" element={<LoadingScreen />} />
      <Route path="/welcome" element={<SplashScreen />} />
      <Route path="/services" element={<MobileLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="restaurant" element={<AllRestaurants />} />
        <Route path="restaurant/:id" element={<Restaurant />} />
        <Route path="entertainment" element={<Entertainment />} />
      </Route>

      <Route path="/feedback" element={<Feedback />} />

      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/survey" element={<SurveyForm />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/services/wifi" element={<WifiService />} />


      <Route path="/account" element={<Account />} />
      <Route path="/profile/create" element={<CreateProfile />} />
      <Route path="/profile/card-detail" element={<CardDetail />} />

    
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/apps" element={<MyApps />} />

      <Route path="/login" element={<Login />} />
      <Route path="/wifi-connection" element={<ComingSoon />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/queue" element={<Queue />} />
      <Route path="/queue-details" element={<QueueDetails />} />
      <Route path="/queue-status" element={<QueueStatusPage />} />
    </Routes>
  );
};

export default AppRoutes;
