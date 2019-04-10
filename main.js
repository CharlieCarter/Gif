<script type="text/javascript">
$(window).load(function() {
    $('.preload').attr('src', function(i,a){
        $(this).attr('src','').removeClass('preload').attr('src',a);
    });
    alert("Active")
});
</script>
