(function(w, d, JSON, XMLHttpRequest, momentJS) {
    var self = {
        readTextFile: function(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status === 200) {
                    callback(rawFile.responseText);
                }
            };
            rawFile.send(null);
        },
        objectElement: d.getElementById('showListsWorked'),
        objectEducation: d.getElementById('showListsEducation'),
        objectAchievements: d.getElementById('showListsAchievements')
    };

    self.readTextFile("libs/works.en.json", function(text){
        var data = JSON.parse(text);
        if(data.hasOwnProperty('lists') && data.lists.length > 0) {
            data.lists.forEach(function(itemWorkInfo) {
                var objectAppend = d.createElement('div');
                objectAppend.setAttribute('class', 'row work__item');

                var timeContent = d.createElement('div');
                timeContent.setAttribute('class', 'col-lg-3 text-right');

                var dateBegin = momentJS(itemWorkInfo.dateBegin);
                var dateEnd = momentJS(itemWorkInfo.dateEnd);
                if(itemWorkInfo.dateEnd === 'now') {
                    dateEnd = momentJS();
                }

                var $timeDateBegin = d.createElement('span');
                $timeDateBegin.setAttribute('class', 'time__text-title');
                $timeDateBegin.innerHTML = dateBegin.format('MMM YYYY') + ' - ';

                var $timeDateEnd = d.createElement('span');
                $timeDateEnd.setAttribute('class', 'time__text-title');
                $timeDateEnd.innerHTML = dateEnd.format(' MMM YYYY');


                var $timeDiffHTML = d.createElement('span');
                $timeDiffHTML.setAttribute('class', 'time__text-diff');
                $timeDiffHTML.innerHTML = [
                    dateEnd.diff(dateBegin, 'years'), 'Years',
                    dateEnd.diff(dateBegin, 'month') - (dateEnd.diff(dateBegin, 'years') * 12),
                    'Months'
                ].join(' ');



                timeContent.appendChild($timeDateBegin);
                timeContent.appendChild($timeDateEnd);
                timeContent.appendChild($timeDiffHTML);


                var $contentLists = d.createElement('div');
                $contentLists.setAttribute('class', 'col-lg-9 text-left');


                var $titleWork = d.createElement('h3');
                $titleWork.setAttribute('class', 'work__text-title');
                if(typeof itemWorkInfo.positionsHeld === 'object') {
                    $titleWork.innerHTML = itemWorkInfo.positionsHeld.join(', ');
                } else {
                    $titleWork.innerHTML = itemWorkInfo.positionsHeld;
                }

                var $textDev = d.createElement('div');
                $textDev.setAttribute('class', 'work__text-title-company');
                $textDev.innerHTML = itemWorkInfo.title;

                var $classes = d.createElement('div');
                $classes.setAttribute('class', 'work__text-title');
                $classes.innerHTML = itemWorkInfo.classifications.join(', ');

                $contentLists.appendChild($titleWork);
                $contentLists.appendChild($textDev);
                $contentLists.appendChild($classes);

                objectAppend.appendChild(timeContent);
                objectAppend.appendChild($contentLists);
                self.objectElement.appendChild(objectAppend);
            });
        }
        if(data.hasOwnProperty('educations') && data.educations.length > 0) {
            data.educations.forEach(function(educationInfo) {
                var objectAppend = d.createElement('div');
                objectAppend.setAttribute('class', 'row work__item');

                var timeContent = d.createElement('div');
                timeContent.setAttribute('class', 'col-lg-3 text-right');

                var dateBegin = momentJS(educationInfo.dateBegin);
                var dateEnd = momentJS(educationInfo.dateEnd);
                if(educationInfo.dateEnd === 'now') {
                    dateEnd = momentJS();
                }

                var $timeDateBegin = d.createElement('span');
                $timeDateBegin.setAttribute('class', 'time__text-title');
                $timeDateBegin.innerHTML = dateBegin.format('MMM YYYY') + ' - ';

                var $timeDateEnd = d.createElement('span');
                $timeDateEnd.setAttribute('class', 'time__text-title');
                $timeDateEnd.innerHTML = dateEnd.format(' MMM YYYY');


                var $timeDiffHTML = d.createElement('span');
                $timeDiffHTML.setAttribute('class', 'time__text-diff');
                $timeDiffHTML.innerHTML = [
                    dateEnd.diff(dateBegin, 'years'), 'Years',
                    dateEnd.diff(dateBegin, 'month') - (dateEnd.diff(dateBegin, 'years') * 12),
                    'Months'
                ].join(' ');



                timeContent.appendChild($timeDateBegin);
                timeContent.appendChild($timeDateEnd);
                timeContent.appendChild($timeDiffHTML);


                var $contentLists = d.createElement('div');
                $contentLists.setAttribute('class', 'col-lg-9 text-left');


                var $titleWork = d.createElement('h3');
                $titleWork.setAttribute('class', 'work__text-title');
                if(typeof educationInfo.positionsHeld === 'object') {
                    $titleWork.innerHTML = educationInfo.positionsHeld.join(', ');
                } else {
                    $titleWork.innerHTML = educationInfo.positionsHeld;
                }

                var $textDev = d.createElement('div');
                $textDev.setAttribute('class', 'work__text-title-company');
                $textDev.innerHTML = educationInfo.title;

                $contentLists.appendChild($titleWork);
                $contentLists.appendChild($textDev);

                if(educationInfo.hasOwnProperty('hasNotEnd')) {
                    //hasNotEnd
                    var $classes = d.createElement('div');
                    $classes.setAttribute('class', 'work__text-title');
                    $classes.innerHTML = educationInfo.hasNotEnd;
                    $contentLists.appendChild($classes);

                }

                objectAppend.appendChild(timeContent);
                objectAppend.appendChild($contentLists);
                self.objectEducation.appendChild(objectAppend);
            });
        }

        if(data.hasOwnProperty('achievements') && data.achievements.length > 0) {
            data.achievements.forEach(function(achievementInfo) {
                var objectAppend = d.createElement('div');
                objectAppend.setAttribute('class', 'row work__item');

                var timeContent = d.createElement('div');
                timeContent.setAttribute('class', 'col-lg-3 text-right');

                var $timeDateBegin = d.createElement('span');
                $timeDateBegin.setAttribute('class', 'time__text-title');
                $timeDateBegin.innerHTML = achievementInfo.title;

                timeContent.appendChild($timeDateBegin);



                var $contentLists = d.createElement('div');
                $contentLists.setAttribute('class', 'col-lg-9 text-left');


                var $titleWork = d.createElement('h3');
                $titleWork.setAttribute('class', 'work__text-title');
                $titleWork.innerHTML = achievementInfo.company;

                var $textDev = d.createElement('div');
                $textDev.setAttribute('class', 'work__text-title-company');
                $textDev.innerHTML = achievementInfo.skils.join(', ');

                $contentLists.appendChild($titleWork);
                $contentLists.appendChild($textDev);


                objectAppend.appendChild(timeContent);
                objectAppend.appendChild($contentLists);
                self.objectAchievements.appendChild(objectAppend);
            })
        }
    });
})(window, window.document, window.JSON, window.XMLHttpRequest, window.moment);