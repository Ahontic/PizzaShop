function something()
{
	var x = window.localStorage.getItem('bbb'); // x = hh['bbb']
	x = x * 1 + 1; // умножением преобразовываем string в int


	window.localStorage.setItem('bbb', x); // hh['bbb'] = x
	

	alert (x);

}