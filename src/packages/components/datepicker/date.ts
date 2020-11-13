const date = {

    /**
     * 
     * @param {时间} time 
     * @param {格式} format 
     */
    format(time: string, format: string) {

        let date = new Date(time)
        let str = format;
        str = str.replace('yyyy', date.getFullYear().toString())
        str = str.replace('MM', this.PrefixZero(date.getMonth() + 1, 2))
        str = str.replace('dd', this.PrefixZero(date.getDate(), 2))
        str = str.replace('HH', this.PrefixZero(date.getHours(), 2))
        str = str.replace('mm', this.PrefixZero(date.getMinutes(), 2))
        str = str.replace('ss', this.PrefixZero(date.getSeconds(), 2))
        str = str.replace('dd', this.PrefixZero(date.getMilliseconds(), 2))
        return str;
    },
    PrefixZero(num: number, len: number): string {
        let str = num.toString();
        for (var len = (num + "").length; len < length; len = str.length) {
            str = "0" + num;
        }
        return str;
    },

    checkTime(i: number) {
        let m = i.toString();
        if (i < 10) {
            m = "0" + i;
        }
        return m;
    },
    /**
     * 判断时间是否在范围内
     * @param {*} beginDateStr 开始时间
     * @param {*} endDateStr 结束时间
     * @param {*} currDate 当前需要判断的时间
     */
    isDuringDate: function (beginDateStr: Date, endDateStr: Date, currDate: Date) {
        if (!beginDateStr || !endDateStr) return true;
        var curDate = currDate,
            beginDate = new Date(beginDateStr),
            endDate = new Date(endDateStr);
        if (curDate >= beginDate && curDate <= endDate) {
            return true;
        }
        return false;
    }
}

export default date