<template>
<div>
    <div id="buttonDiv"></div> 
    <div id="g_id_onload"
     data-client_id="263260257159-7fchvnohq7u48j0lq7ig4cjjo9qr3l18.apps.googleusercontent.com"
     data-callback="handleCredentialResponse">
</div>
</div>
</template>

<script>
  export default {
    create() {
        window.addEventListener("load", this.onWindowLoad);
    },
    data: () => ({
    //   ......data of your component
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://accounts.google.com/gsi/client')
      recaptchaScript.setAttribute('async', 'true')
      recaptchaScript.setAttribute('defer', 'true')
      document.head.appendChild(recaptchaScript)

      
    },
    methods: {
        onWindowLoad() {
          google.accounts.id.initialize({
            client_id: "263260257159-7fchvnohq7u48j0lq7ig4cjjo9qr3l18.apps.googleusercontent.com",
            callback: handleCredentialResponse()
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        },

    handleCredentialResponse(response){
          console.log("Encoded JWT ID token: " + response.credential);
        }


    }
  }
</script>