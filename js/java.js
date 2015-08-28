<script type="text/javascript">
        jQuery(function($){
            $('.accordionLister dd').hide();
            $(function(){
                $('.showExcerpt').on('click', function() {
                    if($(this).parent().find('dd').css('display') == 'none'){
                        $(this).parent().find('dd').show();
                    } else {
                        $(this).parent().find('dd').hide();
                    }
              });
            });
 
        });
        </script>
