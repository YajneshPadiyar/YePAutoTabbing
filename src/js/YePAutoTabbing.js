(function ($) {

   $.fn.YePAutoTabbing = function (options) {

      var AutoTabSetup = $.extend({
            ID : [],
            maxLength : []
         }, options);
      return this.each(function () {
         var TotalIds = AutoTabSetup.ID.length;
         var maxLen = AutoTabSetup.maxLength.length;
         AutoTabSetup.maxLength[maxLen] = "";
         if (!(TotalIds && maxLen && TotalIds == maxLen)) {
            console.log("There are no ID parameter passed or maxLength value parameter passed or ID and maxLength Arrary do not match");
         } else {
            for (var i = 0; i < TotalIds; i++) {
               $("#" + AutoTabSetup.ID[i])
               .attr("maxlength", AutoTabSetup.maxLength[i])
               .attr("next-focus", AutoTabSetup.ID[i + 1])
               .bind("keyup", FocusNext)
               .bind("focus", AddFocus)
               .bind("blur", RemoveFocus);
            }
         }
      });
      function AddFocus(e) {
         $(this).addClass("YePAutoFocus");
      }
      function RemoveFocus(e) {
         $(this).removeClass("YePAutoFocus");
      }
      function FocusNext(e) {
         //console.log(e.keyCode);
         var maxLen = $(this).attr("maxlength");
         if ($(this).val().length == Number(maxLen) && e.keyCode != 9 && e.keyCode != 16) {
            $("#" + $(this).attr("next-focus")).focus().addClass("YePAutoFocus");
            $(this).removeClass("YePAutoFocus");
         } else {
            if (!$(this).hasClass("YePAutoFocus")) {
               $(this).addClass("YePAutoFocus");
            }
         }
      }
   }
}
   (jQuery));
