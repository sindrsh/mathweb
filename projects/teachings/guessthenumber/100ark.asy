settings.outformat="pdf";
defaultpen(fontsize(16 pt));
unitsize(1.5cm);

path b = unitsquare;

void f(int t=0){
	for(int i = 0; i<100; ++i){
		int j = i # 10;
		int k = i % 10;
		draw(shift(k, j)*b);
	}
}

label("0", (0.5, 0.5));
label("1", (1.5, 0.5));

f(1);
