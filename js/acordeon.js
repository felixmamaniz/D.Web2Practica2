
$(function()
{
	$(".item").on("click", abrirAcordeon);
});

function abrirAcordeon()
{
	$(".acordeonActivado").children().eq(1).hide();
	$(".acordeonActivado").removeClass("acordeonActivado");
	$(this).children().eq(1).fadeIn();
	$(this).addClass("acordeonActivado");
}