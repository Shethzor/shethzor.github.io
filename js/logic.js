//Get All Search Keys
var search = window.location.search.substr(1).split('&');
var searchKey = {};
for (var i = 0; i < search.length; i++){
	searchKey[search[i].split('=')[0]] = search[i].split('=')[1]
}

//User
var user = 'shethzor'
if (searchKey['id']){
	user = searchKey['id'].toLowerCase();
}

var language = 'en';
document.onreadystatechange = () => {
	if (document.readyState === 'complete'){
        setLanguage();
		loadButtonAreas();
		setStreamDays();
		setStreamTime();
		loadStyles();
		displayPage();
		document.getElementById('MatureContentButton').addEventListener('click', MatureContentToggle)
	}
};

function displayPage(){
	if (!isRedirect){
		document.getElementById('Display').classList.remove('d-none');
		document.getElementById('Display').classList.add('d-block');
	}
}

//Set Language
function setLanguage(){
	for (var lang in searchKey) {
		if (searchKey['l']){
			if (dictLanguage.hasOwnProperty(searchKey[lang]) && dictLanguage[searchKey[lang]] != null) {
				language = searchKey[lang];
				for (var label in dictLanguage['label']){
					document.getElementById("display-language-" + label).innerHTML = dictLanguage['label'][label];
				}
			}
		}
	}
}

// Show 18+ Button
var showMatureContentButton = false;
var showMatureContentToggle = false;
function MatureContentToggle() {
	if (!showMatureContentToggle){
		document.getElementById('MatureContentButton').innerHTML = '18+ ON';
		document.getElementById('MatureContentButton').style.backgroundColor = '#00ff00';
		document.getElementById('MatureContentButton').style.color = '#000000';

		for (var page in dictLinks){
			if (dictLinks[page]['matureContent']){
				document.getElementById(page + "-button").classList.remove('d-none');
				document.getElementById(page + "-button").classList.add('d-block');
			}
		}

		showMatureContentToggle = true;
	}else{
		document.getElementById('MatureContentButton').innerHTML = '18+ OFF';
		document.getElementById('MatureContentButton').style.backgroundColor = '#ff0000';
		document.getElementById('MatureContentButton').style.color = '#ffffff';
		
		for (var page in dictLinks){
			if (dictLinks[page]['matureContent']){
				document.getElementById(page + "-button").classList.remove('d-block');
				document.getElementById(page + "-button").classList.add('d-none');
			}
		}

		showMatureContentToggle = false;
	}
}

//Load Button Areas
function loadButtonAreas() {
	var panel = ['stream_', 'youtube'];
	var isTeam = ['LinksTeamMain', 'LinksTeamPartner']
	var link = '';
	for (var pageName in dictLinks){
		var pageNameType = pageName;
		var cleanPageName = pageName;
		link = dictLinks[pageName]['link'];
		var display = document.getElementById('display-' + dictLinks[pageName]['list'])
		if (display) {
			if (dictLinks[pageName]['active'] && link != ''){
				if (display.classList.contains('d-none')){
					display.classList.remove('d-none');
					display.classList.add('d-block');
					switch(dictLinks[pageName]['list']){
						case "LinksTeamMain":
						case "LinksTeamPartner":
								display = document.getElementById('display-Team');
						break;
						case "LinksSupportAffiliate":
						case "LinksSupportDonate":
							if (dictLinks[pageName]['active']){
								display = document.getElementById('display-Support');
							}
						break;
					}
					display.classList.remove('d-none');
					display.classList.add('d-block');
				}
			}
		}

	    if (dictLinks[pageName]['active']){
			for(var value in isTeam){
				var target = '';
				var displayName = '';
				var wrapperStart = '';
				var wrapperEnd = '';
				if(!(isTeam[value] == dictLinks[pageName]['list'])){
					target = 'target="_blank"';
				} else {
					displayName = '<p class="text-center displayName">' + dictLinks[pageName]['name'] + '</p>';
					wrapperStart = '<div>';
					wrapperEnd = '</div>';
					break;
				}
			}

			if (link){
				var isPanel = false;
				for (var panelName in panel) {
					if (panel[panelName] == pageName || pageName.startsWith('stream_')) {
						isPanel = true;
						if (pageName.startsWith('stream_')){
							pageNameType = pageName.substring(0,6);
							cleanPageName = pageName.replace('stream_', '');
						}
						break;
					}
					isPanel = false;
				}
				if (isPanel) {
					document.getElementById('panel').classList.remove('d-none');
					document.getElementById('panel').classList.add('d-block');

					document.getElementById('panel-' + pageNameType).classList.remove('d-none');
					document.getElementById('panel-' + pageNameType).classList.add('d-block');
					document.getElementById(pageNameType + '-channel-link').href = link;
					document.getElementById(pageNameType + '-image').src = dictLinks[pageName]['logo'];
					if (pageName == "youtube"){
						document.getElementById('latest-youtube-video').src = 'https://www.youtube.com/embed/videoseries?list=' + latestYouTubeVideoListCode;
					}
					
					if (pageName.startsWith('stream_')){
						document.getElementById('StreamColor').style.backgroundColor = streamPlatform[cleanPageName]['color'];
					}
				}else{
					if (isEmptyOrNull(dictLinks[pageName]['logo'])){
						dictLinks[pageName]['logo'] = "img/logo/default/shethzor-logo.png";
					}
					var displayButton;
					if (dictLinks[pageName]['matureContent']){
						if (!showMatureContentButton){
							document.getElementById('MatureContentButton').classList.remove('d-none');
							document.getElementById('MatureContentButton').classList.add('d-block');
							showMatureContentButton = true;
						}
						var displayButton = "d-none";
					}else{
						var displayButton = "d-block";
					}
					document.getElementById(dictLinks[pageName]['list']).innerHTML += wrapperStart + '<div id="' + pageName + '-button" class="button-icon-main ' + displayButton + '"><a href="' + dictLinks[pageName]['link'] + '" ' + target + '><img src="' + dictLinks[pageName]['logo'] + '" loading="eager" alt="' + pageName + '"></img></a>' + wrapperEnd + displayName + '</div>';
				}
		    }
		}
	}
}

//Easter Eggs
var combinationArray = new Array();
document.addEventListener('keydown', loadEgg);

function loadEgg(key){
	combinationArray.length = 20;
	for(var i = 0; i < combinationArray.length; i++){
		combinationArray[i] = combinationArray[(i+1)];
	}
	combinationArray[(combinationArray.length - 1)] = key.key;
	
	for (var i = 0; i < 20; i++){
		switch(getArrayText(combinationArray, i)){
			//Visual
			case '<3': 
				document.getElementById('Background').style.backgroundImage = 'url("img/background/hearts.gif")';
				document.body.style.fontFamily = '"Love Ya Like A Sister"';
				break;
			case '666': 
				document.getElementById('Background').style.backgroundImage = 'url("img/background/devil.gif")';
				document.body.style.fontFamily = 'Rock Salt';
				break;
			case 'invisible': 
				document.body.style.opacity = '0';
				break;
			case 'neon':
				backgroundImageLink = ' ';
				backgroundColor = 'black';
				textColor = '#00ffff';
				textShadow = '#00ffffff 0 0 8px';
				loadStyles()
			break;

			//Sounds
			case 'aw man':
			case 'creeper':
				soundEgg('https://www.youtube.com/embed/3gtQ6eMWPnM');
			break;
			case 'caramelldansen':
			case 'caramella girls':
				soundEgg('https://www.youtube.com/embed/6-8E4Nirh9s');
			break;
			case 'he-man':
			case 'heyyeyaaeyaaaeyaeyaa':
				soundEgg('https://www.youtube.com/embed/ZZ5LpwO-An4');
			break;
			case 'lol limewire':
				soundEgg('https://www.youtube.com/embed/SAp0xO-LwFs');
			break;
			case 'megalovania':
			case 'sans':
				soundEgg('https://www.youtube.com/embed/wDgQdr8ZkTw');
			break;
			}
	}
}

//Easter Egg Sound
function soundEgg(link){
	document.getElementById('easteregg').innerHTML = '<iframe class="d-none" width="560" height="315" src="' + link + '?controls=0&loop=1&autoplay=1&disablekb=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function getArrayText(combinationArray, length){
	var text = '';
	for (var i = combinationArray.length - length; i < combinationArray.length; i++){
		text += combinationArray[i];
	}
	return text;
}

//Load Style
function loadStyles() {
	if (backgroundImageLink){
		document.getElementById('Background').style.backgroundImage = 'url("' + backgroundImageLink + '")';
		document.getElementById('Background').style.filter = 'blur(' + backgroundBlur + 'px)';
	}
	document.getElementById('Background').style.backgroundColor = backgroundColor;
	document.querySelectorAll('body')[0].style.color = textColor;
	document.querySelectorAll('body')[0].style.textShadow = textShadow;
	document.getElementById('own-font').href = fontLink;
	document.getElementsByTagName('body')[0].style.fontFamily = fontName;

	//Text
	for (var h2 in document.getElementsByTagName('h2')){
		if (!isNaN(h2)){
			document.getElementsByTagName('h2')[h2].style.fontSize = 'calc(1.5vh + 1.5vw + ' + fontSize + 'px)';
		}
	}
	for (var h3 in document.getElementsByTagName('h3')){
		if (!isNaN(h3)){
			document.getElementsByTagName('h3')[h3].style.fontSize = 'calc(1vh + 1vw + ' + h3Size + 'px)';
		}
	}
	for (var p in document.getElementsByTagName('p')){
		if (!isNaN(p)){
			document.getElementsByTagName('p')[p].style.fontSize = pSize + 'px';
		}
	}

	//Tab
	document.querySelectorAll('title')[0].innerHTML = title;
	if (isEmptyOrNull(favicon)){
		favicon = 'img/icon/shethzor.png';
	}
	document.getElementById('favicon').href = favicon;

	//Copiright
	document.getElementById('Copyright').style.fontSize = copyrightSize + 'px';
	document.getElementById('Copyright').querySelectorAll('a')[0].style.color = textColor;

	//Header
	if (banner){
		if (bannerWidth){
			document.getElementById('TitleImage').style.maxWidth = bannerWidth + 'vw';
		}
		document.getElementById('TitleImage').src = banner;
		bannerEl = document.getElementById('display-TitleImage');
		bannerEl.classList.remove('d-none');
		bannerEl.classList.add('d-block');
	}
}

//Twitch Stream Days
function setStreamDays(){
	for (var day in streamDays){
		document.getElementById('streaming-' + day).innerHTML = dictLanguage['day'][day];
		document.getElementById('streaming-' + day).classList = 'streaming-' + streamDays[day];
	}
}

//Twitch Stream Time
function setStreamTime(){
	if (!isEmptyOrNull(streamTime)){
		const event = new Date('August 19, 1975 ' + streamTime + ':00:00 GMT+00:00');
		var time = event.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
		if (time.length == 5){
			time += ' ' + dictLanguage['time']['clock'];
		}
		document.getElementById('streaming-time').innerHTML = dictLanguage['time']['at'] + ' ' + time;
	}
}

//Usefull
function isEmptyOrNull(variable){
	if (variable == '' || variable == null){
		return true;
	}
	return false;
}
