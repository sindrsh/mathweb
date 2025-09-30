settings.outformat="svg";

size(5cm);

pair B=(0,0);

void b(pair A){
	filldraw(shift((A.x+B.x, -A.y-B.y))*unitsquare, blue+opacity(0.5));
}

for(int i=-1; i<4;++i){
	for(int j=-1; j<3; ++j){
		draw(shift(i, -j)*unitsquare, grey+opacity(0.2));
	}
}

//
B = (0,0);
b((0,0));
b((1,0));
b((0,1));
b((1,1));
b((2,1));

