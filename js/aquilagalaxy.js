(function ($) {
    "use strict";

    $(function () {
        var currentPage = window.location.pathname.split("/").pop() || "index.html";

        $(".dl-menu li").each(function () {
            var link = $(this).children("a").attr("href");
            if (link === currentPage) {
                $(this).addClass("active");
            }
        });

        var $form = $("#ajax_form");
        if ($form.length) {
            $form.on("submit", function (event) {
                event.preventDefault();

                var $messages = $("#form-messages");
                $messages
                    .removeClass("alert-danger")
                    .addClass("alert alert-success")
                    .text("Thank you for reaching out. Your message has been received, and Aquilagalaxy Solutions Ltd will follow up once the official mailbox is finalized.")
                    .show();

                this.reset();
            });
        }
    });
})(jQuery);
