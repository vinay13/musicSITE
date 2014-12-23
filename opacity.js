// JavaScript Document

   <script type="text/javascript">
        $(function() {
            $('.imgOpa').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 1.0 }, 800);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 0.3 }, 800);
                   })
			})
        });
    </script>