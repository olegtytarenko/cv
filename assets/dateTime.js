(function(w, d, momentJS) {
    var listsTagTime = d.getElementsByTagName('time');
    if(listsTagTime.length > 0) {
        var $listsTimeSelect = null, iTimeSelect = 0;
        while ($listsTimeSelect = listsTagTime.item(iTimeSelect++)) {
            var timeISOString = $listsTimeSelect.getAttribute('datetime');
            if(timeISOString === 'now') {
                $listsTimeSelect.innerHTML = 'Today';
            } else {
                $listsTimeSelect.innerHTML = momentJS(timeISOString).format('MMMM YYYY');
            }
        }
    }
})(window, window.document, window.moment);