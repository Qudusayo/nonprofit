import React from "react";
import TeamCard from "./TeamCard/TeamCard";

import styles from "./Team.module.scss";

export default function Team() {
  return (
    <section className={styles.Team}>
      <TeamCard
        name="Setter David"
        profileUri="https://i.insider.com/5bf4a9ddd1e844383e765e59?width=1051&format=jpeg"
        title="Cofounder, CEO"
      />
      <TeamCard
        name="Abdulhamid Hassan"
        profileUri="https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2021/03/Abdulhamid-Hassan-Co-founder-Mono-min-1.jpg"
        title="Vice Chairman"
      />
      <TeamCard
        name="Kyla Obrien"
        profileUri="https://miro.medium.com/max/1400/0*d599sTEABwFf8-y8"
        title="Head of Authority"
      />
      <TeamCard
        name="Mathilde Collin"
        profileUri="https://frenchtechjournal.com/content/images/size/w1050/2022/02/-FRrjC4s.jpeg"
        title="Support Executive"
      />
      <TeamCard
        name="Allen Lau"
        profileUri="https://images.squarespace-cdn.com/content/v1/5f1b3f20d14261210b6a0a7e/1614888211126-0GPW6OZCHPMOD3CJFFIY/Allen+Lau+Chief+Executive+Officer+and+Co-Founder+Wattpad.jpg"
        title="Project Manager"
      />
      <TeamCard
        name="Sundar Pichai"
        profileUri="https://www.thestatesman.com/wp-content/uploads/2019/12/000_1MT1V9.jpg"
        title="Accountatnt, Finance"
      />
      <TeamCard
        name="Dr Ayesha Kanna"
        profileUri="https://www.cpaaustralia.com.au/-/jssmedia/project/cpa/intheblack/images/magazine-2018/11-november/dr-ayesha-khanna-1.jpg?mw=768&mh=null&rev=feb6b88d6ed54d7eb9a0b8ac4159ee22"
        title="Cofounder, CEO"
      />
      <TeamCard
        name="Amin Jain"
        profileUri="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/11/04124758/Amit-Jain-1600x900.jpg"
        title="Vice Chairman"
      />
    </section>
  );
}
