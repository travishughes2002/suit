export default function() {
    function isEmpty(value) {
        if(value == null || undefined || '') {
            return true;
        } else {
            return false;
        }
    }

    function compareArray(value, array) {
        for(let index in array) {
            if(value === array[index]) {
                return true;
            }
        }

        return false;
    }

    return { isEmpty, matches }
}