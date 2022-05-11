class Event{
    name;
    date;
    time;
    priority;
    description;

    
    /**
     *
     * @param name {String}
     * @param date {Date}
     * @param time {Date}
     * @param priority {String}
     * @param description {String}
     */
    constructor(name, date, time, priority, description){
        this.name = name;
        this.date = data;
        this.time = time;
        this.priority = priority;
        this.description = description;
    }

    get name(){return this.name}

    get date(){return this.date}

    get time(){return this.time}

    get priority(){return this.priority}

    get description(){return this.description}

    /**
     * @param {string} value
     */
    set name(value){this.name = value}

    /**
     * @param {Date} value
     */
    set date(value){this.date = value}

    /**
     * @param {Date} value
     */
    set time(value){this.time = value}

    /**
     * @param {string} value
     */
    set priority(value){this.priority = value}

    /**
     * @param {string} value
     */
    set description(value){this.description = value}

}