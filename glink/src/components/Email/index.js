import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper, Grid, Button, CssBaseline } from '@material-ui/core';

export default class EmailLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageId: null,
        };
    }

    getSharableLink = () => {
        const { messageId } = this.state;
        const sharableLink = messageId
            ? `https://mail.google.com/mail/u/0/#search/rfc822msgid%3A${encodeURIComponent(messageId.trim())}`
            : null;

        return sharableLink;
    };

    validate = values => {
        const errors = {};
        debugger;
        if (!values.email) {
            errors.email = 'Message ID: Email body > 3-dot Menu > Show Original > Copy Message-ID';
        }
        return errors;
    };

    render() {
        const { messageId } = this.state;

        return (
            <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
                <CssBaseline />
                <Form
                    onSubmit={() => {
                        return null;
                    }}
                    validate={this.validate}
                    render={({ handleSubmit, reset, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <Paper style={{ padding: 16 }}>
                                <Grid container spacing={2}>
                                    <Grid item alignItems="flex-start" xs={12}>
                                        <Field
                                            name="email"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="email"
                                            value="imsanfsa"
                                            label="Message ID"
                                        />
                                    </Grid>
                                    <Grid item alignItems="flex-end" style={{ marginTop: 16 }}>
                                        <Button
                                            onClick={() => {
                                                const { email: messageId } = values;
                                                this.setState({ messageId });
                                            }}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={submitting}>
                                            Submit
                                        </Button>
                                    </Grid>
                                    {messageId && (
                                        <Grid container spacing={2} style={{ padding: 8 }}>
                                            <Grid item alignItems="flex-start" xs={12}>
                                                <Field
                                                    name="result"
                                                    fullWidth
                                                    component={TextField}
                                                    type="text"
                                                    initialValue={this.getSharableLink()}
                                                    label="Sharable Link"
                                                />
                                            </Grid>
                                            <Grid item alignItems="flex-end" style={{ marginTop: 16 }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    disabled={submitting}>
                                                    Copy
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                            </Paper>
                            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                        </form>
                    )}
                />
            </div>
        );
    }
}
