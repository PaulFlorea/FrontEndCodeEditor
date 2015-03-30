$(function(){
    $('#html').keydown(function (e) {
        if (e.keyCode == 9) {
        	var myValue = "\t";
        	var startPos = this.selectionStart;
        	var endPos = this.selectionEnd;
        	var scrollTop = this.scrollTop;
        	this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos,this.value.length);
        	this.focus();
        	this.selectionStart = startPos + myValue.length;
        	this.selectionEnd = startPos + myValue.length;
        	this.scrollTop = scrollTop;

        	e.preventDefault();
        }
    });
    $('#css').keydown(function (e) {
        if (e.keyCode == 9) {
            var myValue = "\t";
            var startPos = this.selectionStart;
            var endPos = this.selectionEnd;
            var scrollTop = this.scrollTop;
            this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos,this.value.length);
            this.focus();
            this.selectionStart = startPos + myValue.length;
            this.selectionEnd = startPos + myValue.length;
            this.scrollTop = scrollTop;

            e.preventDefault();
        }
    });
});