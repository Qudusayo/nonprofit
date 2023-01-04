import React from "react";
import DonationDisplayCard from "../components/DonationDisplayCard/DonationDisplayCard";
import Blog from "../components/Blog/Blog";
import Event from "../components/Events/Event";

export default function WhatWeDo() {
  return (
    <div>
      <h2>What We do</h2>

      <DonationDisplayCard />
      <Blog />
      <Event />
    </div>
  );
}
