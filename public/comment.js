/**
 * @author nttdocomo
 */
$(function(){
	$('#comment').submit(function(){
		var self = $(this),len = this.elements.length,data = {};
		for (var i = 0; i < len; i++){
			if(this.elements[i].value){
				data[this.elements[i].name] = this.elements[i].value;
			}
		}
		$.post(this.action,data,function(d){
			document.getElementById('comments').innerHTML += '<h3>'+d.title+'</h3><p>'+d.body+'</p>';
		}, "json")
		return false;
	})
})
