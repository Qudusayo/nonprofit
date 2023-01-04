import React from "react";
import DonationDisplayCard from "../../components/DonationDisplayCard/DonationDisplayCard";
import Blog from "../../components/Blog/Blog";
import Event from "../../components/Events/Event";

export default function Media() {
  return (
    <div>
      <h2>Media</h2>
      <Blog />
      <Event />
    </div>
  );
}
