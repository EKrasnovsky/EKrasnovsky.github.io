function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
	window.scrollBy(0,((top+10)/-10));
	t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}