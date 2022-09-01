import React from "react";
import NAVbar from "./NAVbar";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutUs() {
  return (
    <>
      <NAVbar/>
      <Container
        fluid
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "500px",
          marginTop: "30px",
          background: "wheat",
          padding: "25px 50px",
          borderRadius: "10px",
          // overflow: "auto",
        }}
      >
        <div className="scroll-marquee">
          <marquee
            direction="up"
            scrollamount="5"
            scrolldelay="20"
            behaviour="scroll"
            onmouseover="this.stop();"
            onmouseout="this.start();"
            height="450"
          >
            <Row>
              <Col
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>{" "}
                About Us
              </Col>
            </Row>
            <p></p>
            <p style={{ fontSize: "13px", textAlign: "justify" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
              </svg>{" "}
              This is the official website of The University Grants Commission.
              This website is solely owned by The University Grants Commission
              having its Office at Bahadurshah Zafar Marg, New Delhi-110002. All
              the information about the University Grants Commission and its
              Policies, Programmes, Rules, Regulations on the web site is on "as
              is" basis without guarantees or warranties of any kind, express or
              implied. The information available on our web site is subject to
              change without any notice. Visitors to the site are well advised
              to contact the office of the University Grants Commission for up
              to date information on any matter before taking a final decision
              on any matter connected with Policies, Programmes, Rules,
              Regulations of the University Grants Commission.
              <p></p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                </svg>{" "}
                While every effort is being made to update the information
                periodically, the University Grants Commission does not
                undertake any responsibility that the site reflects the updated
                information on any matter at any point of time. All the contents
                of this Site are only for general information or use of the
                public. They do not constitute advice and should not be relied
                upon in making (or refraining from making) any decision. The
                University Grants Commission neither promises nor guarantees its
                correctness/completeness/accuracy/ reliability. The University
                Grants Commission hereby excludes any warranty, express or
                implied, as to the quality, accuracy, timeliness, completeness,
                performance, fitness for any particular purpose of the Site or
                any of its contents, including (but not limited) to any
                financial tools contained within the Site.
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                </svg>{" "}
                The University Grants Commission hereby disclaims any and all
                liability to any individual/organization/person for any loss or
                damage caused to them for any action taken on the basis of the
                general information available on the web site which may be due
                to omission, clerical errors or for any other reason whatsoever.
                While all efforts have been taken to make this web site as
                authentic as possible, please refer to the print versions,
                notified Gazette copies of Acts/Rules/Regulations for authentic
                version or for use before the University Grants Commission or
                any other authority. The University Grants Commission will not
                be responsible for any loss to any person/ entity caused by any
                shortcoming, defect or inaccuracy inadvertently or otherwise
                crept in this web site. The University Grants Commission will
                not be liable for any damages (including, without limitation,
                damages for loss of business projects, or loss of profits)
                arising in contract, tort or otherwise from the use of or
                inability to use the Site, or any of its contents, or from any
                action taken (or refrained from being taken) as a result of
                using the Site or any such contents.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
              </svg>{" "}
              The University Grants Commission makes no warranty that the
              contents of the Site are free from infection by viruses or
              anything else which has contaminating or destructive properties.
              Users are not permitted to change, modify or prepare derivative
              works from the content of this site. Any discrepancy may be
              brought to the notice of the University Grants Commission at
              webmaster.ugc.help@gmail.com.
            </p>
            <p style={{ fontSize: "13px", textAlign: "justify" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
              </svg>{" "}
              UGC-Checked Website does not automatically capture any specific
              personal information from you, (like name, phone number or e-mail
              address), that allows us to identify you individually. If the UGC
              Website requests you to provide personal information, you will be
              informed for the particular purposes for which the information is
              gathered and adequate security measures will be taken to protect
              your personal information. We do not sell or share any personally
              identifiable information volunteered on the UGC Website to any
              third party (public/private). All efforts will be made to protect
              any information provided to this website from loss, misuse,
              unauthorized access or disclosure, alteration or destruction. We
              gather certain information about the User, such as Internet
              protocol (IP) addresses, domain name, browser type, operating
              system, the date and time of the visit and the pages visited. We
              make no attempt to link these addresses with the identity of
              individuals visiting our site unless an attempt to damage the site
              has been detected.
            </p>
          </marquee>
        </div>
      </Container>
    </>
  );
}
