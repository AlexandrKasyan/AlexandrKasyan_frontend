class Period{
    date
    nameСurrencyIn
    nameСurrencyOut


    /**
     *
     * @param date {Date}
     * @param nameСurrencyIn {String}
     * @param nameСurrencyOut {String}
     */

    constructor(date,nameСurrencyIn,nameСurrencyOut) {
        this.date = date
        this.nameСurrencyIn = nameСurrencyIn
        this.nameСurrencyOut = nameСurrencyOut

    }
    
    get date(){return this.date}

    get nameСurrencyIn(){return this.nameСurrencyIn}

    get nameEvent(){return this.nameEvent}

    set date(value){this.date = value}

    set nameСurrencyIn(value){this.nameСurrencyIn = value}

    set nameСurrencyOut(value){this.nameСurrencyOut = value}

}