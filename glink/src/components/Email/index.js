import React from "react";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Paper, Grid, Button, CssBaseline } from "@material-ui/core";
import "./index.css";
import { isMobile } from "../index";
import EmailInstructions from "./EmailInstructions";

export default class EmailLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageId: null,
      submitAction: false,
    };
  }

  getSharableLink = () => {
    const { messageId } = this.state;
    const sharableLink = messageId
      ? `https://mail.google.com/mail/u/0/#search/rfc822msgid%3A${encodeURIComponent(
          messageId.trim()
        )}`
      : null;

    return sharableLink;
  };

  validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email =
        "Message ID: Email body > 3-dot Menu > Show Original > Copy Message-ID";
    }
    return errors;
  };

  onSubmit = async (values) => {
    console.log(values);
  };

  copyMailText = () => {
    let mailText = document.getElementById("generatedURL").value;

    if (mailText !== "") {
      document.getElementById("generatedURL").select();
      document.execCommand("Copy");
      this.setState({ copySuccess: "Copied!" });
    }
  };

  handleChange = (event) => {
    const msgId = event.target.value;
    const { messageId } = this.state;

    if (msgId !== messageId) {
      this.setState({ messageId: msgId.trim(), submitAction: false });
    }
  };

  openMailLink = () => {
    let mailText = document.getElementById("generatedURL").value;

    if (!!mailText) {
      window.open(mailText);
    }
  };

  render() {
    const { messageId, submitAction } = this.state;
    const isMobileValue = isMobile();

    return (
      <div className={`${isMobileValue ? "columnFlex" : "rowFlex"}`}>
        <div className="emailPage">
          <CssBaseline />
          <Form
            onSubmit={() => {}}
            validate={this.validate}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form
                onSubmit={handleSubmit}
                onChange={(props) => {
                  this.handleChange(props);
                }}
              >
                <Paper
                  style={{
                    padding: 16,
                    width: isMobileValue ? "" : "600px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid container item alignItems="flex-start" xs={12}>
                      <Field
                        name="email"
                        fullWidth
                        required
                        component={TextField}
                        type="email"
                        label="Message ID"
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid className="flexNeed" item alignItems="flex-end">
                      <Button
                        onClick={() => {
                          const { email: messageId } = values;
                          this.setState({
                            messageId,
                            submitAction: true,
                            copySuccess: "",
                          });
                        }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting || pristine}
                      >
                        Submit
                      </Button>
                      <Button
                        onClick={() => {
                          form.reset();
                          this.setState({ submitAction: false });
                        }}
                        variant="contained"
                        className="padding-left-lg"
                        color="primary"
                        type="submit"
                        disabled={!messageId || pristine}
                        style={{
                          marginLeft: isMobileValue ? "10px" : "15px",
                        }}
                      >
                        Clear
                      </Button>
                    </Grid>
                    {/* Instructions show */}
                    {!submitAction && !isMobileValue && (
                      <Grid
                        container
                        spacing={2}
                        style={{ padding: 8, fontFamily: "monospace" }}
                        className="color-darkgray"
                      >
                        <span className="italic padding-left-10 user-instructions">
                          Please follow the Instructions below &nbsp;
                          <span role="img" aria-label="arrow">
                            👇
                          </span>
                        </span>
                        <span>
                          <ul
                            style={{
                              listStyleType: "disc",
                            }}
                          >
                            <li>It works only for Gmail Free/Premium Users.</li>
                            <li>
                              Gmail Sharable Link works only if another person
                              there in Mail thread.
                            </li>
                            <li>This page will not store any of your data.</li>
                          </ul>
                        </span>
                      </Grid>
                    )}
                    {/* Response Stage */}
                    {messageId && submitAction && !pristine && (
                      <Grid container spacing={2} style={{ padding: 8 }}>
                        <Grid item alignItems="flex-start" xs={12}>
                          <Field
                            name="result"
                            id="generatedURL"
                            fullWidth
                            component={TextField}
                            type="text"
                            defaultValue={this.getSharableLink()}
                            label="Sharable Link"
                            autoComplete="off"
                          />
                        </Grid>
                        <Grid item alignItems="flex-end">
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={this.copyMailText}
                          >
                            Copy
                          </Button>
                          {!isMobileValue && (
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              style={{
                                marginLeft: isMobileValue ? "10px" : "15px",
                              }}
                              onClick={this.openMailLink}
                            >
                              Open Mail Link
                            </Button>
                          )}
                          {this.state.copySuccess ? (
                            <div
                              className="left-padding"
                              style={{ color: "green" }}
                            >
                              Copied!
                            </div>
                          ) : null}
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              </form>
            )}
          />
        </div>
        <EmailInstructions />
      </div>
    );
  }
}
