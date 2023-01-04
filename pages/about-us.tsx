import React from "react";
import DonationDisplayCard from "../components/DonationDisplayCard/DonationDisplayCard";
import Blog from "../components/Blog/Blog";
import Event from "../components/Events/Event";
import Team from "../components/Team/Team";

export default function AboutUs() {
  return (
    <div>
      <h2>About - Us</h2>
      <Team />
      <DonationDisplayCard />
      <Blog />
      <Event />
    </div>
  );
}
