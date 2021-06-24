import React from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import "./Team.css";



function Team() {
  return (

    <div className="container">

      <section className="team-section text-center">

        <h1 className="h1-responsive my-5"
          style={{
            paddingTop: "50px",
            paddingBottom: "50px"
          }}>Meet our Team</h1>

        <div className="row justify-content-md-center">

          <TeamMember
            Name={"Emily Baumgartner"}
            // Text={"Physics grad with a passion for math and machine learning. Also works in the Financial Industry managing technology for eTrading, API Dev, data minning and market models."}
            Title={"Lead Web Developer"}
            Image={require("../../assets/images/team/team4.jpg")}
            Github={"https://github.com/emilybaum"}
            LinkedIn={"https://www.linkedin.com/in/emilybaum/"}
            Email={"emily@upself.io"}
          />

          <TeamMember
            Name={"Rodrigo Costa"}
            // Text={"Physics grad with a passion for math and machine learning. Also works in the Financial Industry managing technology for eTrading, API Dev, data minning and market models."}
            Title={"Data Scientist"}
            Image={require("../../assets/images/team/team1.jpg")}
            Github={"http://github.com/costargc"}
            LinkedIn={"https://www.linkedin.com/in/costargc/en"}
            Email={"costa@upself.io"}
          />

          <TeamMember
            Name={"Esther Lee"}
            // Text={"Physics grad with a passion for math and machine learning. Also works in the Financial Industry managing technology for eTrading, API Dev, data minning and market models."}
            Title={"Lead Icecream Lover"}
            Image={require("../../assets/images/team/team3.jpg")}
            Github={"https://github.com/esdalee"}
            LinkedIn={"https://www.linkedin.com/in/estherlee321/"}
            Email={"esther@upself.io"}
          />

          <TeamMember
            Name={"Matt Gilliland"}
            // Text={"Physics grad with a passion for math and machine learning. Also works in the Financial Industry managing technology for eTrading, API Dev, data minning and market models."}
            Title={"Lead Software Engineer"}
            Image={require("../../assets/images/team/team2.jpg")}
            Github={"https://github.com/mgilliland23"}
            LinkedIn={"https://www.linkedin.com/in/matthew-gilliland-77695595/"}
            Email={"matt@upself.io"}
          />


        </div>
      </section>

    </div>







  );
}

export default Team;
