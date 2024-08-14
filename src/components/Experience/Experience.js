import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiWorkplace } from "react-icons/si";

function Experience() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              <strong className="purple">Experience</strong>
            </h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(153, 50, 204)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(153, 50, 2043)",
                }}
                date="May 2023 - Present"
                iconStyle={{ background: "rgb(153, 50, 204)", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3 className="vertical-timeline-element-title">
                  Incalus Inc.
                </h3>
                <h4 className="vertical-timeline-element-title">
                  Software Engineer
                </h4>
                <h5 style={{ color: "black" }}>Fremont, CA</h5>
                <h6>
                  • Built REST and gRPC APIs in GoLang for distributed systems,
                  reducing transaction times by 25%.
                </h6>
                <h6>
                  • Developed a Go-based CLI tool for automated infrastructure
                  management, speeding up deployments by 44%.
                </h6>
                <h6>
                  • Created custom Kubernetes Controllers in Golang, improving
                  automation and resource management by 28%.
                </h6>
                <h6>
                  • Automated infrastructure provisioning with Terraform,
                  streamlining setup and reducing time by 37%.
                </h6>
                <h6>
                  • Optimized deployments with Kubernetes, achieving 35% faster
                  speeds and maintaining 99.9% uptime.
                </h6>
                <h6>
                  • Spearheaded ArgoCD-driven GitOps workflows, optimizing
                  deployment efficiency by 50%.{" "}
                </h6>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(153, 50, 204)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(153, 50, 204)",
                }}
                date="December 2021 - April 2022"
                iconStyle={{ background: "rgb(153, 50, 204)", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3 className="vertical-timeline-element-title">
                  Mckinley Rice
                </h3>
                <h4 className="vertical-timeline-element-title">
                  Software Developer
                </h4>
                <h5 style={{ color: "black" }}>Pune, India</h5>
                <h6>
                  • Architected a Go SDK for RESTful API access to Blockchain
                  smart contracts, handling 1,000+ transactions/sec.
                </h6>
                <h6>
                  • Optimized Go app performance by 40% through advanced
                  concurrency techniques and code refinements.
                </h6>
                <h6>
                  • Reduced MTTR by 63% through log monitoring and Python
                  automation scripts to prevent outages.
                </h6>
                <h6>
                  • Implemented Nginx Ingress Controller in Kubernetes, refining
                  routing and enhancing app scalability by 20%.
                </h6>
                <h6>
                  •Engineered CI/CD pipelines with GitLab CI/CD and GitHub
                  Actions, accelerating deployment cycles by 46% .
                </h6>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(153, 50, 204)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(153, 50, 204)",
                }}
                date="November 2020 - December 2021"
                iconStyle={{ background: "rgb(153, 50, 204)", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3 className="vertical-timeline-element-title">Cognizant </h3>
                <h4 className="vertical-timeline-element-title">
                  Software Developer{" "}
                </h4>
                <h5 style={{ color: "black" }}>Pune, India</h5>
                <h6>
                  • Designed a Go microservices architecture, enhancing system
                  modularity by 50%.
                </h6>
                <h6>
                  • Developed automation tools in Python for deployment and
                  system management, reducing downtime by 60%.
                </h6>
                <h6>
                  • Reduced deployment time of new microservices by 45% through
                  the implementation of testing and deployment processes using
                  Jenkins, Git, SonarQube, AWS ECR, AWS ECS, and Docker.
                </h6>
                <h6>
                  • Implemented infrastructure as code with Terraform and AWS
                  CloudFormation, leading to a 43% reduction in manual effort.
                </h6>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
