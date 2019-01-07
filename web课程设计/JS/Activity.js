function addListener() {
    var btn = document.querySelector('.Heart_2_');
    btn.addEventListener("click", restart, false);
}

function restart() {
    var container = document.querySelector('.Layer_1');
    var newContainer = container.cloneNode(true);
    container.parentNode.replaceChild(newContainer, container);
    addListener();
}

addListener();

var x = $(window);
var e = $("#shape");

$("html,body").ready(function () {
    var scrollbar = x.scrollTop();
    var isClick = 0;

    (scrollbar <= 0) ? ($("#shape").hide()) : ($("#shape").show());

    $(window).scroll(function () {
        scrollbar = x.scrollTop();
        (scrollbar <= 0) ? ($("#shape").hide()) : ($("#shape").show());
    })

    $("#shape").hover(
		function () {
		    $(".shapeColor").show();
		},

		function () {
		    $(".shapeColor").hide();
		}
	)

    $(".shapeColor").click(
		function () {
		    $(".shapeFly").show();
		    $("html,body").animate({ scrollTop: 0 }, "slow");
		    $("#shape").delay("200").animate({ marginTop: "-1000px" }, "slow", function () {
		        $("#shape").css("margin-top", "-125px");
		        $(".shapeFly").hide();
		    });

		})

})