<script >
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  name: "Login",
  props: {
    msg: String
  }
})
// eslint-disable-next-line
export default class Login extends Vue {
  navigate() {
    this.$router.push("/home");
  }
  // Client ID and API key from the Developer Console

  CLIENT_ID =
    "870917415471-q0tefr9o205uhippvdchna6srp5heu2c.apps.googleusercontent.com";
  API_KEY = "AIzaSyDy5c_Ie7ueg6l1AQCQbPIqLtA_ic_u5bw";

  // Array of API discovery doc URLs for APIs used by the quickstart
  DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
  ];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

  authorizeButton = document.getElementById("authorize_button");
  signoutButton = document.getElementById("signout_button");

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  handleClientLoad() {
    gapi.load("client:auth2", initClient);
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  initClient() {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      .then(
        function() {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        },
        function(error) {
          appendPre(JSON.stringify(error, null, 2));
        }
      );
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
      listFiles();
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = "none";
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
  appendPre(message) {
    var pre = document.getElementById("content");
    var textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
  }

  /**
   * Print files.
   */
  listFiles() {
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name)"
      })
      .then(function(response) {
        appendPre("Files:");
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            appendPre(file.name + " (" + file.id + ")");
          }
        } else {
          appendPre("No files found.");
        }
      });
  }
}
</script>
<template>
  <div class>
    <p>Drive API Quickstart</p>
    <button id="authorize_button" type="button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>
    <!--Add buttons to initiate auth sequence and sign out-->
  </div>
</template>





<!-- Add "scoped" attribute to limit CSS to this component only -->
  