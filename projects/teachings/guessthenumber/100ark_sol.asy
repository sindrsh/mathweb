settings.outformat="pdf";
defaultpen(fontsize(16 pt));
unitsize(1.5cm);

path b = unitsquare;

void f(int t=0){
	for(int i = 0; i<100; ++i){
		int j = i # 10;
		int k = i % 10;
		pen p = cyan;
		if(j % 2 == 0){
			p = green;
		}
		filldraw(shift(k, j)*b, p+opacity(0.3));
		label((string) i, (k+0.5, j+0.5));
	}
}



f(1);
