import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import LoginForm from "./LoginForm";

const tabStyle = {
  color: "green",
};

function LoginOptions() {
  return (
    <>
      <div
        style={{
          width: `90vw`,
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: `10vh`,
        }}
      >
        <Tabs
          defaultActiveKey="parent"
          id="uncontrolled-tab-example"
          variant="tabs"
        >
          <Tab eventKey="parent" title="Parent login" variant="tabs">
            <LoginForm action="#" />
          </Tab>
          <Tab eventKey="teacher" title="Teacher login" variant="success">
            <LoginForm action="#" />
          </Tab>
          <Tab eventKey="student" title="Student login">
            <LoginForm action="#" />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default LoginOptions;
