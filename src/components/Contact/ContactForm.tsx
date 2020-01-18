import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import styled from "styled-components";
import { Button } from "../../shared/styles";
import useContactForm from "./ContactHooks";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#f1a36c"
    },
    type: "dark"
  }
});

const ContactButton = styled(Button)`
  background: linear-gradient(45deg, #d48a57, #fdbf92);
  margin: 1.5rem 0 0 auto;

  > div {
    color: #f1a36c;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > div:not(:last-of-type)": {
        flex: "1 1 calc(33.3% - 1rem)",
        margin: "1rem 1rem 1rem 0",
        maxWidth: "300px",
        minWidth: "200px"
      },
      "& > div:nth-of-type(4)": {
        flex: "1 1 100%",
        margin: "1rem 0"
      }
    }
  })
);

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const ContactForm = () => {
  const classes = useStyles();
  const onContact = () => {
    alert(
      "Form submission capability is coming soon. In the meantime, you can send me an email at drew.moody@me.com"
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useContactForm(onContact);

  return (
    <ThemeProvider theme={darkTheme}>
      <FormWrapper className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name || ""}
          required={true}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email || ""}
          required={true}
        />
        <TextField
          label="Phone"
          type="text"
          name="phone"
          onChange={handleInputChange}
          value={inputs.phone || ""}
        />
        <TextField
          id="message-container"
          label="Message"
          type="text"
          name="message"
          multiline={true}
          rows="4"
          placeholder="Enter your message here"
          variant="filled"
          onChange={handleInputChange}
          value={inputs.message || ""}
        />

        <ContactButton type="submit">
          <div style={{ color: "#f1a36c" }}>Contact</div>
        </ContactButton>
      </FormWrapper>
    </ThemeProvider>
  );
};

export default ContactForm;
