var currentSearch = '';

//Get All Search Keys
var search = window.location.search.substr(1).split('&');
var searchKey = {};
for (var i = 0; i < search.length; i++){
	if(search != ""){
		var keyValSplit = search[i].split('=');
		searchKey[keyValSplit[0].toLowerCase()] = keyValSplit[1];
		if (searchKey[keyValSplit[0].toLowerCase()] == undefined){
			searchKey[keyValSplit[0].toLowerCase()] = '';
		}
	}
}

// Checks if Id exists
function searchContains(){
    urlKeyValDict = getUrlSearch()

    var doesNotContain = {};

    if(!urlKeyValDict['id']){
        doesNotContain['id'] = 'Shethzor';
    }
    if(!urlKeyValDict['nav']){
        doesNotContain['nav'] = 'links';
    }

    if (!$.isEmptyObject(doesNotContain)){
        updateSearch(doesNotContain)
    }
}

// Creates a dict of window.location.search
function getUrlSearch(){
    currentSearch = window.location.search;
    var urlSearch = currentSearch.substr(1);
    urlSearch = urlSearch.split('&');

    urlKeyValDict = {};

    var keyVal = {};
    for(var pos in urlSearch){
        keyVal = urlSearch[pos].split('=');
        urlKeyValDict[keyVal[0]] = keyVal[1];
    }
    return urlKeyValDict;
}

// Updates the window.location.search
function updateSearch(addKeyValDict){
    var urlKeyValDict = getUrlSearch();
    
    for(var key in addKeyValDict){
        if (urlKeyValDict[key]){
            replaceSearchValue(key, addKeyValDict[key]);
        }else{
            addSearch(key, addKeyValDict[key]);
        }
	}
	var newHref = window.location.origin + window.location.pathname + currentSearch;
	if (window.location.href != newHref){
		window.location.href = newHref;
	}
}

// Adds KEY and VALUE to window.location.search
function addSearch(key, value){
    if (currentSearch){
        currentSearch += '&' + key + '=' + value;
    }else{
        currentSearch += '?' + key + '=' + value;
	}
}

// Replaces VALUE of KEY from window.location.search
function replaceSearchValue(key, value){    
    var urlKeyValDict = getUrlSearch()

    if (urlKeyValDict[key] != value){
        
        urlKeyValDict[key] = value;
        var replaceOldSearch = '?'
        
        for(var key in urlKeyValDict){
            replaceOldSearch += key + '=' + urlKeyValDict[key] + '&';
        }

        currentSearch = replaceOldSearch.substr(0, replaceOldSearch.length - 1);
    }
}

//Link Animations
var linkAnimations = [
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_ꈍᴥꈍʔ",
						"ʕꈍᴥꈍ_ʔ",
						"ʕ_ꈍᴥꈍʔ",
						"ʕꈍᴥꈍ_ʔ",
						"ʕ_ꈍᴥꈍʔ",
						"ʕ_ꈍᴥꈍʔ_Are_you_here_because_of_me?",
						"ʕ_ꈍᴥꈍʔ_Are_you_here_because_of_me?",
						"ʕ_ꈍᴥꈍʔ_Are_you_here_because_of_me?",
						"ʕ_ꈍᴥꈍʔ_Are_you_here_because_of_me?",
						"ʕ_ꈍᴥꈍʔ",
						"ʕꈍᴥꈍ_ʔ",
						"ʕ_ꈍᴥꈍʔ",
						"ʕꈍᴥꈍ_ʔ",
						"ʕ_ꈍᴥꈍʔ",
						"ʕ_ꈍᴥꈍʔ_Hehehe",
						"ʕ_ꈍᴥꈍʔ_Hehehe",
						"ʕ_ꈍᴥꈍʔ_Hehehe",
						"ʕ_ꈍᴥꈍʔ_Hehehe",
						"ʕ_ꈍᴥꈍʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ_┳━┳",
						"ʕ_•ᴥ•ʔ_┳━┳",
						"ʕ_•ᴥ•ʔ_┳━┳",
						"ʕノ•ᴥ•ʔノ︵┻━┻",
						"ʕノ-ᴥ-ʔノ_____┻━┻",
						"ʕ_•ᴥ•ʔ__________┻━┻",
						"ʕ_•ᴥ•ʔ____________┻━┻",
						"ʕ_-ᴥ-ʔ______________┻━┻",
						"ʕ_•ᴥ•ʔ________________┻━┻",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ•ᴥ•ʔ",
						"ʕ-ᴥ-ʔ",
						"ʕ♡ᴥ♡ʔ_Look_at_you!",
						"ʕ♡ᴥ♡ʔ_Look_at_you!",
						"ʕ-ᴥ-ʔ_Look_at_you!",
						"ʕ♡ᴥ♡ʔ_Look_at_you!",
						"ʕ♡ᴥ♡ʔ",
						"ʕ-ᴥ-ʔ",
						"ʕ≧ᴥ≦ʔ",
						"ʕ≧ᴥ≦ʔ_SO_CUUUUUUUUTE!!!",
						"ʕ≧ᴥ≦ʔ_SO_CUUUUUUUUTE!!!",
						"ʕ≧ᴥ≦ʔ_SO_CUUUUUUUUTE!!!",
						"ʕ≧ᴥ≦ʔ_SO_CUUUUUUUUTE!!!",
						"ʕ≧ᴥ≦ʔ",
						"ʕ-ᴥ-ʔ",
						"ʕ•ᴥ•ʔ",
						"ʕ•ᴥ•ʔ_Sorry...",
						"ʕ-ᴥ-ʔ_Sorry...",
						"ʕ•ᴥ•ʔ_Sorry...",
						"ʕ•ᴥ•ʔ_Sorry...",
						"ʕ-ᴥ-ʔ",
						"ʕ•ᴥ•ʔ",
						"ʕ•ᴥ•ʔ_I_don't_know_what_just_happened",
						"ʕ-ᴥ-ʔ_I_don't_know_what_just_happened",
						"ʕ•ᴥ•ʔ_I_don't_know_what_just_happened",
						"ʕ•ᴥ•ʔ_I_don't_know_what_just_happened",
						"ʕ-ᴥ-ʔ",
						"ʕ•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"┤_•ᴥ•ʔ",
						"┴┤-ᴥ-ʔ",
						"┬┴┤ᴥ•ʔ",
						"┴┬┴┤•ʔ",
						"┬┴┬┴┤ʔ",
						"┬┴┬┴┤ʔ_WTF!!!",
						"┬┴┬┴┤ʔ_WTF!!!",
						"┬┴┬┴┤ʔ_WTF!!!",
						"┬┴┬┴┤ʔ_WTF!!!",
						"┬┴┬┴┤ʔ",
						"┬┴┬┴┤-ʔ",
						"┬┴┬┴┤ᴥ•ʔ",
						"┬┴┬┴┤ᴥ•ʔ_I_am_watching_you!",
						"┬┴┬┴┤ᴥ-ʔ_I_am_watching_you!",
						"┬┴┬┴┤ᴥ•ʔ_I_am_watching_you!",
						"┬┴┬┴┤ᴥ•ʔ_I_am_watching_you!",
						"┴┬┴┤-ᴥ-ʔ",
						"┬┴┤_•ᴥ•ʔ",
						"┴┤ʕ_•ᴥ•ʔ",
						"┤_ʕ_-ᴥ-ʔ",
						"__ʕ_•ᴥ•ʔ",
						"__ʕ•ᴥ•_ʔ",
						"_ʕ-ᴥ-_ʔ",
						"ʕ•ᴥ•_ʔ",
						"ʕ•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ_Do_you_want_some_love?",
						"ʕ_•ᴥ•ʔ_Do_you_want_some_love?",
						"ʕ_-ᴥ-ʔ_Do_you_want_some_love?",
						"ʕ_•ᴥ•ʔ_Do_you_want_some_love?",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ_Of_course_you_want_some!",
						"ʕ_•ᴥ•ʔ_Of_course_you_want_some!",
						"ʕ_•ᴥ•ʔ_Of_course_you_want_some!",
						"ʕ_-ᴥ-ʔ_Of_course_you_want_some!",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ_Catch_it!",
						"ʕ_-ᴥ-ʔ_Catch_it!",
						"ʕ_•ᴥ•ʔ_Catch_it!",
						"ʕ_•ᴥ•ʔ_Catch_it!",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ-",
						"ʕ_•ᴥ•ʔ/",
						"ʕ_•ᴥ•ʔﾉ",
						"ʕ_•ᴥ•ʔ/♡",
						"ʕ_-ᴥ-ʔ-___♡",
						"ʕ_•ᴥ•ʔ_______♡",
						"ʕ_•ᴥ•ʔ__________♡",
						"ʕ_-ᴥ-ʔ____________♡",
						"ʕ_•ᴥ•ʔ______________♡",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʔ_•ᴥ•ʔ",
						"-ʔ•ᴥ•ʔ",
						"ᴥ•ʔᴥ-ʔ",
						"•ᴥ•ʔ•ʔ",
						"_-ᴥ-ʔʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʔ_•ᴥ•ʔ",
						"-ʔ•ᴥ•ʔ",
						"ᴥ•ʔᴥ-ʔ",
						"•ᴥ•ʔ•ʔ",
						"_-ᴥ-ʔʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕʕ_•ᴥ•ʔ",
						"ʕ_ʕ_-ᴥ-ʔ",
						"ʕ_•ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ_ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ_ʕ-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ_ʕ•ᴥ•_ʔ",
						"ʕ_♡ᴥ♡ʔʕ♡ᴥ♡_ʔ",
						"ʕ_♡ᴥ♡ʔʕ-ᴥ-_ʔ",
						"ʕ_-ᴥ-ʔʕ♡ᴥ♡_ʔ",
						"ʕ_♡ᴥ♡ʔʕ♡ᴥ♡_ʔ",
						"ʕ_♡ᴥ♡ʔʕ♡ᴥ♡_ʔ",
						"ʕ_♡ᴥ♡ʕ-ᴥ-_ʔ",
						"ʕ_-ᴥʕ♡ᴥ♡_ʔ",
						"ʕ_♡ᴥʕᴥ♡_ʔ",
						"ʕ_♡ᴥʕ♡__ʔ",
						"ʕ_♡ᴥʕ____ʔ",
						"ʕ_-ᴥʕ____ʔ♡",
						"ʕ_-ᴥʕ____ʔ_♡",
						"ʕ_-ᴥʕ____ʔ__♡",
						"ʕ_-ᴥʕ____ʔ___♡",
						"ʕ_-ᴥʕ____ʔ____♡",
						"ʕ_-ᴥʕ____ʔ_____♡",
						"ʕ_≧ᴥʕ•__ʔ",
						"ʕ_≧ᴥʕᴥ-_ʔ",
						"ʕ_≧ᴥʕ•ᴥ•_ʔ",
						"ʕ_≧ʕ•ᴥ•_ʔ",
						"ʕ_ʕ•ᴥ•_ʔ",
						"ʕʕ-ᴥ-_ʔ",
						"ʕ•ᴥ•_ʔ",
						"•ᴥ•_ʔʔ",
						"ᴥ-_ʔꈍʔ",
						"•_ʔᴥꈍʔ",
						"_ʔꈍᴥꈍʔ",
						"ʔ_ꈍᴥꈍʔ",
						"ʕ_ꈍᴥꈍʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_-ᴥ-ʔ",
						"ʔ_•ᴥ•ʔ",
						"_ʔ•ᴥ•ʔ",
						"__ʔᴥ•ʔ",
						"___ʔ-ʔ",
						"____ʔʔ",
						"ʕ____ʔ",
						"ʕʕ____ʔ",
						"ʕ_ʕ____ʔ",
						"ʕ_•ʕ____ʔ",
						"ʕ_-ᴥʕ____ʔ",
						"ʕ_•ᴥ•ʕ____ʔ",
						"ʕ_•ᴥ•ʔʕ____ʔ",
						"ʕ_-ᴥ-ʔ_ʕ____ʔ",
						"_ʕ_•ᴥʔ__ʕ___ʔ",
						"_ʕ__•ʔ__ʕ___ʔ",
						"_ʕ___ʔ__ʕ•__ʔ",
						"_ʕ___ʔ__ʕᴥ•_ʔ",
						"_ʕ____ʔʕ-ᴥ-_ʔ",
						"__ʕ____ʔᴥ•_ʔ",
						"___ʕ____ʔ_ʔ",
						"___ʕʕ____ʔ",
						"_ʕ_ಠᴥʕ____ʔ",
						"ʕ_ಠᴥಠʔ_ʕ____ʔ",
						"_ʕ_-ᴥʔ__ʕ___ʔ",
						"_ʕ__ಠʔ__ʕ___ʔ",
						"_ʕ___ʔ__ʕಠ__ʔ_Jotaro",
						"_ʕ___ʔ__ʕᴥ-_ʔ_JOtaro",
						"_ʕ____ʔʕಠᴥಠ_ʔ_JOTAro",
						"__ʕ____ʔᴥಠ_ʔ__JOTARO",
						"___ʕ____ʔ_ʔ",
						"___ʕʕ____ʔ",
						"_ʕ_-ᴥʕ____ʔ",
						"ʕ_ಠᴥಠʔ_ʕ____ʔ",
						"_ʕ_ಠᴥʔ__ʕ___ʔ",
						"_ʕ__ಠʔ__ʕ___ʔ",
						"_ʕ___ʔ__ʕ-__ʔ_dio",
						"_ʕ___ʔ__ʕᴥಠ_ʔ_Dio",
						"_ʕ____ʔʕಠᴥಠ_ʔ_DIo",
						"__ʕ____ʔᴥಠ_ʔ__DIO",
						"___ʕ____ʔ_ʔ",
						"___ʕʕ____ʔ",
						"_ʕ_ಠᴥʕ____ʔ",
						"ʕ_ಠᴥಠʔʕ____ʔ",
						"_-ᴥ-ʔ__ʕ____ʔ",
						"ಠᴥಠʔ____ʕ___ʔ",
						"ᴥಠʔ_____ʕ___ʔ",
						"ಠʔ______ʕ•__ʔ",
						"ʔ_______ʕᴥ•_ʔ",
						"_______ʕ-ᴥ-_ʔ",
						"______ʕ•ᴥ•_ʔ",
						"_____ʕ•ᴥ•_ʔ",
						"____ʕ-ᴥ-_ʔ",
						"__ʕ•ᴥ•_ʔ",
						"_ʕ•ᴥ•_ʔ",
						"ʕ-ᴥ-_ʔ",
						"_ʕ•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_⩾ᴥ⩽ʔ",
						"ʕ_⩾ᴥ⩽ʔ_It's_cold_up_here",
						"ʕ_⩾ᴥ⩽ʔ_It's_cold_up_here",
						"ʕ_⩾ᴥ⩽ʔ_It's_cold_up_here",
						"ʕ_⩾ᴥ⩽ʔ_It's_cold_up_here",
						"ʕ_⩾ᴥ⩽ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_ᵔᴥᵔʔ",
						"ʕ_ᵔᴥᵔʔ",
						"ʕ_ᵔᴥᵔʔ",
						"ʕ_ᵔᴥᵔʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"_ʕ_•ᴥ•ʔ",
						"┏ʕ_•ᴥ•ʔ┛",
						"┗ʕ_-ᴥ-ʔ┒",
						"┏ʕ•ᴥ•_ʔ┛",
						"┗ʕ•ᴥ•_ʔ┒",
						"┏ʕ_•ᴥ•ʔ┛",
						"┗ʕ_•ᴥ•ʔ┒",
						"┏ʕ-ᴥ-_ʔ┛",
						"┗ʕ•ᴥ•_ʔ┒",
						"┏ʕ_•ᴥ•ʔ┛",
						"┗ʕ_-ᴥ-ʔ┒",
						"┏ʕ•ᴥ•_ʔ┛",
						"┗ʕ•ᴥ•_ʔ┒",
						"┏ʕ_•ᴥ•ʔ┛",
						"┗ʕ_-ᴥ-ʔ┒",
						"┏ʕ•ᴥ•_ʔ┛",
						"┗ʕ•ᴥ•_ʔ┒",
						"┏ʕ_-ᴥ-ʔ┛",
						"┗ʕ_•ᴥ•ʔ┒",
						"┏ʕ•ᴥ•_ʔ┛",
						"┗ʕ•ᴥ•_ʔ┒",
						"┏ʕ_-ᴥ-ʔ┛",
						"┗ʕ_•ᴥ•ʔ┒",
						"_ʕ_•ᴥ•ʔ",
						"_ʕ•ᴥ•ʔ",
						"_ʕ-ᴥ-_ʔ",
						"_ʕ•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"_ʕ_-ᴥ-ʔ",
						"┗ʕ_•ᴥ•ʔ┛",
						"┏ʕ_•ᴥ•ʔ┒",
						"┗ʕ_•ᴥ•ʔ┛",
						"┏ʕ-ᴥ-_ʔ┒",
						"┗ʕ•ᴥ•_ʔ┛",
						"┏ʕ_•ᴥ•ʔ┒",
						"┗ʕ_•ᴥ•ʔ┛",
						"┏ʕ•ᴥ•_ʔ┒",
						"┗ʕ-ᴥ-_ʔ┛",
						"┏ʕ_•ᴥ•ʔ┒",
						"┗ʕ_•ᴥ•ʔ┛",
						"┏ʕ-ᴥ-_ʔ┒",
						"┗ʕ•ᴥ•_ʔ┛",
						"┏ʕ_•ᴥ•ʔ┒",
						"┗ʕ_-ᴥ-ʔ┛",
						"┏ʕ•ᴥ•_ʔ┒",
						"┗ʕ•ᴥ•_ʔ┛",
						"┏ʕ_•ᴥ•ʔ┒",
						"┗ʕ_-ᴥ-ʔ┛",
						"┏ʕ•ᴥ•_ʔ┒",
						"┗ʕ•ᴥ•_ʔ┛",
						"_ʕ•ᴥ•_ʔ",
						"ʕ-ᴥ-_ʔ",
						"_ʕ•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•3•ʔ♡",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•3•ʔ♡",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•3•ʔ♡",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•3•ʔ♡",
						"ʕ_•ᴥ•ʔ",
					],
					[
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ",
						"ʕ_•ᴥ•ʔ_I'm_a_wizard",
						"ʕ_-ᴥ-ʔ_I'm_a_wizard",
						"ʕ_•ᴥ•ʔ_I'm_a_wizard",
						"ʕ_•ᴥ•ʔ_I'm_a_wizard",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ⊃━☆",
						"ʕ_•ᴥ•ʔ⊃━☆ﾟ",
						"ʕ_•ᴥ•ʔ⊃━☆｡ﾟ",
						"ʕ_-ᴥ-ʔ⊃━☆･｡ﾟ",
						"ʕ_•ᴥ•ʔ⊃━☆*･｡ﾟ",
						"ʕ_•ᴥ•ʔ⊃━☆.*･｡ﾟ",
						"ʕ_•ᴥ•ʔ⊃━☆.*･｡ﾟ",
						"ʕ_-ᴥ-ʔ⊃━☆_.*･｡",
						"ʕ_•ᴥ•ʔ⊃━☆__.*･",
						"ʕ_•ᴥ•ʔ⊃━☆___.*",
						"ʕ_-ᴥ-ʔ⊃━☆____.",
						"ʕ_•ᴥ•ʔ⊃━☆",
						"ʕ_-ᴥ-ʔ",
						"ʕ_•ᴥ•ʔ",
					],
				];

//Animate frames
var linkAnimCounter = 0;
var linkRandomAnim = Math.floor(Math.random() * linkAnimations.length);
var linkAnimRunning = false;
var linkOldRandNum = 0;
function startLinkAnimation(){
	setInterval(linkAnimation, 400);
}
function linkAnimation(){
	if (!linkAnimRunning && Math.floor(Math.random() * 10) == 1){
		while (linkOldRandNum == linkRandomAnim){
			linkRandomAnim = Math.floor(Math.random() * (linkAnimations.length - 1)) + 1;
		}
		linkAnimRunning = true;
	}else if (!linkAnimRunning){
		linkRandomAnim = 0;
		linkAnimRunning = true;
	}
	if (searchKey["animation"] != undefined){
		linkRandomAnim = searchKey["animation"];
	}
	if (linkAnimCounter == linkAnimations[linkRandomAnim].length){
		linkAnimCounter = 0;
		linkOldRandNum = linkRandomAnim;
		linkAnimRunning = false;
	}
	var cleanLink = window.location.href.replace(window.location.hash, '').replace('#', '');
	window.location.href = cleanLink + '#' + linkAnimations[linkRandomAnim][linkAnimCounter];
	linkAnimCounter++;
}

//User
var user = 'shethzor'
if (searchKey['id']){
	user = searchKey['id'].toLowerCase();
}

document.onreadystatechange = () => {
	if (document.readyState === 'complete'){
		setLanguage();
		if (searchKey['strtip'] != undefined){
			loadStreamerHelp();
		}else{
			loadButtonAreas();
			setStreamDays();
			setStreamTime();
			document.getElementById('MatureContentButton').addEventListener('click', MatureContentToggle)	
		}
		loadStyles();
		displayPage();
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
	for (var label in dictLanguage['label']){
		document.getElementById("display-language-" + label).innerHTML = dictLanguage['label'][label];
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
    var streamPlatform = {
        'youtube' : {'color': '#cc191e'},
        'twitch' : {'color' : '#6441a5'},
    }
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
			//Link
			case 'oso':
				startLinkAnimation();
				break;
			//Website
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

//Twitch Player
setInterval(checkLiveStatus, 2000);
var response;
var isLive = false;
function checkLiveStatus(){
	var url = "https://decapi.me/twitch/uptime/" + user;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'text';
	xhr.onload = function () {
    	if (xhr.readyState === xhr.DONE) {
       		if (xhr.status === 200) {
				test(xhr.responseText);
        	}
    	}
	}
	xhr.send(null);
	if(response != undefined){
		response = response.replace(user + " is ", "");
		var streamPlayer = document.getElementById("streaming-player").classList;
		var streamTimes = document.getElementById("streaming-times").classList;
		switch(response){
			case "offline":
				if (isLive){
					streamTimes.add("d-block");
					streamTimes.remove("d-none");
					streamPlayer.add("d-none");
					streamPlayer.remove("d-block");
					isLive = false;
				}
				break;
			default:
				if (!isLive){
					streamTimes.add("d-none");
					streamTimes.remove("d-block");
					streamPlayer.add("d-block");
					streamPlayer.remove("d-none");
					document.getElementById("stream-embed").src = "https://player.twitch.tv/?channel=" + user + "&parent=shethzor.tv";
					isLive = true;
				}
		}
	}
}
function test(responseText){
	response = responseText;
}

function loadStreamerHelp(){
	div = document.getElementById('other-content');
	div.classList.remove('d-none');
	div.classList.add('d-block');
	document.getElementById('other-content').innerHTML += '<div style="margin-bottom: 25px; background-color: rgba(0,0,0,0.9); padding: 25px; border-radius: 5px;">' +
	
	'<h1>Info</h1>' +
	'You can get everything on that page for <b>FREE</b>' + '<div style="border: white 1px solid; margin: 20px 0"></div>' + 


	'<h1>Banner & Color</h1>' +
	'<b>Profile Banner</b> : 1800x570' + '<br><br>' + 
	'<b>Video Player Banner (Offline)</b> : 1920x1080' + '<br><br>' + 
	'<b>Profile Accent Color</b> : You choose' + '<div style="border: white 1px solid; margin: 20px 0"></div>' + 

	'<h1>Panels</h1>' +
	'Make sure to create some panels:' + '<br>' + 
	'► <a href="https://nerdordie.com/resources/free-resources/customizable-twitch-panels/" target="_blank">NerdOrDie panel maker</a>' + '<br>' +
	'► <a href="https://nerdordie.com/apps/ow-panel-maker/app.html" target="_blank">NerdOrDie Overwatch panel maker</a>.' + '<div style="border: white 1px solid; margin: 20px 0"></div>' + '<br>' + 
	'► <a href="https://gamingvisuals.com/free-twitch-panels" target="_blank">Gamingvisuals panel maker</a>' +

	'<h1>Overlays</h1>' +
	'You can get overlays at:' + '<br>' + 
	'► <a href="https://nerdordie.com/product-tag/free-resource/?orderby=price" target="_blank">NerdOrDie overlays</a> ("Suggested Price")' + '<br>' + 
	'► <a href="https://streamelements.com/dashboard/themes" target="_blank">StreamElement overlays</a>.' + '<div style="border: white 1px solid; margin: 20px 0"></div>' + 

	'<h1>Emotes</h1>' +
	'Get extra emotes with <a href="https://betterttv.com" target="_blank">BetterTTV</a> which includes <a href="https://www.frankerfacez.com" target="_blank">FrankerFaceZ</a>.' + '<br>' + 
	'Make sure you have those extensions activated in yout OBS.' + '<br><br>' + 
	'If you dont use Google Chrome you need to install this:' + '<br>' +
	'► <a href="addons.mozilla.org/firefox/addon/cpi/" target="_blank">Firefox</a>' + '<br>' +
	'► <a href="https://addons.opera.com/extensions/details/install-chrome-extensions/" target="_blank">Opera</a>'  + '<div style="border: white 1px solid; margin: 20px 0"></div>' +

	'<h1>Sound</h1>' +
	'I recommend an audio mixer like <a href="https://vb-audio.com/Voicemeeter/potato.htm" target="_blank">VoiceMeeter</a>. It will make audio management way easier.' + '<br><br>' + 
	'If you use <a href="https://vb-audio.com/Cable/index.htm" target="_blank">Virtual Audio Cable</a> on top, you can set music in the background which you can change the volume of seperatly without the stream noticing it.' + '<br><br>' +
	'Sometimes you just don\'t want to hear music while playing but your stream wants to.' + '<div style="border: white 1px solid; margin: 20px 0"></div>' + 

	'<h1>Tips</h1>' +
	'1. Make sure that at the bottom right of your profile banner you have a static color and pick this color as accent.' + '<br>' + 
	'You want to combine the banner and the accent color.' + '<br><br>' + 
	'2. Take one color that you want people to associate with you.' + '<br>' + 
	'You can take my page as guidiance if you want: <a href="https://www.twitch.tv/shethzor#I_hope_it_helps" target="_blank">Shethzor</a>.' + '<br>' + 
	'That does not mean that you can copy paste everything!' + '<br><br>' +
	'3. Make sure that people can find you.' + '<br>' + 
	'Put your social media everywhere you can.' + '<br><br>' +  
	'4. Make sure to set up your donate button.' + '<br>' + 
	'As unlikely as it may seem that someone donates, but people like me do that.' + '<br><br>' + 
	'5. Add a BOT with commands and timers to your chat.' + '<br>' + 
	'► You can find some easily with this <a href="https://www.google.com/search?q=twitch+chat+bots" target="_blank">search</a>.' + '<br><br>' + 
	'6. Place your cam on the right side, since Twitch shows the "LIVE" and the viewercount on the right. ' + '<br>' + 
	'► You can see it over <a href="https://www.twitch.tv/directory/game/Just%20Chatting" target="_blank">here</a>.' + '<div style="border: white 1px solid; margin: 20px 0"></div>' +

	'<h1>Channel Settings</h1>' +
	'► <a href="https://dashboard.twitch.tv/settings/channel" target="_blank">Settings</a>' + '<div style="border: white 1px solid; margin: 20px 0"></div>' +
	'Click that button if you want to find me somewhere!' + '<br>' +
	'<a href="https://Shethzor.tv" style="display: block; max-width: 204px; color: #fff; text-decoration: none; margin-top: 20px; padding: 10px; background-color: #8800ff; border-radius: 5px;">Back to normal Page</a>' + '<br></div>'
}

//Usefull
function isEmptyOrNull(variable){
	if (variable == '' || variable == null){
		return true;
	}
	return false;
}
