var ensureRepeat = function() {
   var $repeat_btn = $('button[data-id="repeat"]');
   if ($repeat_btn.length == 1 && $repeat_btn.attr('value') == 'NO_REPEAT') {
     var originalValue = $repeat_btn.attr('value');
     var count = 0;
     while($repeat_btn.attr('value') != 'LIST_REPEAT' && count < 3) {
       $repeat_btn.click();
       count++;
     }
     if ($repeat_btn.attr('value') != 'LIST_REPEAT') {
       // if didn't succeed, return to original value
       count = 0;
       while($repeat_btn.attr('value') != originalValue && count < 3) {
         $repeat_btn.click();
         count++;
       }
     }
   }
}
$(window).bind('hashchange', ensureRepeat);
$(document).ready(ensureRepeat);
