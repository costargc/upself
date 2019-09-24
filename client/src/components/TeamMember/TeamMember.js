import React from "react";
import "./TeamMember.css";

function TeamMember(props) {


  return (

    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div class="avatar mx-auto">
        <img
          src={props.Image}
          className="rounded-circle z-depth-1"
          width="150px"
          height="150px"
          alt="logo"
        />
      </div>

      <h5 className="font-weight mt-4 mb-3">{props.Name}</h5>
      <p className="text-uppercase"><strong id="directortitle">{props.Title}</strong></p>
      <p style={{
        marginTop: "-10px",
        marginBottom: "5px",
      }}>
        Fullstack developer
            </p>

      <div id="teamdescription">
        <p >{props.Text}</p>
      </div>

      <div className='d-flex justify-content-center'>


        <div >
          <a className="p-2 fa-lg ins-ic" href={props.Github}>
            <i className="fab fa-github custom-text"></i>
          </a>
        </div>

        <div >
          <a className="p-2 fa-lg ins-ic" href={props.LinkedIn}>
            <i className="fab fa-linkedin custom-text"></i>
          </a>
        </div>

        <div >
          <a className="p-2 fa-lg ins-ic" href={"mailto:"+props.Email}>
            <i className="fas fa-envelope custom-text"></i>
          </a>
        </div>


      </div>





    </div >





  );
}


export default TeamMember;
