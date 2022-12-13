# ChangeDetectorPlayground

This project is in the Slovak language. For educational purposes.

## Pieskovisko na hranie sa s Change Detection
Change Detection v Angular knižnici je vysoko optimalizovaný a komplexný proces. Vo väčšine situácií 
programátor ani nepotrebuje poznať detaily jeho fungovania.

Až pri aplikáciách s veľkým množstvom zobrazovaných prvkov, s nutnosťou optimalizovať prekresľovanie
vzhľadom na rýchlosť, plynulosť animácií, príde potreba vedieť viac. Vtedy začnete objavovať skryté 
pravidlá a rôzne možnosti fungovania: Change Detection Strategy Default vs OnPush, záhadné NgZones...

V tomto projekte nájdete zbierku príkladov, ktoré pomáhajú spoznať niektoré z týchto princípov.


1.) priklad
	- riesenie push komponentu cez explicit detect change
	- riesenie push komponentu cez vm$

2.) priklad
	OnPush sa zvonku z parenta prekresli len v pripade ze sa jeho input zmeni
	ukazat input konzol logy a tym dokazat ze input nenastal ani v jednom ani v druhom pripade

3.) dvojita detekcia je kontrolny mechanizmus pre zistenie ci nedoslo k dodatocnemu zmenu view
	ExpressionChangedAfterItHasBeenCheckedError

4.) detekcia pri elemente na ktorom nie je ziadny angular listener
	detekcia pri elemente na ktorom je prazdny listener

5.) zastavenie prekreslenia na komponente s default strategiou ak jeho parent je s push strategiou
