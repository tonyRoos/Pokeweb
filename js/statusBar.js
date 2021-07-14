class statusBar{

    constructor () {
    }

    refreshAllBars( hp = 25, atk = 25, def = 25, spAtk = 25, spDef = 25, spd = 25 ) {
        let statname;
        for( let i = 1; i < 11; i++) {
            statname = `hp${i}`;
            if( hp >= 25*i ) {
                document.getElementById(statname).style.backgroundColor = "green";
            }
            else {
                document.getElementById(statname).style.backgroundColor = "white";
            }
        }

        for( let i = 1; i < 11; i++) {
            statname = `atk${i}`;
            if( atk >= 25*i) {
                document.getElementById(statname).style.backgroundColor = "green";
            }
            else {
                document.getElementById(statname).style.backgroundColor = "white";
            }
        }

        for( let i = 1; i < 11; i++) {
            statname = `def${i}`;
            if( def >= 25*i) {
                document.getElementById(statname).style.backgroundColor = "green";
            }
            else {
                document.getElementById(statname).style.backgroundColor = "white";
            }
        }

        for( let i = 1; i < 11; i++) {
            statname = `spAtk${i}`;
            if( spAtk >= 25*i) {
                document.getElementById(statname).style.backgroundColor = "green";
            }
            else {
                document.getElementById(statname).style.backgroundColor = "white";
            }
        }

        for( let i = 1; i < 11; i++) {
            statname = `spDef${i}`;
            if( spDef >= 25*i) {
                document.getElementById(statname).style.backgroundColor = "green";
            }
            else {
                document.getElementById(statname).style.backgroundColor = "white";
            }
        }

        for( let i = 1; i < 11; i++) {
            statname = `spd${i}`;
            if( spd >= 25*i) {
                document.getElementById(statname).style.backgroundColor = "green";
            }
            else {
                document.getElementById(statname).style.backgroundColor = "white";
            }
        }

    }
}